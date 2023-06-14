"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopPanel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const use_compact_ui_1 = require("../helpers/use-compact-ui");
const sidebar_1 = require("../state/sidebar");
const Canvas_1 = require("./Canvas");
const CollapsedCompositionSelector_1 = require("./CollapsedCompositionSelector");
const CompositionSelector_1 = require("./CompositionSelector");
const InitialCompositionLoader_1 = require("./InitialCompositionLoader");
const MenuToolbar_1 = require("./MenuToolbar");
const PreviewToolbar_1 = require("./PreviewToolbar");
const SplitterContainer_1 = require("./Splitter/SplitterContainer");
const SplitterElement_1 = require("./Splitter/SplitterElement");
const SplitterHandle_1 = require("./Splitter/SplitterHandle");
const container = {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
};
const row = {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
};
const canvasContainer = {
    flex: 1,
    display: 'flex',
};
const leftContainer = {
    flex: 1,
    display: 'flex',
};
const TopPanel = () => {
    const compactUi = (0, use_compact_ui_1.useCompactUI)();
    const { setSidebarCollapsedState, sidebarCollapsedState } = (0, react_1.useContext)(sidebar_1.SidebarContext);
    const actualState = (0, react_1.useMemo)(() => {
        if (sidebarCollapsedState === 'collapsed') {
            return 'collapsed';
        }
        if (sidebarCollapsedState === 'expanded') {
            return 'expanded';
        }
        return compactUi ? 'collapsed' : 'expanded';
    }, [compactUi, sidebarCollapsedState]);
    const onCollapse = (0, react_1.useCallback)(() => {
        setSidebarCollapsedState('collapsed');
    }, [setSidebarCollapsedState]);
    const onExpand = (0, react_1.useCallback)(() => {
        setSidebarCollapsedState('expanded');
    }, [setSidebarCollapsedState]);
    return ((0, jsx_runtime_1.jsxs)("div", { style: container, children: [(0, jsx_runtime_1.jsx)(InitialCompositionLoader_1.InitialCompositionLoader, {}), (0, jsx_runtime_1.jsx)(MenuToolbar_1.MenuToolbar, {}), (0, jsx_runtime_1.jsxs)("div", { style: row, children: [actualState === 'collapsed' ? ((0, jsx_runtime_1.jsx)(CollapsedCompositionSelector_1.CollapsedCompositionSelector, { onExpand: onExpand })) : null, (0, jsx_runtime_1.jsxs)(SplitterContainer_1.SplitterContainer, { minFlex: 0.15, maxFlex: 0.4, defaultFlex: 0.2, id: "sidebar-to-preview", orientation: "vertical", children: [actualState === 'expanded' ? ((0, jsx_runtime_1.jsx)(SplitterElement_1.SplitterElement, { type: "flexer", children: (0, jsx_runtime_1.jsx)("div", { style: leftContainer, className: "css-reset", children: (0, jsx_runtime_1.jsx)(CompositionSelector_1.CompositionSelector, {}) }) })) : null, actualState === 'expanded' ? ((0, jsx_runtime_1.jsx)(SplitterHandle_1.SplitterHandle, { allowToCollapse: true, onCollapse: onCollapse })) : null, (0, jsx_runtime_1.jsx)(SplitterElement_1.SplitterElement, { type: "anti-flexer", children: (0, jsx_runtime_1.jsx)("div", { style: canvasContainer, children: (0, jsx_runtime_1.jsx)(Canvas_1.Canvas, {}) }) })] })] }), (0, jsx_runtime_1.jsx)(PreviewToolbar_1.PreviewToolbar, {})] }));
};
exports.TopPanel = TopPanel;
