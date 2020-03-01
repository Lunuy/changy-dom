import EventTarget, { EventTargetChangeEventEmitter } from "./EventTarget";
import OriginalNode from "../Originals/Node";
import { Array as ChangeableArray, O, C, S } from "changy";

export interface NodeChangeEventEmitter extends EventTargetChangeEventEmitter {
    on(event : "insertChild", listener : (index : number, child : OriginalNode) => void) : this
    on(event : "removeChild", listener : (index : number, child : OriginalNode) => void) : this
    on(event: string, listener: Function): this
    on(event: RegExp, listener: Function): this

    emit(event : "insertChild", index : number, child : OriginalNode) : this
    emit(event : "removeChild", index : number, child : OriginalNode) : this
    emit(event : string, ...args : any): this
    emit(event : RegExp, ...args : any): this
}

export default class Node extends EventTarget {
    readonly [C]: NodeChangeEventEmitter
    readonly [O]: OriginalNode
    constructor(node : OriginalNode) {
        super(node);
    }

    // Changer
    appendChild(child : OriginalNode) {
        const beforeLength = this[O].childNodes.length;
        const result = this[O].appendChild(child);
        this[C].emit("insertChild", beforeLength, child);
        return result;
    }
    insertBefore(newNode : OriginalNode, referenceNode : OriginalNode) {
        const index = (<OriginalNode[]>Array.from(this[O].childNodes)).indexOf(referenceNode);
        const result = this[O].insertBefore(newNode, referenceNode);
        this[C].emit("insertChild", index, newNode);
        return result;
    }
    insertIndex(newNode : OriginalNode, index : number) {
        const result = this[O].childNodes.length === index
                        ?
                            this[O].appendChild(newNode)
                        :
                            this[O].insertBefore(newNode, this[O].childNodes[index]);
        this[C].emit("insertChild", index, newNode);
        return result;
    }
    removeChild(child : OriginalNode) {
        const index = (<OriginalNode[]>Array.from(this[O].childNodes)).indexOf(child);
        const result = this[O].removeChild(child);
        this[C].emit("removeChild", index, child);
        return result;
    }
    removeChildIndex(index : number) {
        const result = this[O].removeChild(this[O].childNodes[index]);
        this[C].emit("removeChild", index, result);
        return result;
    }

    // Pure
    get childNodes() {
        const result = new ChangeableArray(<OriginalNode[]>Array.from(this[O].childNodes));
        const listeners = {
            insertChild(index : number, child : OriginalNode) {
                result.splice(index, 0, child);
            },
            removeChild(index : number, child : OriginalNode) {
                result.splice(index, 1);
            }
        };

        this[C].addListeners(listeners);

        result[S] = () => {
            this[C].removeListeners(listeners);  
        };

        return result;
    }
}