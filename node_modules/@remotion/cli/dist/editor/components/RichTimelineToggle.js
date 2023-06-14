"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RichTimelineToggle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const is_current_selected_still_1 = require("../helpers/is-current-selected-still");
const timeline_1 = require("../icons/timeline");
const rich_timeline_1 = require("../state/rich-timeline");
const ControlButton_1 = require("./ControlButton");
const tooltip = 'Enable rich timeline. Go to remotion.dev/docs/timeline for more information.';
const RichTimelineToggle = () => {
    const { richTimeline, setRichTimeline } = (0, react_1.useContext)(rich_timeline_1.RichTimelineContext);
    const isStill = (0, is_current_selected_still_1.useIsStill)();
    const onClick = (0, react_1.useCallback)(() => {
        setRichTimeline((c) => {
            (0, rich_timeline_1.persistRichTimelineOption)(!c);
            return !c;
        });
    }, [setRichTimeline]);
    if (isStill) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(ControlButton_1.ControlButton, { title: tooltip, "aria-label": tooltip, onClick: onClick, children: (0, jsx_runtime_1.jsx)(timeline_1.TimelineIcon, { style: {
                width: 16,
                height: 16,
                color: richTimeline ? 'var(--blue)' : 'white',
            } }) }));
};
exports.RichTimelineToggle = RichTimelineToggle;
