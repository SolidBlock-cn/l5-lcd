import type { TComposition } from 'remotion';
export declare const SEQUENCE_BORDER_WIDTH = 1;
export declare const getTimelineSequenceLayout: ({ durationInFrames, startFrom, maxMediaDuration, startFromMedia, video, windowWidth, }: {
    durationInFrames: number;
    startFrom: number;
    startFromMedia: number;
    maxMediaDuration: number | null;
    video: TComposition<unknown>;
    windowWidth: number;
}) => {
    marginLeft: number;
    width: number;
};
