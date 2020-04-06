
import Element from "./Element";
import { O, String, Object, C, S } from "changy";
import OriginalSVGElement from "../Originals/SVGElement";
import OriginalObject from "../Originals/Object";
import { createStyle } from "./HTMLElement";

export default class SVGElement<K extends keyof SVGElementTagNameMap> extends Element {
    readonly [O]: SVGElementTagNameMap[K]
    constructor(svgElement : OriginalSVGElement) {
        super(svgElement);
    }

    style = createStyle(this);
}