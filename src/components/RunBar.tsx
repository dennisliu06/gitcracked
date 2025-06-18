import { Play } from "lucide-react";
import { Button } from "./ui/button";

interface RunBarProps {
  user: string | undefined;
}

export default function RunBar({ user }: RunBarProps) {
  user = "TEMPORARY EMAIL";

  return (
    <div className="p-4 border-t border-gray-200 flex justify-between items-center bg-white">
      {user ? (
        <>
          <div></div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              Run
            </Button>
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Submit
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="text-sm text-gray-600">
            You need to{" "}
            <span className="text-purple-600 font-medium">Login / Sign up</span>{" "}
            to run or submit
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              disabled
              className="flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              Run
            </Button>
            <Button
              disabled
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Submit
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
