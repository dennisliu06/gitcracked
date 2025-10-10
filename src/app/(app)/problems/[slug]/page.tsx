"use client";

import React, { useEffect, useState } from "react";
import { ProblemDescription } from "@/components/ProblemDescription";
import { TestCases } from "@/components/TestCases";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { Editor } from "@monaco-editor/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import EditorPanel from "@/components/EditorPanel";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import RunBar from "@/components/RunBar";
import { useAuth } from "@/lib/auth/authContext";
import { useParams } from "next/navigation";
import { Problem } from "@/types/problems";

const Index = () => {
  const { slug } = useParams()
  const [code, setCode] = useState(`class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
      `);
  const [languageId, setLanguageId] = useState(102);
  const [activeTab, setActiveTab] = useState("testcase");
  const [problem, setProblem] = useState<Problem | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth()

  useEffect(() => {
    async function fetchProblem() {
      try {
        const res = await fetch(`/api/problems/${slug}`)
        if (!res.ok) throw new Error("Failed to get the problem")
        const data: Problem = await res.json();
        setProblem(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false)
      }

    }

    fetchProblem()
  }, [slug])
  
  if (loading) {
    return(<>
      <div>LOADING</div></>)
  }

  if (error ) {
    return (<>
      <div>
        {error}
      </div>
    </>)
  }

  if (!problem) {
    return(<>
    <div>NO PROBLEM FOUND</div></>)
  }
  

  return (
    <div className="h-[calc(100vh-4rem)] bg-gray-50 overflow-hidden">
      <ResizablePanelGroup direction="horizontal" className="h-full">
        {/* Left Panel - Problem Description */}
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className="h-full bg-white border-r border-gray-200">
            <ScrollArea className="h-full">
              <ProblemDescription />
            </ScrollArea>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Right Panel - Code Editor */}
        <ResizablePanel defaultSize={50} minSize={30}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={70} minSize={40}>
              <EditorPanel setLanguageId={setLanguageId} setCode={setCode} startingCode={code}/>
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={30} minSize={20}>
              <div className="h-full border-t border-gray-200">
                <ScrollArea className="h-full">
                  <TestCases
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                </ScrollArea>
                <div className="sticky bottom-0 z-10">
                  <RunBar code={code} languageId={languageId} user={user?.email}/>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
      
    </div>
  );
};

export default Index;
