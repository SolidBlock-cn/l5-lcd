"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadMarks = exports.persistMarks = void 0;
const localStorageKey = (comp, durationInFrames) => `remotion.editor.marks.${comp}.${durationInFrames}`;
const persistMarks = (comp, durationInFrames, marks) => {
    localStorage.setItem(localStorageKey(comp, durationInFrames), JSON.stringify(marks));
};
exports.persistMarks = persistMarks;
const loadMarks = (comp, durationInFrames) => {
    const item = localStorage.getItem(localStorageKey(comp, durationInFrames));
    if (item === null) {
        return [null, null];
    }
    return JSON.parse(item);
};
exports.loadMarks = loadMarks;
