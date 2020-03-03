import HTMLElement from "../Node/HTMLElement";
import SVGElement from "../Node/SVGElement";
import { Object, String, Function, Array, O, C, S } from "changy";
import OriginalObject from "../Originals/Object";
import Node from "../Node/Node";
import OriginalFunction from "../Originals/Function";
import OriginalString from "../Originals/String";

export interface ElementClasses {

}
const elementClasses : ElementClasses = {

};

export type attributeNames = ["accept", "accept-charset", "accesskey", "action", "align", "allow", "alt", "async", "autocapitalize", "autocomplete", "autofocus", "autoplay", "background", "bgcolor", "border", "buffered", "capture", "challenge", "charset", "checked", "cite", "class", "code", "codebase", "color", "cols", "colspan", "content", "contenteditable", "contextmenu", "controls", "coords", "crossorigin", "csp", "data", "datetime", "decoding", "default", "defer", "dir", "dirname", "disabled", "download", "draggable", "dropzone", "enctype", "enterkeyhint", "for", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "headers", "height", "hidden", "high", "href", "hreflang", "http-equiv", "icon", "id", "importance", "integrity", "intrinsicsize", "inputmode", "ismap", "itemprop", "keytype", "kind", "label", "lang", "language", "list", "loading", "list", "loop", "low", "manifest", "max", "maxlength", "minlength", "media", "method", "min", "multiple", "muted", "name", "novalidate", "open", "optimum", "pattern", "ping", "placeholder", "poster", "preload", "radiogroup", "readonly", "rel", "required", "reversed", "rows", "rowspan", "sandbox", "scope", "scoped", "selected", "shape", "size", "sizes", "slot", "span", "spellcheck", "src", "srcdoc", "srclang", "srcset", "start", "step", "style", "summary", "tabindex", "target", "title", "translate", "type", "usemap", "value", "width", "wrap"];
export const attributeNames = ["accept", "accept-charset", "accesskey", "action", "align", "allow", "alt", "async", "autocapitalize", "autocomplete", "autofocus", "autoplay", "background", "bgcolor", "border", "buffered", "capture", "challenge", "charset", "checked", "cite", "class", "code", "codebase", "color", "cols", "colspan", "content", "contenteditable", "contextmenu", "controls", "coords", "crossorigin", "csp", "data", "datetime", "decoding", "default", "defer", "dir", "dirname", "disabled", "download", "draggable", "dropzone", "enctype", "enterkeyhint", "for", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "headers", "height", "hidden", "high", "href", "hreflang", "http-equiv", "icon", "id", "importance", "integrity", "intrinsicsize", "inputmode", "ismap", "itemprop", "keytype", "kind", "label", "lang", "language", "list", "loading", "list", "loop", "low", "manifest", "max", "maxlength", "minlength", "media", "method", "min", "multiple", "muted", "name", "novalidate", "open", "optimum", "pattern", "ping", "placeholder", "poster", "preload", "radiogroup", "readonly", "rel", "required", "reversed", "rows", "rowspan", "sandbox", "scope", "scoped", "selected", "shape", "size", "sizes", "slot", "span", "spellcheck", "src", "srcdoc", "srclang", "srcset", "start", "step", "style", "summary", "tabindex", "target", "title", "translate", "type", "usemap", "value", "width", "wrap"];

