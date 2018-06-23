import * as DOM from '../utils/DOM.js';
import {routerConfig} from './router.config.js';
import getArticles from '../articles/articles.js';

export default class Router {
    constructor() {
        this.loaders = {
            getArticles: getArticles
        };
        DOM.header.addEventListener('click', (e) => {
            if (e.target.nodeName !== 'A') return;
            e.preventDefault();
            const route = e.target.href.slice(e.target.href.lastIndexOf('/') + 1);
            this.load(route);
        })
    }
    load(route) {
        const url = routerConfig[route].template;
        return fetch(url)
            .then(response => response.text())
            .then((html) => {
                (route === 'reference') ? this.insertAside(html): this.insertMain(html);
            })
            .then(()=>{this.callLoader(route)})
            .catch(error => this.insertMain(error));
    }

    insertMain(html) {
        DOM.main.innerHTML = html;
    }

    insertAside(html) {
        DOM.aside.innerHTML = html;
    }

    callLoader(route) {
        const loader = routerConfig[route].loader;
        if (loader) {
            this.loaders[loader]();
        }
    }
}
