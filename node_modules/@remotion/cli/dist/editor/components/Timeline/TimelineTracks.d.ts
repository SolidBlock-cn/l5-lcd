import React from 'react';
import type { TrackWithHash } from '../../helpers/get-timeline-sequence-sort-key';
import type { TimelineViewState } from './timeline-state-reducer';
export declare const TimelineTracks: React.FC<{
    timeline: TrackWithHash[];
    fps: number;
    viewState: TimelineViewState;
    hasBeenCut: boolean;
}>;
