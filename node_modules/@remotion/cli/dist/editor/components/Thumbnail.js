"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thumbnail = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const remotion_1 = require("remotion");
const checkerboard_background_1 = require("../helpers/checkerboard-background");
const checkerboard_1 = require("../state/checkerboard");
const Thumbnail = ({ composition, targetHeight, targetWidth, frameToDisplay }) => {
    const { height, width } = composition;
    const heightRatio = targetHeight / height;
    const widthRatio = targetWidth / width;
    const ratio = Math.min(heightRatio, widthRatio);
    const scale = ratio;
    const actualWidth = width * scale;
    const actualHeight = height * scale;
    const correction = 0 - (1 - scale) / 2;
    const xCorrection = correction * width;
    const yCorrection = correction * height;
    const [thumbnailId] = (0, react_1.useState)(() => String((0, remotion_1.random)(null)));
    const { checkerboard } = (0, react_1.useContext)(checkerboard_1.CheckerboardContext);
    const container = (0, react_1.useMemo)(() => {
        return {
            width: targetWidth,
            height: targetHeight,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        };
    }, [targetHeight, targetWidth]);
    const outer = (0, react_1.useMemo)(() => {
        return {
            width: actualWidth,
            height: actualHeight,
            backgroundColor: (0, checkerboard_background_1.checkerboardBackgroundColor)(checkerboard),
            backgroundImage: (0, checkerboard_background_1.checkerboardBackgroundImage)(checkerboard),
            backgroundPosition: (0, checkerboard_background_1.getCheckerboardBackgroundPos)(25),
            backgroundSize: (0, checkerboard_background_1.getCheckerboardBackgroundPos)(25),
        };
    }, [actualHeight, actualWidth, checkerboard]);
    const inner = (0, react_1.useMemo)(() => {
        return {
            width,
            height,
            transform: `scale(${scale}) `,
            overflow: 'hidden',
            marginLeft: xCorrection,
            marginTop: yCorrection,
            display: 'flex',
            color: 'black',
        };
    }, [height, scale, width, xCorrection, yCorrection]);
    const timelineState = (0, react_1.useMemo)(() => {
        return {
            playing: false,
            frame: frameToDisplay,
            rootId: thumbnailId,
            imperativePlaying: {
                current: false,
            },
            playbackRate: 1,
            setPlaybackRate: () => {
                throw new Error('thumbnail');
            },
            audioAndVideoTags: { current: [] },
        };
    }, [frameToDisplay, thumbnailId]);
    const props = (0, react_1.useMemo)(() => {
        var _a;
        return (_a = composition.defaultProps) !== null && _a !== void 0 ? _a : {};
    }, [composition.defaultProps]);
    const ThumbnailComponent = composition.component;
    return ((0, jsx_runtime_1.jsx)("div", { style: container, children: (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: null, children: (0, jsx_runtime_1.jsx)("div", { style: outer, children: (0, jsx_runtime_1.jsx)("div", { style: inner, children: (0, jsx_runtime_1.jsx)(remotion_1.Internals.Timeline.TimelineContext.Provider, { value: timelineState, children: (0, jsx_runtime_1.jsx)(ThumbnailComponent, { ...props }) }) }) }) }) }));
};
exports.Thumbnail = Thumbnail;
