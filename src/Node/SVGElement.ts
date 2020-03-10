
import Element from "./Element";
import { O, String, Object, C, S } from "changy";
import OriginalSVGElement from "../Originals/SVGElement";
import OriginalObject from "../Originals/Object";

type Remove<A, B> = A extends B ? never : A;
type CSSProp = Remove<keyof CSSStyleDeclaration, "length" | "parentRule" | number>;

export default class SVGElement<K extends keyof SVGElementTagNameMap> extends Element {
    readonly [O]: SVGElementTagNameMap[K]
    constructor(svgElement : OriginalSVGElement) {
        super(svgElement);
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