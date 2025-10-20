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
        const inputParts = tc.input_data.map((inp, i) => `const input${i + 1} = ${inp};`).join('\n');
        const expected = JSON.stringify(tc.expected_output);
        return `
        try {
            ${inputParts}
            const expected = JSON.parse(${expected});
            const s = new Solution()
            const result = s.twoSum(${tc.input_data.map((_, i) => `input${i + 1}`).join(', ')});

            let passed;
            if (
              Array.isArray(result) &&
              Array.isArray(expected) &&
              result.length === 2 &&
              expected.length === 2
            ) {
              // Check for equality ignoring order
              passed =
              (result[0] === expected[0] && result[1] === expected[1]) ||
              (result[0] === expected[1] && result[1] === expected[0]);
            } else {
              // Fallback to deep equality
              passed = JSON.stringify(result) === JSON.stringify(expected);
            }

            console.log(JSON.stringify({
              test_case: ${index + 1},
              passed: passed,
              input: ${JSON.stringify(tc.input_data)},
              expected: expected,
              actual: result,
              error: null
            }));

        } catch (error) {
          console.log(JSON.stringify({
            test_case: ${index + 1},
            passed: false,
            input: ${JSON.stringify(tc.input_data)},
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
    console.log("JUDGE RES ", judgeResult)
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

    if (judgeResult.status.id === 5 || (judgeResult.status.id >= 7 && judgeResult.status.id <= 12)) {
      results.error_message = judgeResult.stderr;
      console.log(results.error_message)
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
      
      if (passedCount === testCases.length) {
        results.status = "Accepted"
      }

      results.overall_passed = passedCount === testCases.length;
      results.test_cases_passed = passedCount;
      results.total_test_cases = testCases.length;
    }

    console.log("DEBUG ", results)
    return results;
  }

  mapJudgeStatus(statusId: number) {
    const statusMap: Record<number, String> = {
      3: "Accepted",
      4: "Wrong Answer",
      5: "Runtime Error",
      6: "Compilation Error",
      7: "Runtime Error (SIGSEGV)",
      8: "Runtime Error (SIGXFSZ)",
      9: "Runtime Error (SIGFPE)",
      10: "Runtime Error (SIGABRT)",
      11: "Runtime Error (NZEC)",
      12: "Runtime Error (Other)",
      13: "Internal Error",
      14: "Exec Format Error",
    };
    return statusMap[statusId] || "Unknown";
  }
}
