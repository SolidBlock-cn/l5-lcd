import type { DownloadProgress } from './progress-bar';
export declare const getFileSizeDownloadBar: (downloaded: number) => string;
export declare const makeMultiDownloadProgress: (progresses: DownloadProgress[]) => string | null;
