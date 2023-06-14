"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCompositionStill = void 0;
const isCompositionStill = (comp) => {
    return comp.durationInFrames === 1;
};
exports.isCompositionStill = isCompositionStill;
