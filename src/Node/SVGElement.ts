
import Element from "./Element";
import { O } from "changy";
import OriginalSVGElement from "../Originals/SVGElement";

export default class SVGElement<K extends keyof SVGElementTagNameMap> extends Element {
    readonly [O]: SVGElementTagNameMap[K]
    constructor(svgElement : OriginalSVGElement) {
        super(svgElement);
    }
}