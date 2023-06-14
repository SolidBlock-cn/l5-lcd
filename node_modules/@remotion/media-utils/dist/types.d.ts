export declare type AudioData = {
    channelWaveforms: Float32Array[];
    sampleRate: number;
    durationInSeconds: number;
    numberOfChannels: number;
    resultId: string;
    isRemote: boolean;
};
export declare type VideoMetadata = {
    durationInSeconds: number;
    width: number;
    height: number;
    aspectRatio: number;
    isRemote: boolean;
};
