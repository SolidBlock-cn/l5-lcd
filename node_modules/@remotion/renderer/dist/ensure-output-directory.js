"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureOutputDirectory = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const ensureOutputDirectory = (outputLocation) => {
    const dirName = path_1.default.dirname(outputLocation);
    if (!fs_1.default.existsSync(dirName)) {
        fs_1.default.mkdirSync(dirName, {
            recursive: true,
        });
    }
};
exports.ensureOutputDirectory = ensureOutputDirectory;
