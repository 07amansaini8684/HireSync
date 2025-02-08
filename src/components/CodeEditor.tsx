import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { AlertCircleIcon, BookIcon, LightbulbIcon, Code2Icon } from "lucide-react";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import { CODING_QUESTIONS, LANGUAGES } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, BookText, Lightbulb, AlertCircle, ChevronRight, Sparkles, TerminalSquare } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const CodeEditor = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(CODING_QUESTIONS[0]);
    const [language, setLanguage] = useState<"javascript" | "python" | "java">(LANGUAGES[0].id);
    const [code, setCode] = useState(selectedQuestion.starterCode[language]);

    const handleQuestionChange = (questionId: string) => {
        const question = CODING_QUESTIONS.find((q) => q.id === questionId)!;
        setSelectedQuestion(question);
        setCode(question.starterCode[language]);
    };

    const handleLanguageChange = (newLanguage: "javascript" | "python" | "java") => {
        setLanguage(newLanguage);
        setCode(selectedQuestion.starterCode[newLanguage]);
    };

    const configureEditorTheme = (monaco: any) => {
        monaco.editor.defineTheme('pure-black', {
            base: 'vs-dark',
            inherit: true,
            rules: [
                { token: '', foreground: 'CCCCCC', background: '000000' },
                { token: 'keyword', foreground: '569CD6' },
                { token: 'number', foreground: 'B5CEA8' },
                { token: 'string', foreground: 'CE9178' },
            ],
            colors: {
                'editor.background': '#000000',
                'editor.foreground': '#CCCCCC',
                'editor.lineNumbers': '#404040',
                'editor.lineHighlightBackground': '#000000',
                'editor.selectionBackground': '#333333',
                'editorCursor.foreground': '#FFFFFF',
                'editorScrollbar.shadow': '#000000',
                'editorWidget.background': '#000000',
            }
        });
    };

    const [output, setOutput] = useState('');

    const handleRunCode = (code: string) => {
        try {
            const result = eval(code); // Or any other execution method
            setOutput("It's not gonna work");
        } catch (error: any) {
            setOutput('Error: ' + error.message);
        }
    };

    return (
        <ResizablePanelGroup direction="vertical" className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-gray-900/95 to-blue-900/20">
            {/* Problem Section */}
            <ResizablePanel defaultSize={40} className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-transparent" />
                <ScrollArea className="relative h-full">
                    
                </ScrollArea>
            </ResizablePanel>

            <ResizableHandle
                withHandle
                className="bg-gray-700 hover:bg-blue-400 transition-colors group"
            >
                <div className="h-1 w-8 bg-gray-400 rounded-full group-hover:bg-blue-400 transition-colors" />
            </ResizableHandle>

            {/* Editor Section */}
            <ResizablePanel defaultSize={60} className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900" />
                // Then use it in your Editor component
                

                {/* Editor Status Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-900/80 backdrop-blur border-t border-gray-700 flex items-center px-4 justify-between text-sm text-gray-400">
                
                <button onClick={() => handleRunCode(code)}>Run Code</button>
                <div className="output-box flex items-center gap-1">
                    <h3>Output:</h3>
                    <pre>{output}</pre> {/* Display the result */}
                </div>
                    <div className="flex items-center gap-4">
                        <span>{LANGUAGES.find(l => l.id === language)?.name}</span>
                        <span className="w-px h-4 bg-gray-600" />
                        <span>{code.split('\n').length} lines</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span>UTF-8</span>
                        <span className="w-px h-4 bg-gray-600" />
                        <span>LF</span>
                    </div>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
};

const CodeBlock = ({ label, value }: { label: string; value: string }) => (
    <div className="space-y-1">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
            <span>{label}</span>
        </div>
        <pre className="p-4 bg-gray-800 rounded-lg border border-gray-700 text-sm font-mono text-cyan-300">
            {value}
        </pre>
    </div>
);

export default CodeEditor;