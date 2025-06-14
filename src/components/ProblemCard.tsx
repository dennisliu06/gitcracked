import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Problem } from "@/app/(app)/problems/Problems";
import { CheckCircle2, Clock, XCircle, Play, Building2 } from "lucide-react";

interface ProblemCardProps {
  problem: Problem;
}

export const ProblemCard = ({ problem }: ProblemCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 border-green-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Hard":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "solved":
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case "attempted":
        return <Clock className="w-5 h-5 text-orange-600" />;
      case "not-started":
        return <XCircle className="w-5 h-5 text-gray-400" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "solved":
        return "Solved";
      case "attempted":
        return "Attempted";
      case "not-started":
        return "Not Started";
      default:
        return "";
    }
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-blue-500 bg-white">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {getStatusIcon(problem.status)}
              <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
                {problem.title}
              </h3>
            </div>
            <Badge
              variant="outline"
              className={`text-xs font-medium ${getDifficultyColor(problem.difficulty)}`}
            >
              {problem.difficulty}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-600 text-sm line-clamp-2">
          {problem.description}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Category:</span>
          <Badge variant="secondary" className="text-xs">
            {problem.category}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-1">
          {problem.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
              {tag}
            </Badge>
          ))}
          {problem.tags.length > 3 && (
            <Badge variant="outline" className="text-xs text-gray-500">
              +{problem.tags.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Building2 className="w-3 h-3" />
            <span>{problem.companies.length} companies</span>
          </div>
        </div>

        {(problem.timeComplexity || problem.spaceComplexity) && (
          <div className="flex gap-4 text-xs text-gray-500">
            {problem.timeComplexity && (
              <div>Time: <code className="bg-gray-100 px-1 rounded">{problem.timeComplexity}</code></div>
            )}
            {problem.spaceComplexity && (
              <div>Space: <code className="bg-gray-100 px-1 rounded">{problem.spaceComplexity}</code></div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <span className="capitalize">{getStatusText(problem.status)}</span>
          </div>
          <Button 
            size="sm" 
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Play className="w-4 h-4 mr-1" />
            Start Interview
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};