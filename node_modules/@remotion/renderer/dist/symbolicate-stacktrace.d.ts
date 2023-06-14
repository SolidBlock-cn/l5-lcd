import type { UnsymbolicatedStackFrame } from './parse-browser-error-stack';
declare type ScriptLine = {
    lineNumber: number;
    content: string;
    highlight: boolean;
};
export declare type SymbolicatedStackFrame = {
    originalFunctionName: string | null;
    originalFileName: string | null;
    originalLineNumber: number | null;
    originalColumnNumber: number | null;
    originalScriptCode: ScriptLine[] | null;
};
export declare const symbolicateStackTrace: (frames: UnsymbolicatedStackFrame[]) => Promise<SymbolicatedStackFrame[]>;
export {};
