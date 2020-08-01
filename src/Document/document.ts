import state from "../State/state";

function createElement<K extends keyof HTMLElementTagNameMap>(tagName : K) {
    if(state.getHydratingNode) {
        return <HTMLElement>state.getHydratingNode();
    } else {
        if(state.ssrDocument) {
            return state.ssrDocument.createElement(tagName);
        } else {
            return document.createElement(tagName);
        }
    }
}

function createElementSVG<K extends keyof SVGElementTagNameMap>(tagName : K) {
    if(state.getHydratingNode) {
        return <SVGElement>state.getHydratingNode();
    } else {
        if(state.ssrDocument) {
            return state.ssrDocument.createElementNS("http://www.w3.org/2000/svg", tagName);
        } else {
            return document.createElementNS("http://www.w3.org/2000/svg", tagName);
        }
    }
}

function createTextNode(text : string) {
    if(state.getHydratingNode) {
        const textNode = <Text>state.getHydratingNode();
        textNode.data = text;
        return textNode;
    } else {
        if(state.ssrDocument) {
            return state.ssrDocument.createTextNode(text);
        } else {
            return document.createTextNode(text);
        }
    }
}

export default {
    createElement,
    createElementSVG,
    createTextNode
};