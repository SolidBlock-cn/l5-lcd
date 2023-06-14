export declare type EventType = string | symbol;
export declare type Handler<T = any> = (event?: T) => void;
declare type WildcardHandler = (type: EventType, event?: any) => void;
declare type EventHandlerList = Array<Handler>;
declare type WildCardEventHandlerList = Array<WildcardHandler>;
declare type EventHandlerMap = Map<EventType, EventHandlerList | WildCardEventHandlerList>;
export interface Emitter {
    all: EventHandlerMap;
    on<T = any>(type: EventType, handler: Handler<T>): void;
    on(type: '*', handler: WildcardHandler): void;
    off<T = any>(type: EventType, handler: Handler<T>): void;
    off(type: '*', handler: WildcardHandler): void;
    emit<T = any>(type: EventType, event?: T): void;
    emit(type: '*', event?: any): void;
}
/**
 * Mitt: Tiny (~200b) functional event emitter / pubsub.
 * @name mitt
 * @returns {Mitt}
 */
export default function mitt(all?: EventHandlerMap): Emitter;
export {};
