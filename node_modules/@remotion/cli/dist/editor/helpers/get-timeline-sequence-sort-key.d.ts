import type { TSequence } from 'remotion';
export declare type Track = {
    sequence: TSequence;
    depth: number;
};
export declare type TrackWithHash = Track & {
    hash: string;
    canCollapse: boolean;
};
export declare type TrackWithHashAndOriginalTimings = TrackWithHash & {
    hash: string;
    cascadedStart: number;
    cascadedDuration: number;
};
export declare const getTimelineSequenceSequenceSortKey: (track: TrackWithHash, tracks: TrackWithHash[], sameHashes?: {
    [hash: string]: string[];
}) => string;
