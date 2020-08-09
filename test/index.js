const { Number, O, C, Object, String, Array, Function, iF, cF, Boolean, S, IN } = require("changy");
const ChangyDom = require("../dist/index");
const { A, Fragment, location } = require("../dist/index");

const root_strtest = document.getElementById("root_strtest");
//const root = document.getElementById("root");
//const target_div = root.childNodes[0];

const memos = new Array([new String("first Memo")])[IN]();

function MemoInput({memos}) {
    const textInput = <input type="text"/>;
    const value = textInput.value;

    return (
        <div>
            {textInput}
            <input type="button" value="EMIT!" onclick={() => {
                memos.push(new String(textInput[O].value));
                value.set("");
            }}/>
            {
                value
            }
            <div style={{display: "inline-block"}}>
                {
                    iF(<p>-long</p>, <p>-short</p>)(cF(str => str.length > 10, Boolean)(value))
                }
            </div>
        </div>
    );
}

function MemoList({memos}) {
    const result = (
        <div>
            {
                memos.Map(
                    new Function((memo) => {
                        return (
                            <div>
                                <input type="text" style={{
                                    border: "none",
                                    backgroundColor: "orange"
                                }} value={memo}/>
                                <input type="button" value="X" onclick={_ => memos.splice(memos[O].indexOf(memo), 1)}/>
                            </div>
                        );
                    })
                )
            }
        </div>
    );
    //setInterval(() => console.log(result[C]), 1000);
    return result;
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

const result = (//ChangyDom.hydrate(target_div)(
    <div>
        <MemoInput memos={memos}/>
        <MemoList memos={memos}/>
        <ChangyDom.Fragment>
            <div>A</div>
            <div>B</div>
            <div>C</div>
        </ChangyDom.Fragment>
        <A to="/0_호히히">HHH</A><br/>
        <A to="/1_후히히">HH</A><br/>
        <A to="/2_히히히">H</A><br/>
        {
            new Array([
                <h1>0번이야!!</h1>,
                <h1>이잉 1번</h1>,
                <h1>222222222222222222222222222222</h1>,
                <h3>여긴 메인이라규.</h3>
            ]).Get(cF(pathname => parseInt(pathname[1] ?? 3), Number)(location.pathname))
        }
    </div>
);
const div = document.body.appendChild(result[O]);

//setInterval(() => console.log(memos[C]), 1000);

document.body.appendChild((<input type="button" value="STOP!!" onclick={_ => result[S]()}/>)[O]);

//root.appendChild(div[O]);