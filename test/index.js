const { Number, O, Object, String, Array, Function } = require("changy");
const ChangyDom = require("../dist/index");

const root_strtest = document.getElementById("root_strtest");
const root = document.getElementById("root");
const target_div = root.childNodes[0];

const memos = new Array([new String("first Memo")]);

function MemoInput({memos}) {
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

//<MemoInput memos={memos}/>

root_strtest.appendChild(
    (
        <span>
            {
                ["Memo","memO"]
            }
        </span>
    )[O]
);

const div = ChangyDom.hydrate(target_div)(
    <div>
        <MemoInput memos={memos}/>
        {
            memos.Map(
                new Function((memo) => {
                    return <input type="text" style={{
                        display: "block",
                        border: "none"
                    }} value={memo}/>
                })
            )
        }
    </div>
);

//root.appendChild(div[O]);