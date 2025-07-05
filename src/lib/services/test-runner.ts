import { Judge0Service } from "./judge0";

interface TestCase {
  input_data: string[];
  expected_output: string[];
}

class TestRunner {
  judge0: Judge0Service;

  constructor() {
    this.judge0 = new Judge0Service();
  }

  public generateHarness(
    language: string,
    userCode: string,
    testCases: TestCase[],
    functionName: string
  ) {
    switch (language) {
      case "javascript":

      case "python":

      case "cpp":

      case "java":

      case "csharp":
    }
  }

  public generateJavascriptHarness(
    userCode: string,
    testCases: TestCase[],
    functionName: string
  ) {

  }

  
}
