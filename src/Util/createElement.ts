import HTMLElement from "../Node/HTMLElement";
import SVGElement from "../Node/SVGElement";
import { Object, String, Function, Array, O, C, S, Changeable, Primitive } from "changy";
import OriginalObject from "../Originals/Object";
import Node from "../Node/Node";
import OriginalFunction from "../Originals/Function";
import OriginalString from "../Originals/String";
import document from "../Document/document";
import state from "../State/state";

type Remove<A, B> = A extends B ? never : A;
type CSSProp = Remove<keyof CSSStyleDeclaration, "length" | "parentRule" | number>;

export interface ElementClasses {

}
const elementClasses : ElementClasses = {

};

export type attributeNames = ["accept", "accept-charset", "accesskey", "action", "align", "allow", "alt", "async", "autocapitalize", "autocomplete", "autofocus", "autoplay", "background", "bgcolor", "border", "buffered", "capture", "challenge", "charset", "checked", "cite", "class", "code", "codebase", "color", "cols", "colspan", "content", "contenteditable", "contextmenu", "controls", "coords", "crossorigin", "csp", "data", "datetime", "decoding", "default", "defer", "dir", "dirname", "disabled", "download", "draggable", "dropzone", "enctype", "enterkeyhint", "for", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "headers", "height", "hidden", "high", "href", "hreflang", "http-equiv", "icon", "id", "importance", "integrity", "intrinsicsize", "inputmode", "ismap", "itemprop", "keytype", "kind", "label", "lang", "language", "list", "loading", "list", "loop", "low", "manifest", "max", "maxlength", "minlength", "media", "method", "min", "multiple", "muted", "name", "novalidate", "open", "optimum", "pattern", "ping", "placeholder", "poster", "preload", "radiogroup", "readonly", "rel", "required", "reversed", "rows", "rowspan", "sandbox", "scope", "scoped", "selected", "shape", "size", "sizes", "slot", "span", "spellcheck", "src", "srcdoc", "srclang", "srcset", "start", "step", "summary", "tabindex", "target", "title", "translate", "type", "usemap", "value", "width", "wrap"];
export const attributeNames = ["accept", "accept-charset", "accesskey", "action", "align", "allow", "alt", "async", "autocapitalize", "autocomplete", "autofocus", "autoplay", "background", "bgcolor", "border", "buffered", "capture", "challenge", "charset", "checked", "cite", "class", "code", "codebase", "color", "cols", "colspan", "content", "contenteditable", "contextmenu", "controls", "coords", "crossorigin", "csp", "data", "datetime", "decoding", "default", "defer", "dir", "dirname", "disabled", "download", "draggable", "dropzone", "enctype", "enterkeyhint", "for", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "headers", "height", "hidden", "high", "href", "hreflang", "http-equiv", "icon", "id", "importance", "integrity", "intrinsicsize", "inputmode", "ismap", "itemprop", "keytype", "kind", "label", "lang", "language", "list", "loading", "list", "loop", "low", "manifest", "max", "maxlength", "minlength", "media", "method", "min", "multiple", "muted", "name", "novalidate", "open", "optimum", "pattern", "ping", "placeholder", "poster", "preload", "radiogroup", "readonly", "rel", "required", "reversed", "rows", "rowspan", "sandbox", "scope", "scoped", "selected", "shape", "size", "sizes", "slot", "span", "spellcheck", "src", "srcdoc", "srclang", "srcset", "start", "step", "summary", "tabindex", "target", "title", "translate", "type", "usemap", "value", "width", "wrap"];
//AND data-*, style

