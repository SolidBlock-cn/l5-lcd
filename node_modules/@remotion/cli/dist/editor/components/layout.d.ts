import React from 'react';
export declare const SPACING_UNIT = 8;
export declare const Spacing: React.FC<{
    x?: number;
    y?: number;
}>;
export declare const Flex: React.FC<{
    children?: React.ReactNode;
}>;
export declare const Row: React.FC<{
    justify?: 'center';
    align?: 'center';
    style?: React.CSSProperties;
    className?: string;
    children: React.ReactNode;
}>;
export declare const Column: React.FC<{
    justify?: 'center';
    align?: 'center';
    style?: React.CSSProperties;
    className?: string;
    children: React.ReactNode;
}>;
