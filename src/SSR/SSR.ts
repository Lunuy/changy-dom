import location from "../Location/location"
import { String } from "changy"



export default {
    clear() {
        location.pathname = new String(undefined);
    }
}