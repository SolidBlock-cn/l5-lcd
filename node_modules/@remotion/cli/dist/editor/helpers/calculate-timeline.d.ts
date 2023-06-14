import type { TSequence } from 'remotion';
import type { TrackWithHash } from './get-timeline-sequence-sort-key';
export declare type SequenceWithOverlap = {
    sequence: TSequence;
    overlaps: TSequence[];
};
export declare const calculateTimeline: ({ sequences, sequenceDuration, }: {
    sequences: TSequence[];
    sequenceDuration: number;
}) => TrackWithHash[];
