import type { transform, TransformOptions } from 'esbuild';
declare type Implementation = {
    transform: typeof transform;
};
declare type Except<ObjectType, Properties> = {
    [Key in keyof ObjectType as Key extends Properties ? never : Key]: ObjectType[Key];
};
export declare type LoaderOptions = Except<TransformOptions, 'sourcemap' | 'sourcefile'> & {
    implementation: Implementation;
};
export {};
