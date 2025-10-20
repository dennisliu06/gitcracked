import { Loader, LoaderCircle, LoaderCircleIcon, Play } from "lucide-react";
import { Button } from "./ui/button";
import { Judge0Service } from "@/lib/services/judge0";
import { TestRunner } from "@/lib/services/test-runner";
import { useState } from "react";

interface RunBarProps {
  user: string | undefined;
  code: string;
  languageId: number;
}

export default function RunBar({ user, code, languageId }: RunBarProps) {
  user = "TEMPORARY EMAIL";
  const [loading, setLoading] = useState(false);
  const runner = new TestRunner();

  const handleRun = async () => {
    setLoading(true);
    const res = await runner.runTests(code, "javascript", "twoSum", [
      { input_data: ["[3,4,5,6]", "7"], expected_output: "[0,1]" },
      { input_data: ["[4,5,6]", "10"], expected_output: "[0,2]" },
      { input_data: ["[5,5]", "10"], expected_output: "[0,1]" },
    ]);
    setLoading(false);
    console.log(res);
  };

  return (
    <div className="p-4 border-t border-gray-200 flex justify-between items-center bg-white">
      {user ? (
        <>
          <div></div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={handleRun}
            >
              {loading ? (
                <LoaderCircle className="w-4 h-4 animate-spin" />
              ) : (
                //<Play className="w-4 h-4" />
                <Play className="w-4 h-4" />
              )}
              Run
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
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
