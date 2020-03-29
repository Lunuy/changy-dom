import HTMLElement from "../Node/HTMLElement";
import SVGElement from "../Node/SVGElement";
import { Object, String, Function, Array, O, C, S, Changeable, Primitive } from "changy";
import OriginalObject from "../Originals/Object";
import Node from "../Node/Node";
import OriginalFunction from "../Originals/Function";
import OriginalString from "../Originals/String";
import document from "../Document/document";
import state from "../State/state";
import { eventListenerNames, attributeNames, CSSProp, ElementClasses, Element, htmlElementTagNames, Properties, elementClasses } from "./consts";

export type CreateElementFunction<K extends (keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap)> = (properties : Properties, childs : Array<Node>) => Element<K>
// tagName... can't change it.
function createElement<K extends keyof (HTMLElementTagNameMap & SVGElementTagNameMap)>(
    type : K | CreateElementFunction<K>,
    properties : {
        [attributeName in attributeNames[number]]?: String<any> | string
    } & {
        [eventListenerName in eventListenerNames[number]]?: Function<EventListener> | EventListener
    } & ((typeof type) extends OriginalFunction ? {
        [name : string] : any
    } : {}) & {
        style?: Object<{[K in CSSProp]?: String<any> | string}>
    } = <any> {},
    childNodes : Array<Node> = new Array([])) :
        K extends keyof ElementClasses ?
            ElementClasses[K]
            :
            K extends (keyof HTMLElementTagNameMap)?
                HTMLElement<K>
                :
                K extends (keyof SVGElementTagNameMap)?
                    SVGElement<K>
                    :
                    never
{
    const propertiesEntries = OriginalObject.entries(properties);
    const attributes = <{[attributeName in attributeNames[number]]?: String<any>}>OriginalObject.fromEntries(propertiesEntries.filter(([name, value]) => {
        return !eventListenerNames.includes(name) && !(typeof type === "function" && !attributeNames.includes(name)) && name != "style";
    }).map(([name, value] : any) => {
        return [name, value instanceof String ? value : new String(value)];
    }));
    const eventListeners = <{[eventListenerName in eventListenerNames[number]]?: Function<EventListener>}>OriginalObject.fromEntries(propertiesEntries.filter(([name, value]) => {
        return eventListenerNames.includes(name);
    }).map(([name, value] : any) => {
        return [name, value instanceof Function ? value : new Function(value)];
    }));
    const options = OriginalObject.fromEntries(propertiesEntries.filter(([name, value]) => {
        return !eventListenerNames.includes(name) && (typeof type === "function" && !attributeNames.includes(name)) && name != "style";
    }));
    const style = properties.style;


    /* Listener... */

    const eventListenerListenerRemovers : {[eventName : string]: () => void} = {};
    const addEventListenerListener = (name : string, value : Function<EventListener>) => {
        const listener = (value : EventListener, prevValue : EventListener) => {
            result[O].removeEventListener(name.substr(2), prevValue);
            result[O].addEventListener(name.substr(2), value);
        };
        eventListenerListenerRemovers[name] = () => {
            value[C].off("set", listener);
            result[O].removeEventListener(name.substr(2), value[O]);
            delete eventListenerListenerRemovers[name];
        };
        value[C].on("set", listener);

        result[O].addEventListener(name.substr(2), value[O]);
    };

    /* --- SETUP and LISTEN --- */

    const result = <Element<any>> (
                    typeof type === "function"
                    ?
                        type(options, childNodes)
                    :
                        htmlElementTagNames.includes(type)
                        ?
                            (<any>elementClasses)[type]
                            ?
                                new (<any>elementClasses)[type](document.createElement(<any>type))
                            :
                                new HTMLElement(document.createElement(<any>type))
                        :
                            (<any>elementClasses)[type]
                            ?
                                new (<any>elementClasses)[type](document.createElementSVG(<any>type))
                            :
                            new SVGElement(document.createElementSVG(<any>type))
    );

    //attributes
    OriginalObject.entries(attributes).forEach(([name, value]) => {
        result.attributes.set(name, value);
    });

    //listeners
    OriginalObject.entries(eventListeners).forEach(([name, value]) => {
        addEventListenerListener(name, value);
    });

    //childs
    if(!state.getHydratingNode) {
        result.childNodes.push(...(<ChildNode[]>(childNodes[O].map(childNode => childNode[O]))));
    }
    const childNodesListener = (start : number, deleted : Node[], inserted : Node[]) => {
        result.childNodes.splice(start, deleted.length, ...(<ChildNode[]>inserted.map(insertedNode => insertedNode[O])));
    };

    //style
    const styleValueListeners = {
        set(name : CSSProp, value : String<any> | string) {
            result.style.set(name, value instanceof String ? value : new String(value));
        },
        unset(name : CSSProp) {
            result.style.unset(name);
        }
    }
    if(style) {
        OriginalObject.entries(style[O]).forEach(([name, value] : [CSSProp, String<any>]) => {
            result.style.set(name, value instanceof String ? value : new String(value));
        });
        style[C].addListeners(styleValueListeners);
    }

    childNodes[C].on("splice", childNodesListener);

    result[S] = () => {
        OriginalObject.values(eventListenerListenerRemovers).forEach(remove => remove());
        if(style) style[C].removeListeners(styleValueListeners);

        childNodes[C].off("splice", childNodesListener);
    };

    return <any>result;
}

export default createElement;