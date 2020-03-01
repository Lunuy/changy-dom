import HTMLElement from "../Node/HTMLElement";
import { Object, String, Function, Array, O, C, S } from "changy";
import OriginalObject from "../Originals/Object";
import Node from "../Node/Node";
import OriginalFunction from "../Originals/Function";

/*
의도하는 것: 유동적으로 attribute, 리스너들을 등록합니다.
attribute들을 정하려고 하는 것이 아닌 attribute들을 받아서 attribute를 정하는 것이 목표이므로 attribute는 String(Changeable) 입니다.

*/

// tagName... can't change it.
export default function createElement<K extends keyof HTMLElementTagNameMap>(tagName : K, attributes : Object<{[attributeName : string] : String}> = new Object({}), eventListeners : Object<{[attributeName : string] : Function<EventListener>}> = new Object({}), childNodes : Array<Node> = new Array([])) {
    const attributeListenerRemovers : {[attributeName : string]: OriginalFunction} = {};
    const eventListenerListenerRemovers : {[eventName : string]: OriginalFunction} = {}
    function addAttributeListener(attributeName : string, value : String) {
        const listener = (value : string) => {
            result.setAttribute(attributeName, value);
        };
        value[C].on("set", listener);
        attributeListenerRemovers[attributeName] = () => {
            value[C].off("set", listener);
            delete attributeListenerRemovers[attributeName];
        };
    }
    function addEventListenerListener(eventName : string, f : Function<EventListener>) {
        let beforeF = f[O].value;
        const listener = (f : EventListener) => {
            result.removeEventListener(eventName, beforeF);
            result.addEventListener(eventName, f);
            beforeF = f;
        };
        f[C].on("set", listener);
        eventListenerListenerRemovers[eventName] = () => {
            f[C].off("set", listener);
            delete eventListenerListenerRemovers[eventName];
        };
    }
    const originalResult = document.createElement(tagName);
    OriginalObject.entries(attributes[O]).forEach(([attributeName, value]) => { //attributes
        originalResult.setAttribute(attributeName, value[O].value);
        addAttributeListener(attributeName, value);
    });
    OriginalObject.entries(eventListeners[O]).forEach(([eventName, f]) => { //eventListeners
        originalResult.addEventListener(eventName, f[O].value);
        addEventListenerListener(eventName, f);
    });
    childNodes[O].forEach(childNode => { //childNodes
        originalResult.appendChild(childNode[O]);
    });
    const result =  new HTMLElement(originalResult);

    const attributesListeners = {
        set(attributeName : string, attribute : String, beforeValue : String) {
            if(beforeValue) {
                attributeListenerRemovers[attributeName]();
            }
            result.setAttribute(attributeName, attribute[O].value);
            addAttributeListener(attributeName, attribute);
        },
        unset(attributeName : string, attribute : String) {
            attributeListenerRemovers[attributeName]();
            result.removeAttribute(attributeName);
        }
    };
    const eventListenersListeners = {
        set(eventName : string, f : Function<EventListener>, beforeF : Function<EventListener>) {
            if(beforeF) {
                eventListenerListenerRemovers[eventName]();
                result.removeEventListener(eventName, beforeF[O].value);
            }
            result.addEventListener(eventName, f[O].value);
            addEventListenerListener(eventName, f);
        },
        unset(eventName : string, f : Function<EventListener>) {
            eventListenerListenerRemovers[eventName]();
            result.removeEventListener(eventName, f[O].value);
        }
    };
    const childNodesListener = (start : number, deleted : Node[], inserted : Node[]) => {
        for(let i = 0; i < deleted.length; i++) {
            result.removeChildIndex(start);
        }
        for(let i = 0; i < inserted.length; i++) {
            result.insertIndex(inserted[i][O], start + i);
        }
    };

    attributes[C].addListeners(attributesListeners);
    eventListeners[C].addListeners(eventListenersListeners);
    childNodes[C].on("splice", childNodesListener);

    result[S] = () => {
        attributes[C].removeListeners(attributesListeners);
        eventListeners[C].removeListeners(eventListenersListeners);
        childNodes[C].off("splice", childNodesListener);
        OriginalObject.values(attributeListenerRemovers).forEach(remove => remove());
        OriginalObject.values(eventListenerListenerRemovers).forEach(remove => remove());
    };

    return result;
}