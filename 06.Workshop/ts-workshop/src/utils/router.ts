import type { Routes } from "../interfaces/Route"

export class Router {
    private routes: Routes;

    constructor(routes: Routes) {
        this.routes = routes;
        this.navigate(window.location.pathname);
    }

    navigate(pathName: string) {
        history.pushState({}, '', pathName);

        const templateFunction = this.routes[pathName];
        if (templateFunction) {
            templateFunction();
        }
    }
}

