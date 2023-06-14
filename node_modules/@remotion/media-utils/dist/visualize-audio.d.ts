import type { AudioData } from './types';
declare type FnParameters = {
    audioData: AudioData;
    frame: number;
    fps: number;
    numberOfSamples: number;
};
export declare const visualizeAudio: ({ smoothing, ...parameters }: FnParameters & {
    smoothing?: boolean | undefined;
}) => number[];
export {};
