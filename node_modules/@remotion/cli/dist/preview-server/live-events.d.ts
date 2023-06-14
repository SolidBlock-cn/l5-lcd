/// <reference types="node" />
import type { IncomingMessage, ServerResponse } from 'http';
import type { EventSourceEvent } from '../event-source-events';
export declare type LiveEventsServer = {
    sendEventToClient: (event: EventSourceEvent) => void;
    router: (request: IncomingMessage, response: ServerResponse) => void;
};
export declare const makeLiveEventsRouter: () => LiveEventsServer;
