import { Editor } from "@monaco-editor/react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { Mic, Play, Settings, Upload } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import EditorIDE from "./EditorIDE";

const judge0Languges: {[key: string]: number} = {
  "python": 109,
  'javascript': 102,
  'java': 91,
  'cpp': 105,
  'csharp': 51
}

interface EditorPanelProps {
  setLanguageId: (language: number) => void
  setCode: Dispatch<SetStateAction<string>>
  startingCode: string
}

export default function EditorPanel({ setLanguageId, setCode, startingCode } : EditorPanelProps) {
  const [language, setLanguage] = useState('javascript');

  const changeLanguage = (lang: string) => {
    
    setLanguage(lang)
    if (lang in judge0Languges){
      setLanguageId(judge0Languges[lang])
    }
  }

  const changeCode = (code: string | undefined) => {
    if (code) {
      setCode(code)
    }

  }

  return(
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Select defaultValue="javascript" onValueChange={changeLanguage}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="python">Python3</SelectItem>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="cpp">C++</SelectItem>
              <SelectItem value="csharp">C#</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-1" />
            Settings
          </Button>
          <Button variant="outline" size="sm">
            <Mic className="w-4 h-4 mr-1" />
            Record
          </Button>
        </div>
      </div>

      {/* Code Editor Area */}
      <Editor height="90vh" language={language} defaultValue={startingCode} onChange={changeCode}/>

      {/* Bottom Actions */}
      
    </div>
  )
}