import { String, O, C, S } from "changy"
import Text from "../Node/Text";
import OriginalText from "../Originals/Text";
import document from "../Document/document";

export default function createTextNode(text : String<any>) {
    const result = new Text(document.createTextNode(text[O]));

    const textListener = (text : string) => {
        result.data.set(text);
    };

    text[C].on("set", textListener, result);

    return result;
}