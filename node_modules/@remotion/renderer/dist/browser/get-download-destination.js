"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDownloadsCacheDir = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getDownloadsCacheDir = () => {
    const cwd = process.cwd();
    let dir = cwd;
    for (;;) {
        try {
            if (fs_1.default.statSync(path_1.default.join(dir, 'package.json')).isFile()) {
                break;
            }
            // eslint-disable-next-line no-empty
        }
        catch (e) { }
        const parent = path_1.default.dirname(dir);
        if (dir === parent) {
            dir = undefined;
            break;
        }
        dir = parent;
    }
    if (!dir) {
        return path_1.default.resolve(cwd, '.remotion');
    }
    if (process.versions.pnp === '1') {
        return path_1.default.resolve(dir, '.pnp/.remotion');
    }
    if (process.versions.pnp === '3') {
        return path_1.default.resolve(dir, '.yarn/.remotion');
    }
    return path_1.default.resolve(dir, 'node_modules/.remotion');
};
exports.getDownloadsCacheDir = getDownloadsCacheDir;
