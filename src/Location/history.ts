import location from "./location";
import changyState from "../State/state";

export default {
    pushState(state : any, title : string, url? : string) {
        if(!changyState.ssrDocument) history.pushState(state, title, url);
        location.pathname.set(url);
    },
    replaceState(state : any, title : string, url? : string) {
        if(!changyState.ssrDocument) history.replaceState(state, title, url);
        location.pathname.set(url);
    }
};