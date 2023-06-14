"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCollapseToggle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const colors_1 = require("../../helpers/colors");
const container = {
    height: 10,
    width: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
const Icon = (props) => {
    return ((0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 8 10", ...props, style: { height: 10, width: 8 }, children: (0, jsx_runtime_1.jsx)("path", { d: "M 0 0 L 8 5 L 0 10 z", fill: colors_1.LIGHT_COLOR }) }));
};
const TimelineCollapseToggle = ({ collapsed }) => {
    return ((0, jsx_runtime_1.jsx)("div", { style: collapsed ? container : { ...container, transform: 'rotate(90deg)' }, children: (0, jsx_runtime_1.jsx)(Icon, {}) }));
};
exports.TimelineCollapseToggle = TimelineCollapseToggle;
