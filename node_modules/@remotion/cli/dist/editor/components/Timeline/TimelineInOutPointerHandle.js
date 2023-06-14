"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineInOutPointerHandle = exports.outPointerHandle = exports.inPointerHandle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const get_left_of_timeline_slider_1 = require("../../helpers/get-left-of-timeline-slider");
const line = {
    height: '100%',
    width: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    cursor: 'ew-resize',
    paddingLeft: 1,
    paddingRight: 1,
};
exports.inPointerHandle = (0, react_1.createRef)();
exports.outPointerHandle = (0, react_1.createRef)();
const TimelineInOutPointerHandle = ({ dragging, type, atFrame }) => {
    const { get } = (0, get_left_of_timeline_slider_1.useGetXPositionOfItemInTimeline)();
    const style = (0, react_1.useMemo)(() => {
        return {
            ...line,
            backgroundColor: dragging
                ? 'rgba(255, 255, 255, 0.7)'
                : 'rgba(255, 255, 255, 0.1)',
            transform: `translateX(${get(atFrame)}px)`,
        };
    }, [atFrame, dragging, get]);
    return ((0, jsx_runtime_1.jsx)("div", { ref: type === 'in' ? exports.inPointerHandle : exports.outPointerHandle, style: style }));
};
exports.TimelineInOutPointerHandle = TimelineInOutPointerHandle;
