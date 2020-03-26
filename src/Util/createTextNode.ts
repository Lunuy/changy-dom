import { String, O, C, S } from "changy"
import Text from "../Node/Text";
import OriginalText from "../Originals/Text";
import document from "../Document/document";

export default function createTextNode(text : String<any>) {
    const result = new Text(document.createTextNode(text[O]));

    const textListener = (text : string) => {
        result.setData(text);
    };

    text[C].on("set", textListener);

    result[S] = () => {
        text[C].off("set", textListener);
    };

    return result;
}