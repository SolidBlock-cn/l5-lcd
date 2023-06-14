import type { ConsoleMessageLocation, ConsoleMessageType } from './browser/ConsoleMessage';
export declare type BrowserLog = {
    text: string;
    stackTrace: ConsoleMessageLocation[];
    type: ConsoleMessageType;
};
