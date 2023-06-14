"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RichTimelineContext = exports.loadRichTimelineOption = exports.persistRichTimelineOption = void 0;
const react_1 = require("react");
const persistRichTimelineOption = (option) => {
    localStorage.setItem('richTimeline', String(option));
};
exports.persistRichTimelineOption = persistRichTimelineOption;
const loadRichTimelineOption = () => {
    const item = localStorage.getItem('richTimeline');
    return item === 'true';
};
exports.loadRichTimelineOption = loadRichTimelineOption;
exports.RichTimelineContext = (0, react_1.createContext)({
    richTimeline: (0, exports.loadRichTimelineOption)(),
    setRichTimeline: () => undefined,
});
