import http from 'http';
export declare const readFile: (url: string, redirectsSoFar?: number) => Promise<http.IncomingMessage>;
