import HTMLElement from "../Node/HTMLElement";
import SVGElement from "../Node/SVGElement";
import { Object, String, Function, Array, O, C, S, Changeable, Primitive, IN, OUT } from "changy";
import OriginalObject from "../Originals/Object";
import Node from "../Node/Node";
import OriginalFunction from "../Originals/Function";
import OriginalString from "../Originals/String";
import document from "../Document/document";
import state from "../State/state";
import { eventListenerNames, attributeNames, CSSProp, Element, htmlElementTagNames, Properties, elementClasses, ElementInstances, ElementClasses } from "./consts";

function capitalizeFirstLetter(string : string) {
    return string[0].toUpperCase() + string.slice(1);
}

export type CreateElementFunction<K extends (keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap)> = (properties : Properties, childs : Array<Node>) => Element<K>
export type CreateNodeArrayFunction = (properties : Properties, childs : Array<Node>) => Array<Node>;

function createElement<K extends keyof (HTMLElementTagNameMap & SVGElementTagNameMap)>(
    type : K | CreateElementFunction<K> | CreateNodeArrayFunction,
    properties : {
        [attributeName in attributeNames[number]]?: String<any> | string
    } & {
        [eventListenerName in eventListenerNames[number]]?: Function<EventListener> | EventListener
    } & ((typeof type) extends OriginalFunction ? {
        [name : string] : any
    } : {}) & {
        style?: Object<{[K in CSSProp]?: String<any> | string}>
    } & {
        class?: Array<String<string> | string>
    } = <any> {},
    childNodes : Array<Node> = new Array([])) :
        K extends CreateNodeArrayFunction ?
            Array<Node>
        :
        K extends keyof ElementInstances ?
            ElementInstances[K]
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
        return [
            name,
            name === "class" ?
                value instanceof Array ? Array.FromChangeable(value.Map(new Function((value : (string | String<string>)) => value instanceof String ? value : new String(value)))).Join(new String("")) : value
            :
                value instanceof String ? value : new String(value)
        ];
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
        value[C].on("set", listener, result);

        result[O].addEventListener(name.substr(2), value[O]);
    };

    /* --- SETUP and LISTEN --- */

    const result = <any>(
                    typeof type === "function" ?
                        type(options, childNodes)
                    :
                        htmlElementTagNames.includes(type) ?
                            (<any>elementClasses)[type] ?
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
    if(result instanceof Array) return <any>result;

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
        childNodes[O].forEach(childNode => result[C].connectInput(childNode[C], {}));
    }
    const childNodesListener = (start : number, deleted : Node[], inserted : Node[]) => {
        result.childNodes.splice(start, deleted.length, ...(<ChildNode[]>inserted.map(insertedNode => insertedNode[O])));
        deleted.forEach(deletedOne => result[C].disconnectInput(deletedOne[C])); // 더이상 하위 요소가 아님
        inserted.forEach(insertedOne => result[C].connectInput(insertedOne[C], {})); // 하위 요소 추가
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
        style[C].addListeners(styleValueListeners, result.style);
    }

    childNodes[C].on("splice", childNodesListener, result.childNodes);

    return result;
}

export default createElement;