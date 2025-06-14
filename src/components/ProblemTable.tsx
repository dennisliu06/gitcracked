
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Problem } from "@/app/(app)/problems/Problems";
import { CheckCircle2, Clock, XCircle, Star } from "lucide-react";

interface ProblemTableProps {
  problems: Problem[];
}

export const ProblemTable = ({ problems }: ProblemTableProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-600";
      case "Medium":
        return "text-yellow-600";
      case "Hard":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "solved":
        return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case "attempted":
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case "not-started":
        return <XCircle className="w-4 h-4 text-gray-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="border-b">
            <TableHead className="w-16 text-center">Status</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="w-24 text-center">Difficulty</TableHead>
            <TableHead className="w-16 text-center"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {problems.map((problem, index) => (
            <TableRow 
              key={problem.id} 
              className="hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <TableCell className="text-center">
                {getStatusIcon(problem.status)}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900 hover:text-purple-600 transition-colors">
                    {problem.title}
                  </span>
                  {problem.tags.slice(0, 2).map((tag: string) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="text-xs bg-gray-100 text-gray-600"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <Badge 
                  variant="outline" 
                  className={`text-xs font-medium border-0 ${getDifficultyColor(problem.difficulty)}`}
                >
                  {problem.difficulty}
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-purple-50 hover:text-purple-600"
                >
                  <Star className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};