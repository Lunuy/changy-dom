import { Changeable, O, Object, C, String, S } from "changy";
import Node from "./Node";
import Element, { ElementChangeEventEmitter } from "./Element";
import OriginalHTMLElement from "../Originals/HTMLElement";
import OriginalObject from "../Originals/Object";
import SVGElement from "./SVGElement";

type Remove<A, B> = A extends B ? never : A;
type CSSProp = Remove<keyof CSSStyleDeclaration, "length" | "parentRule" | number>;


function setProperty(style : CSSStyleDeclaration, name : CSSProp | string, value : string) {
    if(name.startsWith("--")) {
        style.setProperty(name, value);
    } else {
        style[<CSSProp>name] = value;
    }
}

function removeProperty(style : CSSStyleDeclaration, name : CSSProp | string) {
    if(name.startsWith("--")) {
        style.removeProperty(name);
    } else {
        style[<CSSProp>name] = "";
    }
}

export function createStyle(element : HTMLElement<any> | SVGElement<any>) {
    const result = new Object(
        <{[K in (CSSProp | string)]? : String<any>}>
        OriginalObject.fromEntries(OriginalObject.keys(element[O].style).filter(key => Number.isNaN(Number(key))).map((name : CSSProp) => [name, new String(element[O].style[name])]))
    );

    const propListenerRemovers : {[name : string]: () => void} = {};

    const resultListeners = {
        set(key : CSSProp, value : String<any>, beforeValue : String<any>) {
            if(propListenerRemovers[key]) propListenerRemovers[key]();

            const listener = (value : string) => {
                setProperty(element[O].style, key, value);
            };
            value[C].on("set", listener);
            propListenerRemovers[key] = () => {
                value[C].off("set", listener);
                delete propListenerRemovers[key];
            };

            setProperty(element[O].style, key, value[O]);
        },
        unset(key : CSSProp, value : String<any>) {
            propListenerRemovers[key]();
            removeProperty(element[O].style, key);
        }
    };

    result[C].addListeners(resultListeners);

    element[S] = () => {
        result[S]();
    };

    return result;
}


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

    style = createStyle(this)
}