export type eventNames = ["abort", "afterprint", "animationend", "animationiteration", "animationstart", "appinstalled", "audioprocess", "audioend", "audiostart", "beforeprint", "beforeunload", "beginEvent", "blocked", "blur", "boundary", "cached", "canplay", "canplaythrough", "change", "chargingchange", "chargingtimechange", "checking", "click", "close", "complete", "compositionend", "compositionstart", "compositionupdate", "contextmenu", "copy", "cut", "dblclick", "devicechange", "devicelight", "devicemotion", "deviceorientation", "deviceproximity", "dischargingtimechange", "DOMActivate", "DOMAttributeNameChanged", "DOMAttrModified", "DOMCharacterDataModified", "DOMContentLoaded", "DOMElementNameChanged", "DOMFocusIn", "DOMFocusOut", "DOMNodeInserted", "DOMNodeInsertedIntoDocument", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMSubtreeModified", "downloading", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "durationchange", "emptied", "end", "ended", "endEvent", "error", "focus", "focusin", "focusout", "fullscreenchange", "fullscreenerror", "gamepadconnected", "gamepaddisconnected", "gotpointercapture", "hashchange", "lostpointercapture", "input", "invalid", "keydown", "keypress", "keyup", "languagechange", "levelchange", "load", "loadeddata", "loadedmetadata", "loadend", "loadstart", "mark", "message", "messageerror", "message", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "nomatch", "notificationclick", "noupdate", "obsolete", "offline", "online", "open", "orientationchange", "pagehide", "pageshow", "paste", "pause", "pointercancel", "pointerdown", "pointerenter", "pointerleave", "pointerlockchange", "pointerlockerror", "pointermove", "pointerout", "pointerover", "pointerup", "play", "playing", "popstate", "progress", "push", "pushsubscriptionchange", "ratechange", "readystatechange", "repeatEvent", "reset", "resize", "resourcetimingbufferfull", "result", "resume", "scroll", "seeked", "seeking", "select", "selectstart", "selectionchange", "show", "slotchange", "soundend", "soundstart", "speechend", "speechstart", "stalled", "start", "storage", "submit", "success", "suspend", "SVGAbort", "SVGError", "SVGLoad", "SVGResize", "SVGScroll", "SVGUnload", "SVGZoom", "timeout", "timeupdate", "touchcancel", "touchend", "touchmove", "touchstart", "transitionend", "unload", "updateready", "upgradeneeded", "userproximity", "voiceschanged", "versionchange", "visibilitychange", "volumechange", "waiting", "wheel"];
export const eventNames = ["abort", "afterprint", "animationend", "animationiteration", "animationstart", "appinstalled", "audioprocess", "audioend", "audiostart", "beforeprint", "beforeunload", "beginEvent", "blocked", "blur", "boundary", "cached", "canplay", "canplaythrough", "change", "chargingchange", "chargingtimechange", "checking", "click", "close", "complete", "compositionend", "compositionstart", "compositionupdate", "contextmenu", "copy", "cut", "dblclick", "devicechange", "devicelight", "devicemotion", "deviceorientation", "deviceproximity", "dischargingtimechange", "DOMActivate", "DOMAttributeNameChanged", "DOMAttrModified", "DOMCharacterDataModified", "DOMContentLoaded", "DOMElementNameChanged", "DOMFocusIn", "DOMFocusOut", "DOMNodeInserted", "DOMNodeInsertedIntoDocument", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMSubtreeModified", "downloading", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "durationchange", "emptied", "end", "ended", "endEvent", "error", "focus", "focusin", "focusout", "fullscreenchange", "fullscreenerror", "gamepadconnected", "gamepaddisconnected", "gotpointercapture", "hashchange", "lostpointercapture", "input", "invalid", "keydown", "keypress", "keyup", "languagechange", "levelchange", "load", "loadeddata", "loadedmetadata", "loadend", "loadstart", "mark", "message", "messageerror", "message", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "nomatch", "notificationclick", "noupdate", "obsolete", "offline", "online", "open", "orientationchange", "pagehide", "pageshow", "paste", "pause", "pointercancel", "pointerdown", "pointerenter", "pointerleave", "pointerlockchange", "pointerlockerror", "pointermove", "pointerout", "pointerover", "pointerup", "play", "playing", "popstate", "progress", "push", "pushsubscriptionchange", "ratechange", "readystatechange", "repeatEvent", "reset", "resize", "resourcetimingbufferfull", "result", "resume", "scroll", "seeked", "seeking", "select", "selectstart", "selectionchange", "show", "slotchange", "soundend", "soundstart", "speechend", "speechstart", "stalled", "start", "storage", "submit", "success", "suspend", "SVGAbort", "SVGError", "SVGLoad", "SVGResize", "SVGScroll", "SVGUnload", "SVGZoom", "timeout", "timeupdate", "touchcancel", "touchend", "touchmove", "touchstart", "transitionend", "unload", "updateready", "upgradeneeded", "userproximity", "voiceschanged", "versionchange", "visibilitychange", "volumechange", "waiting", "wheel"];

export const htmlElementTagNames = ["a", "abbr", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];

export type eventListenerNames = ["onabort", "onafterprint", "onanimationend", "onanimationiteration", "onanimationstart", "onappinstalled", "onaudioprocess", "onaudioend", "onaudiostart", "onbeforeprint", "onbeforeunload", "onbeginEvent", "onblocked", "onblur", "onboundary", "oncached", "oncanplay", "oncanplaythrough", "onchange", "onchargingchange", "onchargingtimechange", "onchecking", "onclick", "onclose", "oncomplete", "oncompositionend", "oncompositionstart", "oncompositionupdate", "oncontextmenu", "oncopy", "oncut", "ondblclick", "ondevicechange", "ondevicelight", "ondevicemotion", "ondeviceorientation", "ondeviceproximity", "ondischargingtimechange", "onDOMActivate", "onDOMAttributeNameChanged", "onDOMAttrModified", "onDOMCharacterDataModified", "onDOMContentLoaded", "onDOMElementNameChanged", "onDOMFocusIn", "onDOMFocusOut", "onDOMNodeInserted", "onDOMNodeInsertedIntoDocument", "onDOMNodeRemoved", "onDOMNodeRemovedFromDocument", "onDOMSubtreeModified", "ondownloading", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onend", "onended", "onendEvent", "onerror", "onfocus", "onfocusin", "onfocusout", "onfullscreenchange", "onfullscreenerror", "ongamepadconnected", "ongamepaddisconnected", "ongotpointercapture", "onhashchange", "onlostpointercapture", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onlanguagechange", "onlevelchange", "onload", "onloadeddata", "onloadedmetadata", "onloadend", "onloadstart", "onmark", "onmessage", "onmessageerror", "onmessage", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onnomatch", "onnotificationclick", "onnoupdate", "onobsolete", "onoffline", "ononline", "onopen", "onorientationchange", "onpagehide", "onpageshow", "onpaste", "onpause", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointerlockchange", "onpointerlockerror", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onplay", "onplaying", "onpopstate", "onprogress", "onpush", "onpushsubscriptionchange", "onratechange", "onreadystatechange", "onrepeatEvent", "onreset", "onresize", "onresourcetimingbufferfull", "onresult", "onresume", "onscroll", "onseeked", "onseeking", "onselect", "onselectstart", "onselectionchange", "onshow", "onslotchange", "onsoundend", "onsoundstart", "onspeechend", "onspeechstart", "onstalled", "onstart", "onstorage", "onsubmit", "onsuccess", "onsuspend", "onSVGAbort", "onSVGError", "onSVGLoad", "onSVGResize", "onSVGScroll", "onSVGUnload", "onSVGZoom", "ontimeout", "ontimeupdate", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "ontransitionend", "onunload", "onupdateready", "onupgradeneeded", "onuserproximity", "onvoiceschanged", "onversionchange", "onvisibilitychange", "onvolumechange", "onwaiting", "onwheel"];
export const eventListenerNames = ["onabort", "onafterprint", "onanimationend", "onanimationiteration", "onanimationstart", "onappinstalled", "onaudioprocess", "onaudioend", "onaudiostart", "onbeforeprint", "onbeforeunload", "onbeginEvent", "onblocked", "onblur", "onboundary", "oncached", "oncanplay", "oncanplaythrough", "onchange", "onchargingchange", "onchargingtimechange", "onchecking", "onclick", "onclose", "oncomplete", "oncompositionend", "oncompositionstart", "oncompositionupdate", "oncontextmenu", "oncopy", "oncut", "ondblclick", "ondevicechange", "ondevicelight", "ondevicemotion", "ondeviceorientation", "ondeviceproximity", "ondischargingtimechange", "onDOMActivate", "onDOMAttributeNameChanged", "onDOMAttrModified", "onDOMCharacterDataModified", "onDOMContentLoaded", "onDOMElementNameChanged", "onDOMFocusIn", "onDOMFocusOut", "onDOMNodeInserted", "onDOMNodeInsertedIntoDocument", "onDOMNodeRemoved", "onDOMNodeRemovedFromDocument", "onDOMSubtreeModified", "ondownloading", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onend", "onended", "onendEvent", "onerror", "onfocus", "onfocusin", "onfocusout", "onfullscreenchange", "onfullscreenerror", "ongamepadconnected", "ongamepaddisconnected", "ongotpointercapture", "onhashchange", "onlostpointercapture", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onlanguagechange", "onlevelchange", "onload", "onloadeddata", "onloadedmetadata", "onloadend", "onloadstart", "onmark", "onmessage", "onmessageerror", "onmessage", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onnomatch", "onnotificationclick", "onnoupdate", "onobsolete", "onoffline", "ononline", "onopen", "onorientationchange", "onpagehide", "onpageshow", "onpaste", "onpause", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointerlockchange", "onpointerlockerror", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onplay", "onplaying", "onpopstate", "onprogress", "onpush", "onpushsubscriptionchange", "onratechange", "onreadystatechange", "onrepeatEvent", "onreset", "onresize", "onresourcetimingbufferfull", "onresult", "onresume", "onscroll", "onseeked", "onseeking", "onselect", "onselectstart", "onselectionchange", "onshow", "onslotchange", "onsoundend", "onsoundstart", "onspeechend", "onspeechstart", "onstalled", "onstart", "onstorage", "onsubmit", "onsuccess", "onsuspend", "onSVGAbort", "onSVGError", "onSVGLoad", "onSVGResize", "onSVGScroll", "onSVGUnload", "onSVGZoom", "ontimeout", "ontimeupdate", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "ontransitionend", "onunload", "onupdateready", "onupgradeneeded", "onuserproximity", "onvoiceschanged", "onversionchange", "onvisibilitychange", "onvolumechange", "onwaiting", "onwheel"];

export type Element<K extends (keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap)> = 
    K extends (keyof HTMLElementTagNameMap)?
        HTMLElement<K>
        :
        K extends (keyof SVGElementTagNameMap)?
            SVGElement<K>
            :
            never;

export type Properties = {[propertyName : string]: any}
export type CreateElementFunction<K extends (keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap)> = (properties : Object<Properties>, childs : Array<Node>) => Element<K>
// tagName... can't change it.
function createElement<K extends keyof (HTMLElementTagNameMap & SVGElementTagNameMap)>(
    type : K | CreateElementFunction<K>,
    properties : Object<{
        [attributeName in attributeNames[number]]?: String | string
    } & {
        [eventListenerName in eventListenerNames[number]]?: Function<EventListener> | EventListener
    } & ((typeof type) extends OriginalFunction ? {
        [name : string] : any
    } : {})> = new Object<any>({}),
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
    const propertiesEntries = Object.Entries(properties);
    const attributes = <Object<{[attributeName in attributeNames[number]]?: String}>>Object.FromEntries(propertiesEntries.Filter(new Function(([name, value]) => {
        return !eventListenerNames.includes(name) && !(typeof type === "function" && !attributeNames.includes(name));
    })).Map(new Function(([name, value]) => {
        return [name, value instanceof String ? value : new String(value)];
    })));
    const eventListeners = <Object<{[eventListenerName in eventListenerNames[number]]?: Function<EventListener>}>>Object.FromEntries(propertiesEntries.Filter(new Function(([name, value]) => {
        return eventListenerNames.includes(name);
    })).Map(new Function(([name, value]) => {
        return [name, value instanceof Function ? value : new Function(value)];
    })));
    const options = Object.FromEntries(propertiesEntries.Filter(new Function(([name, value]) => {
        return !eventListenerNames.includes(name) && (typeof type === "function" && !attributeNames.includes(name));
    })));
    const style = <Primitive<Object<{[K in CSSProp]: String}>>> properties.Get(new String("style"));


    /* Listener... */

    const eventListenerListenerRemovers : {[eventName : string]: () => void} = {};
    const addEventListenerListener = (name : string, value : Function<EventListener>) => {
        const listener = (value : EventListener, prevValue : EventListener) => {
            result[O].removeEventListener(name.substr(2), prevValue);
            result[O].addEventListener(name.substr(2), value);
        };
        eventListenerListenerRemovers[name] = () => {
            value[C].off("set", listener);
            result[O].removeEventListener(name.substr(2), value[O].value);
            delete eventListenerListenerRemovers[name];
        };
        value[C].on("set", listener);

        result[O].addEventListener(name.substr(2), value[O].value);
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
    OriginalObject.entries(attributes[O]).forEach(([name, value]) => {
        result.attributes.set(name, value);
    });
    const attributesListeners = {
        set(name : string, value : String) {
            result.attributes.set(name, value);
        },
        unset(name : string) {
            result.attributes.unset(name);
        }
    };

    //listeners
    OriginalObject.entries(eventListeners[O]).forEach(([name, value]) => {
        addEventListenerListener(name, value);
    });
    const eventListenersListeners = {
        set(name : string, value : Function<EventListener>) {
            addEventListenerListener(name, value);
        },
        unset(name : string) {
            eventListenerListenerRemovers[name]();
        }
    };

    //childs
    if(!state.getHydratingNode) {
        result.childNodes.push(...(<ChildNode[]>(childNodes[O].map(childNode => childNode[O]))));
    }
    const childNodesListener = (start : number, deleted : Node[], inserted : Node[]) => {
        result.childNodes.splice(start, deleted.length, ...(<ChildNode[]>inserted.map(insertedNode => insertedNode[O])));
    };

    //style
    if(style[O].value) {
        OriginalObject.entries(style[O].value[O]).forEach(([name, value] : [CSSProp, String]) => {
            result.style.set(name, value instanceof String ? value : new String(value));
        });
    }
    const styleValueListeners = {
        set(name : string, value : String) {
            result.style.set(name, value instanceof String ? value : new String(value));
        },
        unset(name : string) {
            result.style.unset(name);
        }
    }
    let stylePrevValue = style[O].value;
    const styleListener = (value : Object<{[K in CSSProp]: String}>) => {
        if(stylePrevValue) {
            stylePrevValue[C].removeListeners(styleValueListeners);
        }

        if(value) {
            value[C].addListeners(styleValueListeners);
        } else {
            if(stylePrevValue) {
                OriginalObject.keys(stylePrevValue[O]).forEach(name => {
                    result.style.unset(name);
                });
            }
        }

        stylePrevValue = value;
    };




    attributes[C].addListeners(attributesListeners);
    eventListeners[C].addListeners(eventListenersListeners);
    childNodes[C].on("splice", childNodesListener);
    style[C].on("set", styleListener);

    result[S] = () => {
        propertiesEntries[S]();
        style[S]();

        OriginalObject.values(eventListenerListenerRemovers).forEach(remove => remove());
        if(stylePrevValue) stylePrevValue[C].removeListeners(styleValueListeners);

        attributes[C].removeListeners(attributesListeners);
        eventListeners[C].removeListeners(eventListenersListeners);
        childNodes[C].off("splice", childNodesListener);
    };

    return <any>result;
}

export default createElement;