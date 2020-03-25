import { String } from "changy";
import { state } from "..";

const location_ = {
    pathname: new String(this.window ? location.pathname : undefined)
};

if(this.window) {
    this.window.addEventListener("popstate", () => {
        location_.pathname.set(location.pathname);
    });
}

export default location_;