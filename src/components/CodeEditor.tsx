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
                    <div className="p-6 space-y-8">
                        {/* Header Section */}
                        <div className="flex flex-col lg:flex-row justify-between gap-6">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                    {selectedQuestion.title}
                                </h1>
                                <div className="flex items-center gap-3 mt-2">
                                    <div className="flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-full">
                                        <TerminalSquare className="h-4 w-4 text-cyan-400" />
                                        <span className="text-sm font-medium text-gray-300">
                                            {LANGUAGES.find(l => l.id === language)?.name}
                                        </span>
                                    </div>
                                    <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-400">
                                        {selectedQuestion.difficulty}
                                    </Badge>
                                </div>
                            </motion.div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                {/* Questions Tabs */}
                                <div className="w-full sm:w-[300px]">
                                    <Select value={selectedQuestion.id} onValueChange={handleQuestionChange}>
                                        <SelectTrigger className="bg-gray-900/50 backdrop-blur-lg border border-gray-700">
                                            <SelectValue placeholder="Select a question" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-gray-900 border-gray-700">
                                            {CODING_QUESTIONS.map((q) => (
                                                <SelectItem
                                                    key={q.id}
                                                    value={q.id}
                                                    className="data-[highlighted]:bg-blue-500/20 data-[highlighted]:text-blue-400"
                                                >
                                                    <div className="flex items-center truncate">
                                                        <Sparkles className="h-4 w-4 mr-2 shrink-0" />
                                                        <span className="truncate">{q.title}</span>
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Language Switcher */}
                                <TooltipProvider>
                                    <div className="flex items-center gap-1 p-1 bg-gray-900/50 rounded-lg border border-gray-700">
                                        {LANGUAGES.map((lang) => (
                                            <Tooltip key={lang.id}>
                                                <TooltipTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => handleLanguageChange(lang.id)}
                                                        className={`h-8 w-8 p-0 rounded-md ${language === lang.id
                                                            ? 'bg-blue-500/20 text-blue-400'
                                                            : 'text-gray-400 hover:bg-gray-800'
                                                            }`}
                                                    >
                                                        <img
                                                            src={lang.icon}
                                                            alt={lang.name}
                                                            className="w-5 h-5 object-contain"
                                                        />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent side="bottom">
                                                    {lang.name}
                                                </TooltipContent>
                                            </Tooltip>
                                        ))}
                                    </div>
                                </TooltipProvider>
                            </div>
                        </div>

                        {/* Problem Content */}
                        <div className="space-y-8 max-w-4xl mx-auto">
                            <Tabs defaultValue="problem" className="space-y-8">
                                <TabsList className="bg-transparent gap-4 p-0 h-auto">
                                    <TabsTrigger
                                        value="problem"
                                        className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400 px-4 py-2 rounded-lg"
                                    >
                                        <BookText className="h-4 w-4 mr-2" />
                                        Description
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="examples"
                                        className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400 px-4 py-2 rounded-lg"
                                    >
                                        <Lightbulb className="h-4 w-4 mr-2" />
                                        Examples
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="constraints"
                                        className="data-[state=active]:bg-rose-500/20 data-[state=active]:text-rose-400 px-4 py-2 rounded-lg"
                                    >
                                        <AlertCircle className="h-4 w-4 mr-2" />
                                        Constraints
                                    </TabsTrigger>
                                </TabsList>

                                <AnimatePresence mode="wait">
                                    <TabsContent value="problem">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="prose prose-invert max-w-none bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
                                        >
                                            {selectedQuestion.description}
                                        </motion.div>
                                    </TabsContent>

                                    <TabsContent value="examples">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="space-y-6"
                                        >
                                            {selectedQuestion.examples.map((example, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
                                                >
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <div className="h-6 w-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center">
                                                            {index + 1}
                                                        </div>
                                                        <h3 className="font-semibold text-gray-200">Example {index + 1}</h3>
                                                    </div>
                                                    <div className="space-y-4">
                                                        <CodeBlock label="Input" value={example.input} />
                                                        <CodeBlock label="Output" value={example.output} />
                                                        {example.explanation && (
                                                            <div className="text-sm text-gray-400">
                                                                <span className="font-medium">Explanation:</span> {example.explanation}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </TabsContent>

                                    <TabsContent value="constraints">
                                        <motion.ul
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="space-y-3 bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
                                        >
                                            {selectedQuestion.constraints?.map((constraint, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-300">
                                                    <ChevronRight className="h-4 w-4 text-rose-400 mt-1 flex-shrink-0" />
                                                    {constraint}
                                                </li>
                                            ))}
                                        </motion.ul>
                                    </TabsContent>
                                </AnimatePresence>
                            </Tabs>
                        </div>
                    </div>
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
                <Editor
                    height="100%"
                    language={language}
                    theme="pure-black" // Use the custom theme name
                    value={code}
                    onChange={(value) => setCode(value || "")}
                    options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        lineNumbers: "on",
                        glyphMargin: false,
                        folding: false,
                        renderLineHighlight: 'none',
                        scrollbar: {
                            vertical: 'hidden',
                            horizontal: 'hidden',
                        },
                        padding: { top: 20 },
                        overviewRulerBorder: false,
                        guides: { indentation: false },
                        cursorBlinking: 'smooth',
                        matchBrackets: 'always',
                        bracketPairColorization: { enabled: true },
                    }}
                    className="!border-t-2 !border-black"
                    beforeMount={configureEditorTheme}
                />

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