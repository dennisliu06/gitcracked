import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Problem } from '@/types/problems';
import ProblemExample from './ProblemExample';



export const ProblemDescription = ({ problem }: {problem: Problem}) => {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold text-gray-900">{problem.title}</h1>
          <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
            {problem.difficulty}
          </Badge>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-gray-600">
          {/*<div className="flex items-center gap-1">
            <ThumbsUp className="w-4 h-4" />
            <span>62K</span>
          </div>
          <div className="flex items-center gap-1">
            <ThumbsDown className="w-4 h-4" />
            <span>1.4K</span>
          </div>
          <span>Companies</span>
          <span>Hint</span>*/}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="prose prose-sm max-w-none">
        <div dangerouslySetInnerHTML={{ __html: problem.description}} />

          <div className="space-y-6">
            {problem.examples?.map((example) => (
              <div key={example.id}>
                <h3 className="font-semibold text-gray-900 mb-3">Example {example.example_number}:</h3>
                <ProblemExample example={example} />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-gray-900 mb-3">Constraints:</h3>
            <ul className="space-y-1 text-gray-700 text-sm font-mono">
              {problem.constraints.map((constraint) => (<li key={constraint}>• {constraint}</li>))}
            </ul>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Follow-up:</strong> {problem.hints}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};