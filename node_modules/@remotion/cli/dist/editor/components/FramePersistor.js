"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FramePersistor = exports.getFrameForComposition = exports.persistCurrentFrame = exports.getCurrentCompositionFromUrl = void 0;
const react_1 = require("react");
const remotion_1 = require("remotion");
const getCurrentCompositionFromUrl = () => {
    return window.location.pathname.substr(1);
};
exports.getCurrentCompositionFromUrl = getCurrentCompositionFromUrl;
const makeKey = (composition) => {
    return `remotion.time.${composition}`;
};
const persistCurrentFrame = (frame) => {
    const currentComposition = (0, exports.getCurrentCompositionFromUrl)();
    if (!currentComposition) {
        return;
    }
    localStorage.setItem(makeKey(currentComposition), String(frame));
};
exports.persistCurrentFrame = persistCurrentFrame;
const getFrameForComposition = (composition) => {
    const frame = localStorage.getItem(makeKey(composition));
    return frame ? Number(frame) : 0;
};
exports.getFrameForComposition = getFrameForComposition;
const FramePersistor = () => {
    const [playing] = remotion_1.Internals.Timeline.usePlayingState();
    const frame = remotion_1.Internals.Timeline.useTimelinePosition();
    const { currentComposition } = (0, react_1.useContext)(remotion_1.Internals.CompositionManager);
    const isActive = currentComposition === (0, exports.getCurrentCompositionFromUrl)();
    (0, react_1.useEffect)(() => {
        if (!isActive) {
            return;
        }
        if (!playing) {
            (0, exports.persistCurrentFrame)(frame);
        }
    }, [frame, isActive, playing]);
    return null;
};
exports.FramePersistor = FramePersistor;
