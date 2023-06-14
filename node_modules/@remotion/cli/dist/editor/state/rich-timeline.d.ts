/// <reference types="react" />
declare type State = {
    richTimeline: boolean;
    setRichTimeline: (cb: (prevState: boolean) => boolean) => void;
};
export declare const persistRichTimelineOption: (option: boolean) => void;
export declare const loadRichTimelineOption: () => boolean;
export declare const RichTimelineContext: import("react").Context<State>;
export {};
