import { String, Object, Function, Array, S } from "changy";
import Node from "../Node/Node";
import createElement, { CreateElementFunction } from "./createElement";
import { attributeNames, eventListenerNames, CSSProp } from "./consts";
import OriginalObject from "../Originals/Object";
import OriginalArray from "../Originals/Array";
import OriginalFunction from "../Originals/Function";
import Text from "../Node/Text";
import OriginalText from "../Originals/Text";
import createTextNode from "./createTextNode";
import HTMLElement from "../Node/HTMLElement";
import document from "../Document/document";
import ChangyDom_Element from "../Node/Element";

// Type
declare global {
    namespace JSX {
        type Element = ChangyDom_Element;
        type IntrinsicElements = {
            [k in (keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap)]: {
                [attributeName in (attributeNames[number])]?: string | String<any>
            } & {
                style?: Object<{[K in CSSProp]?: String<any> | string}> | {[K in CSSProp]?: String<any> | string}
            } & {
                [eventListenerName in (eventListenerNames[number])]?: EventListener
            }
        }
    }
}




export default function createElementJSX<K extends (keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap)>(
    type : CreateElementFunction<K> | K,
    properties_: {
        [attributeName in attributeNames[number]]?: String<any>
    } & {
        [eventListenerName in eventListenerNames[number]]?: Function<EventListener>
    } & ((typeof type) extends OriginalFunction ? {
        [name : string] : any
    } : {}) & {
        style?: Object<{[K in CSSProp]?: String<any> | string}> | {[K in CSSProp]?: String<any> | string}
    },
    ...childs : (string | String<any> | Node | Array<Node> | Node[])[])
{
    const changeableChilds : Array<Node> = new Array([]).Concat(new Array(childs.map(child => {
        if(typeof child === "string") {
            return new Array([new Text(document.createTextNode(child))]);
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
    const properties : any = OriginalObject.fromEntries(
        OriginalObject.entries(properties_ ? properties_ : <any>{}).map(([propertyName, value]) => {
            return [
                propertyName,

                propertyName === "style"
                ?
                    value instanceof Object
                    ?
                        value
                    :
                        new Object(value)
                :
                    value
            ]
        })
    );
    return createElement(type, properties, changeableChilds);
}