"use strict";
// https://superuser.com/questions/907933/correct-aspect-ratio-without-re-encoding-video-file
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDisplayVideoSize = void 0;
const calculateDisplayVideoSize = ({ darX, darY, x, y, }) => {
    // We know two equations:
    //   newWidth / newHeight = darX / darY
    // and:
    //   x * y = (newWidth * newHeight)
    // I solved it then on pen and paper and simplified the formula:
    const dimensions = x * y;
    const newWidth = Math.sqrt(dimensions * (darX / darY));
    const newHeight = dimensions / newWidth;
    return {
        height: Math.round(newHeight),
        width: Math.round(newWidth),
    };
};
exports.calculateDisplayVideoSize = calculateDisplayVideoSize;
