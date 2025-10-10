export interface Problem {
  id: string,
  difficulty: string,
  title: string,
  description: Difficulty,
  constraints: string[],
  hints: string
  examples: ProblemExample[]
}

export interface ProblemExample {
  id: string,
  example_number: number,
  input: string,
  output: string,
  explaination?: string,
}

enum Difficulty {
  easy,
  medium,
  hard
}