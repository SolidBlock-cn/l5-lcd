"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServeUrlWithFallback = void 0;
const getServeUrlWithFallback = (serve) => {
    if ('webpackBundle' in serve) {
        return serve.webpackBundle;
    }
    if ('serveUrl' in serve) {
        return serve.serveUrl;
    }
    throw new Error('You must pass the `serveUrl` parameter');
};
exports.getServeUrlWithFallback = getServeUrlWithFallback;
