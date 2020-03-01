const { Number, O, Object, String, Array, Function } = require("changy");
const { createElement } = require("../dist/index");

const count = new Number(0);

const root = document.getElementById("root");
const attributes = new Object({

});
const eventListeners = new Object({
    click: new Function(() => {
        count.set(count[O].value + 1);
    })
});
const childs = new Array([
    createElement("input", new Object({
        type: new String("button"),
        value: count.toString()
    }))
]);
const div = createElement("div", attributes, eventListeners, childs);

root.appendChild(div[O]);