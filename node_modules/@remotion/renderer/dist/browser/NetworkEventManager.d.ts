import type { LoadingFailedEvent, LoadingFinishedEvent, RequestPausedEvent, RequestWillBeSentEvent, ResponseReceivedEvent, ResponseReceivedExtraInfoEvent } from './devtools-types';
import type { HTTPRequest } from './HTTPRequest';
declare type QueuedEventGroup = {
    responseReceivedEvent: ResponseReceivedEvent;
    loadingFinishedEvent?: LoadingFinishedEvent;
    loadingFailedEvent?: LoadingFailedEvent;
};
export declare type FetchRequestId = string;
declare type NetworkRequestId = string;
declare type RedirectInfo = {
    event: RequestWillBeSentEvent;
    fetchRequestId?: FetchRequestId;
};
export declare class NetworkEventManager {
    #private;
    forget(networkRequestId: NetworkRequestId): void;
    responseExtraInfo(networkRequestId: NetworkRequestId): ResponseReceivedExtraInfoEvent[];
    private queuedRedirectInfo;
    queueRedirectInfo(fetchRequestId: FetchRequestId, redirectInfo: RedirectInfo): void;
    takeQueuedRedirectInfo(fetchRequestId: FetchRequestId): RedirectInfo | undefined;
    numRequestsInProgress(): number;
    storeRequestWillBeSent(networkRequestId: NetworkRequestId, event: RequestWillBeSentEvent): void;
    getRequestWillBeSent(networkRequestId: NetworkRequestId): RequestWillBeSentEvent | undefined;
    forgetRequestWillBeSent(networkRequestId: NetworkRequestId): void;
    storeRequestPaused(networkRequestId: NetworkRequestId, event: RequestPausedEvent): void;
    getRequest(networkRequestId: NetworkRequestId): HTTPRequest | undefined;
    storeRequest(networkRequestId: NetworkRequestId, request: HTTPRequest): void;
    forgetRequest(networkRequestId: NetworkRequestId): void;
    getQueuedEventGroup(networkRequestId: NetworkRequestId): QueuedEventGroup | undefined;
    queueEventGroup(networkRequestId: NetworkRequestId, event: QueuedEventGroup): void;
    forgetQueuedEventGroup(networkRequestId: NetworkRequestId): void;
}
export {};