//AND data-*
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

    //create init values.
    const originalPropertiesForFunction : {[name : string]: any} = {};
    const originalAttributes : {[attributeName in attributeNames[number]]?: String} = {};
    const originalEventListeners : {[eventListenerName in eventListenerNames[number]]?: Function<EventListener>} = {};
    OriginalObject.entries(properties[O]).forEach(([propertyName, value]) => {
        if(attributeNames.includes(propertyName)) {
            originalAttributes[<attributeNames[number]>propertyName] = value instanceof String ? value : new String(OriginalString(value));
        } else if(eventListenerNames.includes(propertyName)) {
            originalEventListeners[<eventListenerNames[number]>propertyName] = value instanceof Function ? value : new Function(value);
        } else {
            if(type instanceof OriginalFunction) {
                originalPropertiesForFunction[propertyName] = value;
            } else {
                originalAttributes[<attributeNames[number]>propertyName] = value instanceof String ? value : new String(OriginalString(value));
            }
        }
    });

    //create result.
    let result : Element<K>;
    let propertiesForFunction : Object<{[name : string]: any}>;
    if(type instanceof OriginalFunction) {
        propertiesForFunction = new Object(originalPropertiesForFunction);
        result = type(propertiesForFunction, childNodes);
    } else {
        if(htmlElementTagNames.includes(type)) { //html
            let element = document.createElement(<keyof HTMLElementTagNameMap>type);
            result = (<any>elementClasses)[type] ? new (<any>elementClasses)[type](element) : new HTMLElement(element);
        } else { //svg
            let element = document.createElementNS("http://www.w3.org/2000/svg", <keyof SVGElementTagNameMap>type);
            result = (<any>elementClasses)[type] ? new (<any>elementClasses)[type](element) : new SVGElement(element);
        }
    }

    //set & listen attribute, eventListener
    const propertyListenerRemovers : {[attributeName : string]: OriginalFunction} = {};
    function addAttributeListener(attributeName : string, value : String) {
        const listener = (value : string) => {
            result.setAttribute(attributeName, value);
        };
        value[C].on("set", listener);
        propertyListenerRemovers[attributeName] = () => {
            value[C].off("set", listener);
            delete propertyListenerRemovers[attributeName];
        };
    }
    function addEventListenerListener(eventName : string, f : Function<EventListener>) {
        let beforeF = f[O].value;
        const listener = (f : EventListener) => {
            result.removeEventListener(eventName.substr(2), beforeF);
            result.addEventListener(eventName.substr(2), f);
            beforeF = f;
        };
        f[C].on("set", listener);
        propertyListenerRemovers[eventName] = () => {
            f[C].off("set", listener);
            delete propertyListenerRemovers[eventName];
        };
    }

    //set
    OriginalObject.entries(originalAttributes).forEach(([attributeName, value]) => { //attributes
        result.setAttribute(attributeName, value[O].value);
        addAttributeListener(attributeName, value);
    });
    OriginalObject.entries(originalEventListeners).forEach(([eventName, f]) => { //eventListeners
        result.addEventListener(eventName.substr(2), f[O].value);
        addEventListenerListener(eventName, f);
    });
    if(!(type instanceof OriginalFunction)) {
        childNodes[O].forEach(childNode => { //childNodes
            result.appendChild(childNode[O]);
        });
    }

    //listen
    const propertiesListeners = {
        set(propertyName : string, value : any, beforeValue : any) {
            if(attributeNames.includes(propertyName)) { //attribute
                if(beforeValue) {
                    propertyListenerRemovers[propertyName]();
                }
                if(!(value instanceof String)) value = new String(OriginalString(value));
                result.setAttribute(propertyName, value[O].value);
                addAttributeListener(propertyName, value);
            } else if(eventListenerNames.includes(propertyName)) { //eventListener
                if(beforeValue) {
                    propertyListenerRemovers[propertyName]();
                    result.removeEventListener(propertyName.substr(2), beforeValue);
                }
                if(!(value instanceof Function)) value = new Function(value);
                result.addEventListener(propertyName.substr(2), value[O].value);
                addEventListenerListener(propertyName, value);
            } else {
                if(type instanceof OriginalFunction) { //property
                    propertiesForFunction.set(propertyName, value);
                } else { //same as attribute
                    if(beforeValue) {
                        propertyListenerRemovers[propertyName]();
                    }
                    if(!(value instanceof String)) value = new String(OriginalString(value));
                    result.setAttribute(propertyName, value[O].value);
                    addAttributeListener(propertyName, value);
                }
            }
        },
        unset(propertyName : string, value : any) {
            if(attributeNames.includes(propertyName)) { //attribute
                propertyListenerRemovers[propertyName]();
                result.removeAttribute(propertyName);
            } else if(eventListenerNames.includes(propertyName)) { //eventListener
                propertyListenerRemovers[propertyName]();
                result.removeEventListener(propertyName, value[O].value);
            } else {
                if(type instanceof OriginalFunction) { //property
                    propertiesForFunction.unset(propertyName);
                } else { //same as attribute
                    propertyListenerRemovers[propertyName]();
                    result.removeAttribute(propertyName);
                }
            }
        }
    }
    const childNodesListener = (start : number, deleted : Node[], inserted : Node[]) => {
        for(let i = 0; i < deleted.length; i++) {
            result.removeChildIndex(start);
        }
        for(let i = 0; i < inserted.length; i++) {
            result.insertIndex(inserted[i][O], start + i);
        }
    };

    properties[C].addListeners(propertiesListeners);
    if(!(type instanceof OriginalFunction)) {
        childNodes[C].on("splice", childNodesListener);
    }

    const prevS = result[S];
    result[S] = () => {
        prevS();
        properties[C].removeListeners(propertiesListeners);
        if(!(type instanceof OriginalFunction)) {
            childNodes[C].off("splice", childNodesListener);
        }
        OriginalObject.values(propertyListenerRemovers).forEach(remove => remove());
    };

    return <any>result;
}

export default createElement;