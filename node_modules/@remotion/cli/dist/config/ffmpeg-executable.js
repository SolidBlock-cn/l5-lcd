"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomFfprobeExecutable = exports.setFfprobeExecutable = exports.getCustomFfmpegExecutable = exports.setFfmpegExecutable = void 0;
let currentFfmpegExecutablePath = null;
let currentFfprobeExecutablePath = null;
const setFfmpegExecutable = (ffmpegPath) => {
    currentFfmpegExecutablePath = ffmpegPath;
};
exports.setFfmpegExecutable = setFfmpegExecutable;
const getCustomFfmpegExecutable = () => {
    return currentFfmpegExecutablePath;
};
exports.getCustomFfmpegExecutable = getCustomFfmpegExecutable;
const setFfprobeExecutable = (ffprobePath) => {
    currentFfprobeExecutablePath = ffprobePath;
};
exports.setFfprobeExecutable = setFfprobeExecutable;
const getCustomFfprobeExecutable = () => {
    return currentFfprobeExecutablePath;
};
exports.getCustomFfprobeExecutable = getCustomFfprobeExecutable;
