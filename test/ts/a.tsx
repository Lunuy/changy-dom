import ChangyDom from "../../dist/index";


const div = (
    <div id="jam">
        test
        {
            "TEST~"
        }
    </div>
);

// const fragment = <ChangyDom.Fragment>SIBAL</ChangyDom.Fragment>
// Fragment type not working

const textarea = (
    <textarea ></textarea>
);

type A = typeof textarea

// ** It isn't able to set exact type of element object