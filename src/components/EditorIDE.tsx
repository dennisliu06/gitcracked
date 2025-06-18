import { Editor } from "@monaco-editor/react";
import { useEffect } from "react";

export default function EditorIDE({language} : {language: string}) {

 return(
  <Editor height="90vh" language={language} defaultValue="// some comment" />
 )
}