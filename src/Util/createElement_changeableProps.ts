// import HTMLElement from "../Node/HTMLElement";
// import SVGElement from "../Node/SVGElement";
// import { Object, String, Function, Array, O, C, S, Changeable, Primitive } from "changy";
// import OriginalObject from "../Originals/Object";
// import Node from "../Node/Node";
// import OriginalFunction from "../Originals/Function";
// import OriginalString from "../Originals/String";
// import document from "../Document/document";
// import state from "../State/state";
// import { eventListenerNames, attributeNames, CSSProp, Element, htmlElementTagNames, Properties, elementClasses, ElementInstances } from "./consts";

// export type CreateElementFunction_changeableProps<K extends (keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap)> = (properties : Object<Properties>, childs : Array<Node>) => Element<K>
// // tagName... can't change it.
// function createElement_changeableProps<K extends keyof (HTMLElementTagNameMap & SVGElementTagNameMap)>(
//     type : K | CreateElementFunction_changeableProps<K>,
//     properties : Object<{
//         [attributeName in attributeNames[number]]?: String<any> | string
//     } & {
//         [eventListenerName in eventListenerNames[number]]?: Function<EventListener> | EventListener
//     } & ((typeof type) extends OriginalFunction ? {
//         [name : string] : any
//     } : {}) & {
//         style?: Object<{[K in CSSProp]: String<any>}>
//     }> = new Object<any>({}),
//     childNodes : Array<Node> = new Array([])) :
//         K extends keyof ElementInstances ?
//             ElementInstances[K]
//             :
//             K extends (keyof HTMLElementTagNameMap)?
//                 HTMLElement<K>
//                 :
//                 K extends (keyof SVGElementTagNameMap)?
//                     SVGElement<K>
//                     :
//                     never
// {
//     const propertiesEntries = Object.Entries(properties);
//     const attributes = <Object<{[attributeName in attributeNames[number]]?: String<any>}>>Object.FromEntries(propertiesEntries.Filter(new Function(([name, value]) => {
//         return !eventListenerNames.includes(name) && !(typeof type === "function" && !attributeNames.includes(name)) && name != "style";
//     })).Map(new Function(([name, value] : any) => {
//         return [name, value instanceof String ? value : new String(value)];
//     })));
//     const eventListeners = <Object<{[eventListenerName in eventListenerNames[number]]?: Function<EventListener>}>>Object.FromEntries(propertiesEntries.Filter(new Function(([name, value]) => {
//         return eventListenerNames.includes(name);
//     })).Map(new Function(([name, value] : any) => {
//         return [name, value instanceof Function ? value : new Function(value)];
//     })));
//     const options = Object.FromEntries(propertiesEntries.Filter(new Function(([name, value]) => {
//         return !eventListenerNames.includes(name) && (typeof type === "function" && !attributeNames.includes(name)) && name != "style";
//     })));
//     const style = <Primitive<Object<{[K in CSSProp]: String<any>}>>> properties.Get(new String("style"));


//     /* Listener... */

//     const eventListenerListenerRemovers : {[eventName : string]: () => void} = {};
//     const addEventListenerListener = (name : string, value : Function<EventListener>) => {
//         const listener = (value : EventListener, prevValue : EventListener) => {
//             result[O].removeEventListener(name.substr(2), prevValue);
//             result[O].addEventListener(name.substr(2), value);
//         };
//         eventListenerListenerRemovers[name] = () => {
//             value[C].off("set", listener);
//             result[O].removeEventListener(name.substr(2), value[O]);
//             delete eventListenerListenerRemovers[name];
//         };
//         value[C].on("set", listener);

//         result[O].addEventListener(name.substr(2), value[O]);
//     };

//     /* --- SETUP and LISTEN --- */

//     const result = <Element<any>> (
//                     typeof type === "function"
//                     ?
//                         type(options, childNodes)
//                     :
//                         htmlElementTagNames.includes(type)
//                         ?
//                             (<any>elementClasses)[type]
//                             ?
//                                 new (<any>elementClasses)[type](document.createElement(<any>type))
//                             :
//                                 new HTMLElement(document.createElement(<any>type))
//                         :
//                             (<any>elementClasses)[type]
//                             ?
//                                 new (<any>elementClasses)[type](document.createElementSVG(<any>type))
//                             :
//                             new SVGElement(document.createElementSVG(<any>type))
//     );

//     //attributes
//     OriginalObject.entries(attributes[O]).forEach(([name, value]) => {
//         result.attributes.set(name, value);
//     });
//     const attributesListeners = {
//         set(name : string, value : String<any>) {
//             result.attributes.set(name, value);
//         },
//         unset(name : string) {
//             result.attributes.unset(name);
//         }
//     };

//     //listeners
//     OriginalObject.entries(eventListeners[O]).forEach(([name, value]) => {
//         addEventListenerListener(name, value);
//     });
//     const eventListenersListeners = {
//         set(name : string, value : Function<EventListener>) {
//             addEventListenerListener(name, value);
//         },
//         unset(name : string) {
//             eventListenerListenerRemovers[name]();
//         }
//     };

//     //childs
//     if(!state.getHydratingNode) {
//         result.childNodes.push(...(<ChildNode[]>(childNodes[O].map(childNode => childNode[O]))));
//     }
//     const childNodesListener = (start : number, deleted : Node[], inserted : Node[]) => {
//         result.childNodes.splice(start, deleted.length, ...(<ChildNode[]>inserted.map(insertedNode => insertedNode[O])));
//     };

//     //style
//     const styleValueListeners = {
//         set(name : CSSProp, value : String<any>) {
//             result.style.set(name, value instanceof String ? value : new String(value));
//         },
//         unset(name : CSSProp) {
//             result.style.unset(name);
//         }
//     }
//     let stylePrevValue = style[O];
//     if(style[O]) {
//         OriginalObject.entries(style[O][O]).forEach(([name, value] : [CSSProp, String<any>]) => {
//             result.style.set(name, value instanceof String ? value : new String(value));
//         });
//         style[O][C].addListeners(styleValueListeners);
//     }
//     const styleListener = (value : Object<{[K in CSSProp]: String<any>}>) => {
//         if(stylePrevValue) {
//             stylePrevValue[C].removeListeners(styleValueListeners);
//         }

//         if(value) {
//             value[C].addListeners(styleValueListeners);
//         } else {
//             if(stylePrevValue) {
//                 OriginalObject.keys(stylePrevValue[O]).forEach((name : CSSProp) => {
//                     result.style.unset(name);
//                 });
//             }
//         }

//         stylePrevValue = value;
//     };




//     attributes[C].addListeners(attributesListeners);
//     eventListeners[C].addListeners(eventListenersListeners);
//     childNodes[C].on("splice", childNodesListener);
//     style[C].on("set", styleListener);

//     result[S] = () => {
//         propertiesEntries[S]();
//         style[S]();

//         OriginalObject.values(eventListenerListenerRemovers).forEach(remove => remove());
//         if(stylePrevValue) stylePrevValue[C].removeListeners(styleValueListeners);

//         attributes[C].removeListeners(attributesListeners);
//         eventListeners[C].removeListeners(eventListenersListeners);
//         childNodes[C].off("splice", childNodesListener);
//     };

//     return <any>result;
// }

// export default createElement_changeableProps;