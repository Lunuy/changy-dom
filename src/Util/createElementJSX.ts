import { String, Object, Function, Array, S } from "changy";
import Node from "../Node/Node";
import createElement, { CreateElementFunction, attributeNames, eventListenerNames } from "./createElement";
import OriginalObject from "../Originals/Object";
import OriginalArray from "../Originals/Array";
import OriginalFunction from "../Originals/Function";
import Text from "../Node/Text";
import OriginalText from "../Originals/Text";
import createTextNode from "./createTextNode";
import HTMLElement from "../Node/HTMLElement";

export default function createElementJSX<K extends (keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap)>(
    type : CreateElementFunction<K> | K,
    properties: {
        [attributeName in attributeNames[number]]?: String
    } & {
        [eventListenerName in eventListenerNames[number]]?: Function<EventListener>
    } & ((typeof type) extends OriginalFunction ? {
        [name : string] : any
    } : {}),
    ...childs : (string | String | Node | Array<Node> | Node[])[])
{
    const changeableChilds : Array<Node> = new Array([]).concat(new Array(childs.map(child => {
        if(typeof child === "string") {
            return new Array([new Text(new OriginalText(child))]);
        } else if(child instanceof String) {
            return new Array([createTextNode(child)]);
        } else if(child instanceof Array) {
            return child;
        } else if(child instanceof OriginalArray) {
            return new Array(child);
        } else {
            return new Array([child]);
        }
    })));
    return createElement(type, new Object(properties ? properties : <any>{}), changeableChilds);
}