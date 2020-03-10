import EventTarget, { EventTargetChangeEventEmitter } from "./EventTarget";
import OriginalNode from "../Originals/Node";
import { Array, O, C, S } from "changy";
import OriginalArray from "../Originals/Array";

export interface NodeChangeEventEmitter extends EventTargetChangeEventEmitter {
    //on(event : "insertChild", listener : (index : number, child : OriginalNode) => void) : this
    on(event: string, listener: Function): this
    on(event: RegExp, listener: Function): this

    //emit(event : "insertChild", index : number, child : OriginalNode) : this
    emit(event : string, ...args : any): this
    emit(event : RegExp, ...args : any): this
}

export default class Node extends EventTarget {
    readonly [C]: NodeChangeEventEmitter
    readonly [O]: OriginalNode
    constructor(node : OriginalNode) {
        super(node);
    }

    childNodes = (() => {
        const result = new Array(OriginalArray.from(this[O].childNodes));
        const resultListener = (start : number, deleted : ChildNode[], inserted : ChildNode[]) => {
            deleted.forEach((deletedChildNode) => {
                this[O].removeChild(deletedChildNode);
            });
            inserted.forEach((insertedChildNode, index) => {
                if(start + index == this[O].childNodes.length) {
                    this[O].appendChild(insertedChildNode);
                } else {
                    this[O].insertBefore(insertedChildNode, this[O].childNodes[start + index]);
                }
            });
        };

        result[C].on("splice", resultListener);

        this[S] = () => {
            result[S]();
        };
        
        return result;
    })();
}