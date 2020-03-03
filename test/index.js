const { Number, O, Object, String, Array, Function } = require("changy");
const ChangyDom = require("../dist/index");

const root = document.getElementById("root");

const memos = new Array([new String("first Memo")]);

function MemoInput({[O]:{memos}}) {
    const textInput = <input type="text"/>;

    return (
        <div>
            {textInput}
            <input type="button" value="EMIT!" onclick={() => {
                memos.push(new String(textInput[O].value))
            }}/>
        </div>
    );
}

const div = (
    <div>
        <MemoInput memos={memos}/>
        {
            memos.map(
                new Function((memo) => {
                    return <input type="text" style="display: block; border:none;" value={memo}/>
                })
            )
        }
        슈바슈바
    </div>
);

root.appendChild(div[O]);