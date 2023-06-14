import React from 'react';
export declare type SidebarCollapsedState = 'collapsed' | 'expanded' | 'responsive';
declare type Context = {
    sidebarCollapsedState: SidebarCollapsedState;
    setSidebarCollapsedState: (newState: SidebarCollapsedState) => void;
};
export declare const getSavedCollapsedState: () => SidebarCollapsedState;
export declare const SidebarContext: React.Context<Context>;
export declare const SidebarContextProvider: React.FC<{
    children: React.ReactNode;
}>;
export {};
