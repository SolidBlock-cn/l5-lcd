import type { webpack } from '@remotion/bundler';
import type memfs from 'memfs';
export declare type DevMiddlewareContext = {
    state: boolean;
    stats: webpack.Stats | undefined;
    callbacks: ((stats: webpack.Stats) => undefined | Promise<void>)[];
    compiler: webpack.Compiler;
    logger: ReturnType<webpack.Compiler['getInfrastructureLogger']>;
    outputFileSystem: memfs.IFs | undefined;
};
