import { Changeable, O, ChangeEventEmitter, C } from "changy"
import OriginalEventTarget from "../Originals/EventTarget";

export interface EventTargetChangeEventEmitter extends ChangeEventEmitter {
    on(event : "addEventListener", listener : (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) => void) : this
    on(event : "removeEventListener", listener : (type: string, callback: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions) => void) : this
    on(event: string, listener: Function): this
    on(event: RegExp, listener: Function): this

    emit(event : "addEventListener", type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) : this
    emit(event : "removeEventListener", type: string, callback: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions) : this
    emit(event : string, ...args : any): this
    emit(event : RegExp, ...args : any): this
}

export default class EventTarget extends Changeable<OriginalEventTarget> {
    readonly [C]: EventTargetChangeEventEmitter
    readonly [O]: OriginalEventTarget;
    constructor(eventTarget : OriginalEventTarget) {
        super(eventTarget);
    }

    //changer
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) {
        const result = this[O].addEventListener(type, listener, options);
        this[C].emit("addEventListener", type, listener, options);
        return result;
    }
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions) {
        const result = this[O].removeEventListener(type, callback, options);
        this[C].emit("removeEventListener", type, callback, options);
        return result;
    }

    //Function
    dispatchEvent(event : Event) {
        const result = this[O].dispatchEvent(event);
        return result;
    }
}