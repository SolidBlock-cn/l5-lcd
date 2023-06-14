import type { TComposition } from 'remotion';
export declare const validateCompositionName: (compName: string, compositions: TComposition<unknown>[]) => string | null;
export declare const validateCompositionDimension: (dimension: 'Width' | 'Height', value: string) => string | null;
export declare const validateCompositionDuration: (value: string) => string | null;
