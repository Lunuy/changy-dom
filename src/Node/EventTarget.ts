import { Changeable, O, ChangeEventEmitter, C } from "changy"
import OriginalEventTarget from "../Originals/EventTarget";

export interface EventTargetChangeEventEmitter extends ChangeEventEmitter {
    //on(event : "addEventListener", listener : (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) => void) : this
    on(event: string, listener: Function): this
    on(event: RegExp, listener: Function): this

    //emit(event : "addEventListener", type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) : this
    emit(event : string, ...args : any): this
    emit(event : RegExp, ...args : any): this
}

export default class EventTarget extends Changeable<OriginalEventTarget> {
    readonly [C]: EventTargetChangeEventEmitter
    readonly [O]: OriginalEventTarget;
    constructor(eventTarget : OriginalEventTarget) {
        super(eventTarget);
    }

    /**
     * why don't make eventListeners? Because you can't access to eventListeners list(from EventTarget)
     * https://developer.mozilla.org/ko/docs/Web/API/EventTarget
     */
}