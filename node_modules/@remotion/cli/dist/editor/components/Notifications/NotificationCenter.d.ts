import React from 'react';
declare type TNotification = {
    id: string;
    content: React.ReactNode;
    created: number;
    duration: number;
};
declare type TNotificationCenter = {
    addNotification: (notification: TNotification) => void;
};
export declare const notificationCenter: React.RefObject<TNotificationCenter>;
export declare const NotificationCenter: React.FC;
export {};
