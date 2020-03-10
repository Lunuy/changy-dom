import { Changeable, O, Object, C, String, S } from "changy";
import Node from "./Node";
import Element, { ElementChangeEventEmitter } from "./Element";
import OriginalHTMLElement from "../Originals/HTMLElement";
import OriginalObject from "../Originals/Object";

type Remove<A, B> = A extends B ? never : A;
type CSSProp = Remove<keyof CSSStyleDeclaration, "length" | "parentRule" | number>;

export interface HTMLElementChangeEventEmitter extends ElementChangeEventEmitter {
    //on(event : "setStyleProperty", listener : (propertyName : Remove<keyof CSSStyleDeclaration, "length" | "parentRule" | number>, value : string) => void) : this
    on(event: string, listener: Function): this
    on(event: RegExp, listener: Function): this

    //emit(event : "setStyleProperty", propertyName : Remove<keyof CSSStyleDeclaration, "length" | "parentRule" | number>, value : string) : this
    emit(event : string, ...args : any): this
    emit(event : RegExp, ...args : any): this
}

export default class HTMLElement<K extends keyof HTMLElementTagNameMap> extends Element {
    readonly [O]: HTMLElementTagNameMap[K]
    constructor(htmlElement : OriginalHTMLElement) {
        super(htmlElement);
    }

    style = (() => {
        const result = new Object(
            <{[K in CSSProp]? : String}>
            OriginalObject.fromEntries(OriginalObject.keys(this[O].style).filter(key => Number.isNaN(Number(key))).map((name : CSSProp) => [name, new String(this[O].style[name])]))
        );

        const propListenerRemovers : {[name : string]: () => void} = {};

        const self = this;
        const resultListeners = {
            set(key : CSSProp, value : String, beforeValue : String) {
                if(propListenerRemovers[key]) propListenerRemovers[key]();

                const listener = (value : string) => {
                    self[O].style[key] = value;
                };
                value[C].on("set", listener);
                propListenerRemovers[key] = () => {
                    value[C].off("set", listener);
                    delete propListenerRemovers[key];
                };

                self[O].style[key] = value[O].value;
            },
            unset(key : CSSProp, value : String) {
                propListenerRemovers[key]();
                self[O].style[key] = "";
            }
        };

        result[C].addListeners(resultListeners);

        this[S] = () => {
            result[S]();
        };

        return result;
    })();
}