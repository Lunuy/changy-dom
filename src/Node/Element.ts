import Node, { NodeChangeEventEmitter } from "./Node";
import { O, C } from "changy";
import OriginalElement from "../Originals/Element";

export interface ElementChangeEventEmitter extends NodeChangeEventEmitter {
    on(event : "setAttribute", listener : (name : string, value : string) => void) : this
    on(event : "unsetAttribute", listener : (name : string, value : string) => void) : this
    on(event: string, listener: Function): this
    on(event: RegExp, listener: Function): this

    emit(event : "setAttribute", name : string, value : string) : this
    emit(event : "unsetAttribute", name : string, value : string) : this
    emit(event : string, ...args : any): this
    emit(event : RegExp, ...args : any): this
}

export default class Element extends Node {
    readonly [C]: ElementChangeEventEmitter
    readonly [O]: OriginalElement
    constructor(element : OriginalElement) {
        super(element);
    }
    setAttribute(name : string, value : string) {
        const afterAttribute = this[O].getAttribute(name);
        const result = this[O].setAttribute(name, value);
        if(afterAttribute !== value) {
            this[C].emit("setAttribute", name, value);
        }
        return result;
    }
    removeAttribute(name : string) {
        const afterAttribute = this[O].getAttribute(name);
        const result = this[O].removeAttribute(name);
        if(afterAttribute !== null) {
            this[C].emit("unsetAttribute", name, afterAttribute);
        }
        return result;
    }
}