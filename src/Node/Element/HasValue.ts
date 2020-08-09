
import HTMLElement from "../HTMLElement";
import OriginalHTMLElement from "../../Originals/HTMLElement";
import { String, O, S, IN, C } from "changy";

class HasValue<K extends ("input" | "textarea")> extends HTMLElement<K> {
    value = (() => {
        const result = new String(this[O].value ?? "")[IN]();

        this[O].addEventListener("input", () => {
            result.set(this[O].value);
        });

        result[C].on("set", (value : string) => {
            this[O].value = value;
        });

        return result;
    })();
    constructor(element : OriginalHTMLElement) {
        super(element);
    }
}

export default HasValue;