"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitAnsi = void 0;
const ansi_regex_1 = require("./ansi-regex");
function splitAnsi(str) {
    const parts = str.match((0, ansi_regex_1.ansiRegex)());
    if (!parts)
        return [str];
    const result = [];
    let offset = 0;
    let ptr = 0;
    for (let i = 0; i < parts.length; i++) {
        offset = str.indexOf(parts[i], offset);
        if (offset === -1)
            throw new Error('Could not split string');
        if (ptr !== offset)
            result.push(str.slice(ptr, offset));
        if (ptr === offset && result.length) {
            result[result.length - 1] += parts[i];
        }
        else {
            if (offset === 0)
                result.push('');
            result.push(parts[i]);
        }
        ptr = offset + parts[i].length;
    }
    result.push(str.slice(ptr));
    return result;
}
exports.splitAnsi = splitAnsi;
