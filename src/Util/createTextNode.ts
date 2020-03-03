import { String, O, C, S } from "changy"
import Text from "../Node/Text";
import OriginalText from "../Originals/Text";

export default function createTextNode(text : String) {
    const result = new Text(new OriginalText(text[O].value));

    const textListener = (text : string) => {
        result.setData(text);
    };

    text[C].on("set", textListener);

    result[S] = () => {
        text[C].off("set", textListener);
    };

    return result;
}