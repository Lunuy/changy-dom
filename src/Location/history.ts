import location from "./location";


export default {
    pushState(state : any, title : string, url? : string) {
        history.pushState(state, title, url);
        location.pathname.set(url);
    },
    replaceState(state : any, title : string, url? : string) {
        history.replaceState(state, title, url);
        location.pathname.set(url);
    }
};