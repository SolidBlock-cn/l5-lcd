"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapsedCompositionSelector = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const colors_1 = require("../helpers/colors");
const caret_1 = require("../icons/caret");
const z_index_1 = require("../state/z-index");
const CollapsedCompositionSelector = ({ onExpand }) => {
    const [hovered, setHovered] = (0, react_1.useState)(false);
    const { tabIndex } = (0, z_index_1.useZIndex)();
    const onPointerEnter = (0, react_1.useCallback)(() => {
        setHovered(true);
    }, []);
    const onPointerLeave = (0, react_1.useCallback)(() => {
        setHovered(false);
    }, []);
    const style = (0, react_1.useMemo)(() => {
        return {
            border: 'none',
            borderRight: '2px solid black',
            cursor: 'pointer',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 7,
            paddingRight: 4,
            backgroundColor: (0, colors_1.getBackgroundFromHoverState)({
                hovered,
                selected: false,
            }),
            appearance: 'none',
            WebkitAppearance: 'none',
        };
    }, [hovered]);
    return ((0, jsx_runtime_1.jsx)("button", { style: style, onPointerEnter: onPointerEnter, onPointerLeave: onPointerLeave, type: "button", role: "button", tabIndex: tabIndex, onClick: onExpand, children: (0, jsx_runtime_1.jsx)(caret_1.CaretRight, {}) }));
};
exports.CollapsedCompositionSelector = CollapsedCompositionSelector;
