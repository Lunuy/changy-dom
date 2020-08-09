import Node, { NodeChangeEventEmitter } from "./Node";
import { O, C, Object, String, S, IN, OUT } from "changy";
import OriginalElement from "../Originals/Element";
import OriginalObject from "../Originals/Object";
import OriginalArray from "../Originals/Array";

export interface ElementChangeEventEmitter extends NodeChangeEventEmitter {
    //on(event : "setAttribute", listener : (name : string, value : string) => void) : this
    on(event: string, listener: Function): this
    on(event: RegExp, listener: Function): this

    //emit(event : "setAttribute", name : string, value : string) : this
    emit(event : string, ...args : any): this
    emit(event : RegExp, ...args : any): this
}

export default class Element extends Node {
    readonly [C]: ElementChangeEventEmitter
    readonly [O]: OriginalElement
    constructor(element : OriginalElement) {
        super(element);
    }

    attributes = (() => {
        const result = new Object(<{[attributeName : string]: String<any>}>OriginalObject.fromEntries(this[O].getAttributeNames().map(attributeName => [attributeName, new String(this[O].getAttribute(attributeName))])))[IN]();

        const attributeListenerRemovers : {[attributeName : string]: () => void} = {};

        const self = this;
        const resultListeners = {
            set(key : string, value : String<any>, beforeValue : String<any>) {
                if(attributeListenerRemovers[key]) attributeListenerRemovers[key]();

                const listener = (value : string) => {
                    self[O].setAttribute(key, value);
                };
                value[C].on("set", listener);
                attributeListenerRemovers[key] = () => {
                    value[C].off("set", listener);
                    delete attributeListenerRemovers[key];
                };

                self[O].setAttribute(key, value[O]);
            },
            unset(key : string, value : String<any>) {
                attributeListenerRemovers[key]();
                self[O].removeAttribute(key);
            }
        };

        result[C].addListeners(resultListeners, this);
        return result;
    })();
}