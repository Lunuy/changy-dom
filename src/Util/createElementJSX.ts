import { String, Object, Function, Array, S, O, Primitive } from "changy";
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
import SVGElement from "../Node/SVGElement";

// Type
declare global {
    namespace JSX {
        type Element = HTMLElement<any> | SVGElement<any>;
        interface ElementChildrenAttribute {
            
        }
        type IntrinsicElements = {
            [k in (keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap)]: {
                [attributeName in (attributeNames[number])]?: string | String<any>
            } & {
                style?: Object<{[K in CSSProp]?: String<any> | string} & {[varName : string]: String<any> | string}>
                |
                ({[K in CSSProp]?: String<any> | string} & {[varName : string]: String<any> | string})
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
    ...childs : (string | String<any> | Node | Array<Node | string | String<any>> | (Node | string | String<any>)[] | Primitive<Node>)[])
{

    function mapChild(child : String<any> | Node | string) {
        return (
            (child instanceof Node)
            ?
                child
            :
                (child instanceof String)
                ?
                    createTextNode(child)
                :
                    new Text(document.createTextNode(child))
        );
    }
    const changeableChilds : Array<Node> = new Array([]).Concat(new Array(childs.map(child => {
        if(child instanceof Array) {
            return child.Map(new Function(mapChild));
        } else if(child instanceof OriginalArray) {
            return new Array(
                child.map(mapChild)
            );
        } else if(!(child instanceof String) && child instanceof Primitive) {
            return Array.FromChangeable(new Array([child]));
        } else {
            return new Array([mapChild(child)]);
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
    const result = createElement(type, properties, changeableChilds);

    return result;
}