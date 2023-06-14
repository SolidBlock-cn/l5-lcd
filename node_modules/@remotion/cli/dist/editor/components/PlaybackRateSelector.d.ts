import React from 'react';
export declare const commonPlaybackRates: number[];
export declare const getPlaybackRateLabel: (playbackRate: number) => string;
export declare const PlaybackRateSelector: React.FC<{
    playbackRate: number;
    setPlaybackRate: React.Dispatch<React.SetStateAction<number>>;
}>;
