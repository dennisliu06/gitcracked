interface Example {
  input: string,
  output: string,
  explaination?: string
}

export default function ProblemExample({example} : { example: Example}) {
  return (
      <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
        <div className="mb-2">
          <span className="font-medium">Input: </span> {example.input}
        </div>
        <div>
          <span className="font-medium">Output: </span> {example.output}
        </div>
        {example.explaination ? 
        <div>
          <span className="font-medium">Explanation: </span> {example.explaination}
        </div>
        :
        <></>
        }
      </div>
    
  );
}
