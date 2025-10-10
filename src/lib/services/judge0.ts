export interface Submission {
  languageId: number;
  sourceCode: string;
  stdin: string;
  expectedOutput: string;
}

type Language = "python" | "javascript" | "java" | "cpp" | "csharp";

export class Judge0Service {
  private baseUrl: string;
  private apiKey: string;
  private headers: HeadersInit;

  constructor() {
    this.baseUrl = "https://judge0-ce.p.rapidapi.com";
    if (!process.env.NEXT_PUBLIC_RAPID_API_KEY) {
      throw Error("api key needed");
    }
    this.apiKey = process.env.NEXT_PUBLIC_RAPID_API_KEY;
    this.headers = {
      "x-rapidapi-key": this.apiKey,
      "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
      "Content-Type": "application/json",
    };
  }

  static LANGUAGES: Record<Language, number> = {
    'python': 109,
    'javascript': 102,
    'java': 91,
    'cpp': 105,
    'csharp': 51,
  } as const;

  private utf8ToBase64(string: string) {
    return Buffer.from(string).toString("base64");
  }

  private base64toUtf8(string: string) {
    return Buffer.from(string, "base64").toString();
  }

  public async submitCode(
    languageId: number,
    sourceCode: string,
    stdin = "",
    expectedOutput = ""
  ) {
    const submission = {
      language_id: languageId,
      source_code: this.utf8ToBase64(sourceCode),
      stdin: this.utf8ToBase64(stdin),
      expected_output: this.utf8ToBase64(expectedOutput),
      cpu_time_limit: 2,
      wall_time_limit: 5,
      memory_limit: 256000,
      max_processes_and_or_threads: 60,
      enable_per_process_and_thread_time_limit: false,
      enable_per_process_and_thread_memory_limit: false,
      max_file_size: 1024,
    };

    const response = await fetch(
      `${this.baseUrl}/submissions?base64_encoded=true&wait=false&fields=*`,
      {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(submission),
      }
    );

    if (!response.ok) {
      throw new Error(`Judge0 Erorr ${response.status}`);
    }

    const result = await response.json();

    return result.token;
  }

  public async getSubmission(token: string) {
    try {
      const response = await fetch(
        `${this.baseUrl}/submissions/${token}?base64_encoded=true*fields=*`,
        { method: "GET", headers: this.headers }
      );

      const result = await response.json();

      return result;
    } catch (e: any) {
      console.error(e);
    }
  }

  public async submitBatchedCode(submissions: Submission[]) {
    const processed_submissions = submissions.map((submission: Submission) => {
      return {
        language_id: submission.languageId,
        source_code: this.utf8ToBase64(submission.sourceCode),
        stdin: this.utf8ToBase64(submission.stdin),
        expected_output: this.utf8ToBase64(submission.expectedOutput),
        cpu_time_limit: 2,
        wall_time_limit: 5,
        memory_limit: 256000,
        max_processes_and_or_threads: 60,
        enable_per_process_and_thread_time_limit: false,
        enable_per_process_and_thread_memory_limit: false,
        max_file_size: 1024,
      };
    });

    const response = await fetch(
      `${this.baseUrl}/submissions/batch?base64_encoded=true`,
      {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({ submissions: processed_submissions }),
      }
    );

    if (!response.ok) {
      throw new Error(`Judge0 Error ${response.status}`);
    }

    const result = await response.json();

    return result;
  }

  public async getBatchSubmissions(tokens: string[]) {
    const submissionSlugs = tokens.join("%2C");
    try {
      const response = await fetch(
        `${this.baseUrl}/submissions/batch?tokens=${submissionSlugs}&base64_encoded=true&fields=*`,
        { method: "GET", headers: this.headers }
      );

      const result = await response.json();

      return result.submissions.map((submission: any) => {
        if (submission.stdout) 
          submission.stdout = this.base64toUtf8(submission.stdout);
        if (submission.stderr) 
          submission.stderr = this.base64toUtf8(submission.stderr);
        if (submission.compile_output)
          submission.compile_output = this.base64toUtf8(submission.compile_output);

        return submission;
      });

    } catch (e) {
      console.error(e);
    }
  }

  public async waitForResult(token: string, maxAttempts = 10) {
    for(let i = 0; i < maxAttempts; i++) {
      const result = await this.getSubmission(token);

      if (result.status.id <= 2) {
        await new Promise(resolve => setTimeout(resolve, 500));
        continue;
      }

      return result
    }
    throw new Error('Submission timeout')
  }
}
