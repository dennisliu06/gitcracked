import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Play } from "lucide-react";

interface TestCasesProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const TestCases: React.FC<TestCasesProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs = [
    { id: "testcase", label: "Testcase", icon: CheckCircle },
    { id: "result", label: "Test Result" },
  ];

  return (
    <div className="bg-white relative">
      {/* Tab Headers */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            className={`rounded-none px-4 py-3 text-sm font-medium border-b-2 ${
              activeTab === tab.id
                ? "border-purple-600 text-purple-600 bg-purple-50"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon && <tab.icon className="w-4 h-4 mr-2" />}
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === "testcase" && (
          <div className="space-y-4">
            {/* Case Tabs */}
            <div className="flex gap-2 mb-4">
              {["Case 1", "Case 2", "Case 3"].map((caseTab, index) => (
                <Button
                  key={caseTab}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "bg-gray-900 text-white" : ""}
                >
                  {caseTab}
                </Button>
              ))}
            </div>

            {/* Test Case Content */}
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  nums =
                </label>
                <div className="bg-gray-50 p-3 rounded border font-mono text-sm">
                  [2,7,11,15]
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  target =
                </label>
                <div className="bg-gray-50 p-3 rounded border font-mono text-sm">
                  9
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "result" && (
          <div className="text-center text-gray-500 py-8">
            <p>Run your code to see test results</p>
          </div>
        )}
      </div>


    </div>
  );
};
