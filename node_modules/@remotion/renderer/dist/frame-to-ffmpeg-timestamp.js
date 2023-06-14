"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frameToFfmpegTimestamp = void 0;
const frameToFfmpegTimestamp = (time) => {
    // We ceil because FFMPEG seeks to the closest frame BEFORE the position
    return (Math.ceil(time * 1000000) / 1000).toFixed(3) + 'ms';
};
exports.frameToFfmpegTimestamp = frameToFfmpegTimestamp;
