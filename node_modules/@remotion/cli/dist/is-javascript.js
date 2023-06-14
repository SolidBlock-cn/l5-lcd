"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isJavascript = void 0;
const isJavascript = (fullPath) => {
    const splitFullPath = fullPath.split('.');
    const extension = splitFullPath[splitFullPath.length - 1];
    return extension === 'jsx' || extension === 'js';
};
exports.isJavascript = isJavascript;
