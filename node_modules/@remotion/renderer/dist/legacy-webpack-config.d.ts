export declare type ServeUrlOrWebpackBundle = {
    serveUrl: string;
} | {
    /**
     * @deprecated Renamed to `serveUrl`
     */
    webpackBundle: string;
};
export declare const getServeUrlWithFallback: (serve: ServeUrlOrWebpackBundle) => string;
