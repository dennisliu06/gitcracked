import { Play } from "lucide-react";
import { Button } from "./ui/button";
import { Judge0Service } from "@/lib/services/judge0";

interface RunBarProps {
  user: string | undefined;
  code: string;
  languageId: number;
}

export default function RunBar({ user, code, languageId }: RunBarProps) {
  user = "TEMPORARY EMAIL";

  // const judge0 = new Judge0Service()

  // const handleRun = async () => {
  //   const token = await judge0.submitCode(languageId, code, "", "[1, 2, 3]")
  //   const result = await judge0.waitForResult(token)
  //   console.log(result)
  // }


  return (
    <div className="p-4 border-t border-gray-200 flex justify-between items-center bg-white">
      {user ? (
        <>
          <div></div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              //onClick={handleRun}
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
