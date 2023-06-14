export declare type UnsymbolicatedStackFrame = {
    functionName: string | null;
    fileName: string;
    lineNumber: number;
    columnNumber: number;
};
export declare const parseStack: (stack: string[]) => UnsymbolicatedStackFrame[];
