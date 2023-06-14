export declare type TimelineViewState = {
    collapsed: {
        [key: string]: boolean;
    };
};
export declare type TimelineActionState = {
    type: 'collapse';
    hash: string;
} | {
    type: 'expand';
    hash: string;
} | {
    type: 'expand-all';
    allHashes: string[];
} | {
    type: 'collapse-all';
    allHashes: string[];
};
export declare const timelineStateReducer: (state: TimelineViewState, action: TimelineActionState) => TimelineViewState;
