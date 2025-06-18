import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

export const ProblemDescription = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-2xl font-semibold text-gray-900">1. Two Sum</h1>
          <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
            Easy
          </Badge>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <ThumbsUp className="w-4 h-4" />
            <span>62K</span>
          </div>
          <div className="flex items-center gap-1">
            <ThumbsDown className="w-4 h-4" />
            <span>1.4K</span>
          </div>
          <span>Companies</span>
          <span>Hint</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="prose prose-sm max-w-none">
          <p className="text-gray-700 mb-4">
            Given an array of integers <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">nums</code> and an integer <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">target</code>, return <em>indices of the two numbers such that they add up to</em> <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">target</code>.
          </p>

          <p className="text-gray-700 mb-4">
            You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.
          </p>

          <p className="text-gray-700 mb-6">
            You can return the answer in any order.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Example 1:</h3>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                <div className="mb-2">
                  <span className="font-medium">Input:</span> nums = [2,7,11,15], target = 9
                </div>
                <div className="mb-2">
                  <span className="font-medium">Output:</span> [0,1]
                </div>
                <div>
                  <span className="font-medium">Explanation:</span> Because nums[0] + nums[1] == 9, we return [0, 1].
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Example 2:</h3>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                <div className="mb-2">
                  <span className="font-medium">Input:</span> nums = [3,2,4], target = 6
                </div>
                <div>
                  <span className="font-medium">Output:</span> [1,2]
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Example 3:</h3>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                <div className="mb-2">
                  <span className="font-medium">Input:</span> nums = [3,3], target = 6
                </div>
                <div>
                  <span className="font-medium">Output:</span> [0,1]
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-gray-900 mb-3">Constraints:</h3>
            <ul className="space-y-1 text-gray-700 text-sm font-mono">
              <li>• 2 ≤ nums.length ≤ 10⁴</li>
              <li>• -10⁹ ≤ nums[i] ≤ 10⁹</li>
              <li>• -10⁹ ≤ target ≤ 10⁹</li>
              <li>• <strong>Only one valid answer exists.</strong></li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Follow-up:</strong> Can you come up with an algorithm that is less than O(n²) time complexity?
            </p>
          </div>

          <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
            <span>Accepted: <strong className="text-gray-900">17,471,606</strong></span>
            <span>Submissions: <strong className="text-gray-900">31.3M</strong></span>
            <span>Acceptance Rate: <strong className="text-green-600">55.7%</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};