import { ProblemTable } from "@/components/ProblemTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SortAsc } from "lucide-react";
import { useState } from "react";

export interface Problem {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  status: "solved" | "attempted" | "not-started";
  tags: string[];
  description: string;
  companies: string[];
  timeComplexity?: string;
  spaceComplexity?: string;
}

const mockProblems: Problem[] = [
  {
    id: 2616,
    title: "Minimize the Maximum Difference of Pairs",
    difficulty: "Medium",
    category: "Array",
    status: "not-started",
    tags: ["Array", "Binary Search", "Greedy"],
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    companies: ["Google", "Amazon", "Microsoft"]
  },
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array",
    status: "solved",
    tags: ["Array", "Hash Table"],
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    companies: ["Google", "Amazon", "Microsoft"],
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)"
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    category: "Linked List",
    status: "not-started",
    tags: ["Linked List", "Math"],
    description: "Add two numbers represented as linked lists and return the sum as a linked list.",
    companies: ["Facebook", "Apple", "Netflix"],
    timeComplexity: "O(max(m,n))",
    spaceComplexity: "O(max(m,n))"
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String",
    status: "not-started",
    tags: ["String", "Sliding Window", "Hash Table"],
    description: "Find the length of the longest substring without repeating characters.",
    companies: ["Google", "Amazon", "Adobe"],
    timeComplexity: "O(n)",
    spaceComplexity: "O(min(m,n))"
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Binary Search",
    status: "not-started",
    tags: ["Array", "Binary Search", "Divide and Conquer"],
    description: "Find the median of two sorted arrays with optimal time complexity.",
    companies: ["Google", "Microsoft", "ByteDance"],
    timeComplexity: "O(log(min(m,n)))",
    spaceComplexity: "O(1)"
  },
  {
    id: 5,
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    category: "String",
    status: "not-started",
    tags: ["String", "Dynamic Programming"],
    description: "Find the longest palindromic substring in a string.",
    companies: ["Amazon", "Microsoft", "Facebook"]
  },
  {
    id: 6,
    title: "Zigzag Conversion",
    difficulty: "Medium",
    category: "String",
    status: "not-started",
    tags: ["String"],
    description: "Convert a string to zigzag pattern on a given number of rows.",
    companies: ["PayPal", "Google"]
  },
  {
    id: 7,
    title: "Reverse Integer",
    difficulty: "Medium",
    category: "Math",
    status: "not-started",
    tags: ["Math"],
    description: "Reverse digits of an integer.",
    companies: ["Apple", "Google"]
  },
  {
    id: 8,
    title: "String to Integer (atoi)",
    difficulty: "Medium",
    category: "String",
    status: "not-started",
    tags: ["String"],
    description: "Implement the myAtoi(string s) function.",
    companies: ["Microsoft", "Amazon"]
  },
  {
    id: 9,
    title: "Palindrome Number",
    difficulty: "Easy",
    category: "Math",
    status: "solved",
    tags: ["Math"],
    description: "Determine whether an integer is a palindrome.",
    companies: ["Amazon", "Apple"]
  },
  {
    id: 10,
    title: "Regular Expression Matching",
    difficulty: "Hard",
    category: "Dynamic Programming",
    status: "not-started",
    tags: ["String", "Dynamic Programming", "Recursion"],
    description: "Implement regular expression matching with support for '.' and '*'.",
    companies: ["Google", "Facebook", "Twitter"]
  },
  {
    id: 11,
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array",
    status: "not-started",
    tags: ["Array", "Two Pointers", "Greedy"],
    description: "Find two lines that together with the x-axis form a container that holds the most water.",
    companies: ["Amazon", "Apple", "Adobe"]
  },
  {
    id: 12,
    title: "Integer to Roman",
    difficulty: "Medium",
    category: "Hash Table",
    status: "not-started",
    tags: ["Hash Table", "Math", "String"],
    description: "Convert an integer to a roman numeral.",
    companies: ["Yahoo", "Microsoft"]
  },
  {
    id: 13,
    title: "Roman to Integer",
    difficulty: "Easy",
    category: "Hash Table",
    status: "solved",
    tags: ["Hash Table", "Math", "String"],
    description: "Convert a roman numeral to an integer.",
    companies: ["Amazon", "Microsoft", "Facebook"]
  }
];

export default function Problems() {
  const [problems, setProblems] = useState<Problem[]>(mockProblems);
  const [filteredProblems, setFilteredProblems] = useState<Problem[]>(mockProblems);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = (filters: {
    difficulty: string[];
    category: string[];
    status: string[];
    search: string;
  }) => {
    let filtered = problems;

    if (filters.difficulty.length > 0) {
      filtered = filtered.filter(p => filters.difficulty.includes(p.difficulty));
    }

    if (filters.category.length > 0) {
      filtered = filtered.filter(p => filters.category.includes(p.category));
    }

    if (filters.status.length > 0) {
      filtered = filtered.filter(p => filters.status.includes(p.status));
    }

    if (filters.search) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        p.tags.some(tag => tag.toLowerCase().includes(filters.search.toLowerCase()))
      );
    }

    setFilteredProblems(filtered);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    handleFilter({
      difficulty: [],
      category: [],
      status: [],
      search: value
    });
  };

  const stats = {
    solved: problems.filter(p => p.status === "solved").length,
    attempted: problems.filter(p => p.status === "attempted").length,
    total: problems.length
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Search and Sort Controls */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search questions"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <SortAsc className="w-4 h-4" />
          Sort
        </Button>
        <Button variant="outline">Filter</Button>
      </div>

      {/* Problems Table */}
      <ProblemTable problems={filteredProblems} />

      {filteredProblems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            No problems found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search terms or filters.
          </p>
        </div>
      )}
    </div>
  );
}
