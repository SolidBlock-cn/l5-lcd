/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import type { ReadStream } from 'fs';
import type { IncomingMessage, ServerResponse } from 'http';
export declare function setHeaderForResponse(res: ServerResponse, name: string, value: string | number): void;
export declare function send(req: IncomingMessage, res: ServerResponse, bufferOtStream: ReadStream | string | Buffer, byteLength: number): void;
