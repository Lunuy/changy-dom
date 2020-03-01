import { Changeable, O } from "changy";
import Node from "./Node";
import Element from "./Element";
import OriginalHTMLElement from "../Originals/HTMLElement";

export default class HTMLElement<K extends keyof HTMLElementTagNameMap> extends Element {
    readonly [O]: HTMLElementTagNameMap[K]
    constructor(htmlElement : OriginalHTMLElement) {
        super(htmlElement);
    }
}