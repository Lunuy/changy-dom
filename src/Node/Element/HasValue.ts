
import HTMLElement from "../HTMLElement";
import OriginalHTMLElement from "../../Originals/HTMLElement";
import { String, O, S, IN } from "changy";

class HasValue<K extends ("input" | "textarea")> extends HTMLElement<K> {
    value = (() => {
        const result = new String((<any>this[O]).value ?? "")[IN]();

        (<any>this[O]).addEventListener("input", () => {
            result.set((<any>this[O]).value);
        });

        return result;
    })();
    constructor(element : OriginalHTMLElement) {
        super(element);
    }
}

export default HasValue;