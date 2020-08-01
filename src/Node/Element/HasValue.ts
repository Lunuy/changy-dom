
import HTMLElement from "../HTMLElement";
import OriginalHTMLElement from "../../Originals/HTMLElement";
import { String, O, S, IN } from "changy";

class HasValue<K extends ("input" | "textarea")> extends HTMLElement<K> {
    constructor(element : OriginalHTMLElement) {
        super(element);

        // value change
        this.attributes.set("value", (() => {
            const result = new String((<any>element).value ?? "")[IN]();

            (<any>element).addEventListener("input", () => {
                result.set((<any>element).value);
            });

            return result;
        })());
    }
}

export default HasValue;