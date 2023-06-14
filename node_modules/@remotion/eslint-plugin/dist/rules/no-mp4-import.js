"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const createRule = utils_1.ESLintUtils.RuleCreator(() => {
    return `https://github.com/remotion-dev/remotion`;
});
const NoMP4Import = "Importing MP4 will work while you are previewing the video, but will not work while rendering since Puppeteer does not include the codecs necessary for MP4 videos. Convert the video to WebM first.";
const rule = createRule({
    name: "no-mp4-import",
    meta: {
        type: "problem",
        docs: {
            description: NoMP4Import,
            recommended: "warn",
        },
        fixable: undefined,
        schema: [],
        messages: {
            NoMP4Import,
        },
    },
    defaultOptions: [],
    create: (context) => {
        return {
            ImportDeclaration: (node) => {
                if (node.source.raw.includes(".mp4")) {
                    context.report({
                        messageId: "NoMP4Import",
                        node,
                    });
                }
            },
            CallExpression: (node) => {
                var _a, _b, _c, _d;
                // @ts-expect-error
                if (node.callee.name !== "require") {
                    return;
                }
                // @ts-expect-error
                const firstArgument = (_d = (_c = (_b = (_a = node.callee) === null || _a === void 0 ? void 0 : _a.parent) === null || _b === void 0 ? void 0 : _b.arguments) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.raw;
                if (!firstArgument) {
                    const sourceCode = context.getSourceCode().getText(node);
                    if (sourceCode.includes(".mp4")) {
                        context.report({
                            messageId: "NoMP4Import",
                            node,
                        });
                    }
                    return;
                }
                if (firstArgument.includes(".mp4")) {
                    context.report({
                        messageId: "NoMP4Import",
                        node,
                    });
                }
            },
        };
    },
});
exports.default = rule;
