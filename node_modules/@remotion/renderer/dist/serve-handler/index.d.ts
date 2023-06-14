import type { IncomingMessage, ServerResponse } from 'http';
export declare const serveHandler: (request: IncomingMessage, response: ServerResponse, config: {
    public: string;
}) => Promise<void>;
