import type { webpack } from '@remotion/bundler';
export declare type HotMiddlewareMessage = {
    action: 'building';
    name?: string;
} | {
    action: 'built' | 'sync';
    name: string;
    time: number | undefined;
    errors: unknown[];
    warnings: unknown[];
    hash: string | undefined;
    modules: {
        [key: string]: string;
    };
};
export declare const hotMiddlewareOptions: {
    path: string;
    timeout: number;
    reload: boolean;
    warn: boolean;
    heartbeat: number;
};
export declare type HotMiddlewareOptions = typeof hotMiddlewareOptions;
export declare type WebpackStats = ReturnType<webpack.Stats['toJson']>;
export declare type ModuleMap = {
    [key: string]: string;
};
