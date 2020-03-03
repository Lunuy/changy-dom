import { O } from "changy";
import OriginalText from "../Originals/Text";
import CharacterData from "./CharacterData";

export default class Text extends CharacterData {
    readonly [O]: OriginalText
    constructor(text : OriginalText) {
        super(text);
    }
}