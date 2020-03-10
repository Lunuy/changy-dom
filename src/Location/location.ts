import { String } from "changy";
import { state } from "..";

const changeableLocation = {
    pathname: new String(state.ssrDocument ? "" : location.pathname)
};

if(this.window) {
    this.window.addEventListener("popstate", () => {
        changeableLocation.pathname.set(location.pathname);
    });
}

export default changeableLocation;