"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printError = void 0;
const renderer_1 = require("@remotion/renderer");
const chalk_1 = require("./chalk");
const code_frame_1 = require("./code-frame");
const log_1 = require("./log");
const progress_bar_1 = require("./progress-bar");
const printError = async (err) => {
    if (err instanceof renderer_1.RenderInternals.SymbolicateableError) {
        const output = (0, progress_bar_1.createOverwriteableCliOutput)(false);
        output.update(chalk_1.chalk.red('Symbolicating minified error message...\n' + err.message));
        try {
            const symbolicated = await renderer_1.RenderInternals.symbolicateError(err);
            if (symbolicated.frame === null) {
                output.update(chalk_1.chalk.red('An error occurred:\n'));
            }
            else {
                output.update(chalk_1.chalk.red(`An error occurred while rendering frame ${err.frame}:\n`));
            }
            (0, code_frame_1.printCodeFrameAndStack)(symbolicated);
        }
        catch (e) {
            output.update(chalk_1.chalk.red('(Error occurred symbolicating stack trace - printing minified stack trace)\n'));
            log_1.Log.error();
            log_1.Log.error(err.stack || err);
        }
        return;
    }
    log_1.Log.error('An error occurred:');
    log_1.Log.error(err.stack || err);
};
exports.printError = printError;
