import { array } from "zod/v4";
import { Judge0Service, Submission } from "./judge0";

interface TestCase {
  input_data: string[];
  expected_output: string;
}

type SupportedLanguage = keyof typeof Judge0Service.LANGUAGES;

export class TestRunner {
  judge0: Judge0Service;

  constructor() {
    this.judge0 = new Judge0Service();
  }

  private generateHarness(
    language: string,
    userCode: string,
    testCases: TestCase[],
    functionName: string
  ) {
    switch (language) {
      case "javascript":
        return this.generateJavascriptHarness(
          userCode,
          testCases,
          functionName
        );
      case "python":

      case "cpp":

      case "java":

      case "csharp":
    }
  }

  private generateJavascriptHarness(
    userCode: string,
    testCases: TestCase[],
    functionName: string
  ) {
    const testCaseCode = testCases
      .map((tc, index) => {
        const input = JSON.stringify(tc.input_data);
        const expected = JSON.stringify(tc.expected_output);
        return `
        try {
            const input = ${input};
            const expected = JSON.parse(${expected});
            const s = new Solution()
            const result = s.${functionName}(...input);
            const passed = JSON.stringify(result) === JSON.stringify(expected);
            console.log(JSON.stringify({
                test_case: ${index + 1},
                passed: passed,
                input: input,
                expected: expected,
                actual: result,
                error: null
            }));
        } catch (error) {
            console.log(JSON.stringify({
                test_case: ${index + 1},
                passed: false,
                input: ${input},
                expected: ${expected},
                actual: null,
                error: error.message
            }));
        }
    `;
      })
      .join("\n");

    return `${userCode}\n${testCaseCode}`;
  }

  public async runTests(
    userCode: string,
    language: SupportedLanguage,
    functionName: string,
    testCases: TestCase[]
  ) {
    const languageId = Judge0Service.LANGUAGES[language];
    if (!languageId) {
      throw new Error(`Unsupported language: ${language}`);
    }

    const harness = this.generateHarness(
      language,
      userCode,
      testCases,
      functionName
    );

    if (!harness) {
      return;
    }

    const token = await this.judge0.submitCode(languageId, harness);
    const result = await this.judge0.waitForResult(token);

    return this.parseResults(result, testCases);
  }

  private parseResults(judgeResult: any, testCases: TestCase[]) {
    const results = {
      status: this.mapJudgeStatus(judgeResult.status.id),
      overall_passed: false,
      duration_time: judgeResult.time,
      memory_used: judgeResult.memory,
      test_cases: [] as any[],
      error_message: null,
      compiler_output: judgeResult.compile_output,
      test_cases_passed: 0,
      total_test_cases: testCases.length
    };

    if (judgeResult.status.id === 6) {
      results.error_message = judgeResult.compile_output;
      return results;
    }

    if (judgeResult.status.id === 5) {
      results.error_message = judgeResult.stderr;
      return results;
    }

    if (judgeResult.stdout) {
      const lines = judgeResult.stdout.trim().split("\n");
      let passedCount = 0;

      lines.forEach((line: string) => {
        try {
          const testResult = JSON.parse(line);
          results.test_cases.push(testResult);
          if (testResult.passed) passedCount++;
        } catch (e) {

        }
      });

      results.overall_passed = passedCount === testCases.length;
      results.test_cases_passed = passedCount;
      results.total_test_cases = testCases.length;
    }

    return results;
  }

  mapJudgeStatus(statusId: number) {
    const statusMap: Record<number, String> = {
      3: "Accepted",
      4: "Wrong Answer",
      5: "Runtime Error",
      6: "Compilation Error",
      7: "Time Limit Exceeded",
    };
    return statusMap[statusId] || "Unknown";
  }
}
