import { cF, String } from "changy";
import * as ChangyDom from "../";

interface Routes {
    [name : string]: [
        RegExp,
        Function
    ]
}

function route(routes : Routes, DefaultElement : Function, pathname : String<string>) {
    const routesEntries = Object.entries(routes);
    return cF((pathname : string) => {
        const foundRoute = routesEntries.find(([_, [regexp, __]] : [string, [RegExp, any]]) =>
            regexp.test(pathname)
        );
        if(!foundRoute) return <DefaultElement/>;
        const [regexp, Element] = foundRoute[1];
        return <Element pathParams={(regexp.exec(pathname)?.groups)}/>;
    })(pathname);
}

export default route;