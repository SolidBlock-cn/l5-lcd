/// <reference types="node" />
import type { IncomingMessage, ServerResponse } from 'http';
import type { DevMiddlewareContext } from './types';
export declare function getFilenameFromUrl(context: DevMiddlewareContext, url: string | undefined): string | undefined;
export declare function getValueContentRangeHeader(type: string, size: number, range?: {
    start: number;
    end: number;
}): string;
export declare type MiddleWare = (req: IncomingMessage, res: ServerResponse, next: () => void) => void;
export declare function middleware(context: DevMiddlewareContext): (req: IncomingMessage, res: ServerResponse, next: () => void) => void;
