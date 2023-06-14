import React from 'react';
export declare type KeyEventType = 'keydown' | 'keyup' | 'keypress';
export declare type KeyListenerCallback = (e: KeyboardEvent) => void;
export declare type RegisteredKeybinding = {
    registeredFromPane: string;
    id: string;
    key: string;
    event: KeyEventType;
    callback: KeyListenerCallback;
};
export declare type KeybindingContextType = {
    registerKeybinding: (binding: RegisteredKeybinding) => void;
    unregisterKeybinding: (binding: RegisteredKeybinding) => void;
    unregisterPane: (paneId: string) => void;
};
export declare const KeybindingContext: React.Context<KeybindingContextType>;
export declare const KeybindingContextProvider: React.FC<{
    children: React.ReactNode;
}>;
