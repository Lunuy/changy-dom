import OriginalCharacterData from "../Originals/CharacterData";
import Node, { NodeChangeEventEmitter } from "./Node";
import { O, C, String, S } from "changy";

export interface CharacterDataChangeEventEmitter extends NodeChangeEventEmitter {
    on(event : "setData", listener : (data : string) => void) : this
    on(event: string, listener: Function): this
    on(event: RegExp, listener: Function): this

    emit(event : "setData", data : string) : this
    emit(event : string, ...args : any): this
    emit(event : RegExp, ...args : any): this
}

export default class CharacterData extends Node {
    readonly [C] : CharacterDataChangeEventEmitter
    readonly [O] : OriginalCharacterData
    constructor(characterData : OriginalCharacterData) {
        super(characterData);
    }
    setData(data : string) {
        const beforeData = this[O].data;
        this[O].data = data;
        if(data !== beforeData) {
            this[C].emit("setData", data);
        }
    }
    get data() {
        const result = new String(this[O].data);

        const dataListener = (data : string) => {
            result.set(data);
        };

        this[C].on("setData", dataListener);

        result[S] = () => {
            this[C].off("setData", dataListener);
        };

        return result;
    }
}