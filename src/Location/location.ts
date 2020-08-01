import { String } from "changy";

const location_ = {
    pathname: new String(globalThis.window ? window.location.pathname : undefined)
};

if(globalThis.window) {
    window.addEventListener("popstate", () => {
        location_.pathname.set(location.pathname);
    });
}

export default location_;