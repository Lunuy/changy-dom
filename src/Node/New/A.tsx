import { String, O } from "changy";

import * as ChangyDom from "../../index"
import history from "../../Location/history";

export default function A({ to } : {to : string | String<any>}, childs : Array<Node>) {
    if(typeof to === "string") to = new String(to);

    return (
        <a
            href={to}
            onclick={(e) => {
                e.preventDefault();
                history.pushState(null, null, (to as String<any>)[O])
            }}
        >
            {childs}
        </a>
    );
}