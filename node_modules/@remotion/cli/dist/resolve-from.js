"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveFrom = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const Module = require("module");
const resolveFrom = (fromDirectory, moduleId) => {
    try {
        fromDirectory = fs_1.default.realpathSync(fromDirectory);
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            fromDirectory = path_1.default.resolve(fromDirectory);
        }
        else {
            throw error;
        }
    }
    const fromFile = path_1.default.join(fromDirectory, 'noop.js');
    const resolveFileName = () => 
    // @ts-expect-error
    Module._resolveFilename(moduleId, {
        id: fromFile,
        filename: fromFile,
        // @ts-expect-error
        paths: Module._nodeModulePaths(fromDirectory),
    });
    return resolveFileName();
};
exports.resolveFrom = resolveFrom;
