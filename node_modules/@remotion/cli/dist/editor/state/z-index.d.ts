import React from 'react';
declare type ZIndex = {
    currentIndex: number;
};
export declare const ZIndexContext: React.Context<ZIndex>;
export declare const HigherZIndex: React.FC<{
    onEscape: () => void;
    onOutsideClick: () => void;
    children: React.ReactNode;
}>;
export declare const useZIndex: () => {
    currentZIndex: number;
    highestZIndex: number;
    isHighestContext: boolean;
    tabIndex: number;
};
export {};
