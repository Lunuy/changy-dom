
import state from "../State/state";
import Node from "../Node/Node";
import OriginalNode from "../Originals/Node";

function flatNodeTree(node : OriginalNode) : OriginalNode[] {
    return Array.prototype.concat.call([], ...Array.from(node.childNodes).map(childNode => flatNodeTree(childNode)), node);
}

export default function hydrate(targetNode : OriginalNode) {
    const nodes = flatNodeTree(targetNode);
    state.getHydratingNode = () => {
        return nodes.splice(0, 1)[0];
    };
    return (resultNode : Node) => {
        delete state.getHydratingNode;
        return resultNode;
    };
}