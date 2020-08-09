import createElement from "./Util/createElement";
import DOMString from "./Other/DOMString";
import Element from "./Node/Element";
import EventTarget from "./Node/EventTarget";
import HTMLElement from "./Node/HTMLElement";
import SVGElement from "./Node/SVGElement";
import Node from "./Node/Node";
import createElementJSX from "./Util/createElementJSX";
import document from "./Document/document";
import createTextNode from "./Util/createTextNode";
import state from "./State/state";
import hydrate from "./Hydrate/hydrate";
import history from "./Location/history";
import location from "./Location/location";
import A from "./Node/New/A";
import Fragment from "./Other/Fragment";


export {
    EventTarget,
    Node,
    Element,

    HTMLElement,
    SVGElement,

    DOMString,

    createElement,
    createElementJSX,
    createTextNode,

    document,
    history,
    location,

    state,
    hydrate,

    // New elements
    A,

    // Other elements
    Fragment
}