/*

const singleHTMLElements = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];

export interface SSRNode {
    toString() : string
}

function tagToString(tagName : string, childs : SSRNode[], attributes : {[name : string]: string}) {
    const stringAttributes = Object.entries(attributes).map(([name, value]) => {
        return ` ${name}="${
            value
            .replace(/\&/g, "&amp;")
            .replace(/\</g, "&lt;")
            .replace(/\"/g, "&#39;")
        }"`
    }).join("");
    if(singleHTMLElements.includes(tagName)) {
        return `<${tagName}${stringAttributes}>`
    } else {
        return `<${tagName}${stringAttributes}>${childs.map(child => child.toString())}</${tagName}>`
    }
}

function createElement_(tagName : string) {
    const childs : SSRNode[] = [];
    const attributes : {[name : string]: string} = {};
    return {
        appendChild(child : SSRNode) {
            childs.push(child);
        },
        setAttribute(name : string, value : string) {
            attributes[name] = value;
        },
        getAttribute(name : string) {
            return attributes[name];
        },
        style:{

        },
        getAttributeNames() {
            return Object.keys(attributes);
        },
        toString() {
            return tagToString(tagName, childs, attributes);
        }
    };
}

function createElement(tagName : string) {
    return createElement_(tagName);
}

function createElementSVG(tagName : string) {
    return createElement_(tagName);
}

function createTextNode(text : string) {
    let data = text;
    return {
        set data(text : string) {
            data = text;
        },
        toString() {
            return data;
        }
    };
}

export default {
    createElement,
    createElementSVG,
    createTextNode
}
*/