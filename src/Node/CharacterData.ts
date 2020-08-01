import OriginalCharacterData from "../Originals/CharacterData";
import Node, { NodeChangeEventEmitter } from "./Node";
import { O, C, String, S, Changeable, IN } from "changy";

export interface CharacterDataChangeEventEmitter extends NodeChangeEventEmitter {
    on(event : "setData", listener : (data : string) => void, output? : Changeable<any>) : this
    on(event: string, listener: Function): this
    on(event: RegExp, listener: Function): this

    emit(event : "setData", data : string) : this
    emit(event : string, ...args : any): this
    emit(event : RegExp, ...args : any): this
}

export default class CharacterData extends Node {
    readonly [C] : CharacterDataChangeEventEmitter
    readonly [O] : OriginalCharacterData
    data = (() => {
        const result = new String(this[O].data)[IN]();
        result[C].on("set", (data : string) => this[O].data = data)
        return result;
    })();
}