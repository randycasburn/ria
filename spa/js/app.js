import Router from './router/router.js';
import './utils/scroll_arrows.js';

class App extends Router {
    /**
     * Initialize app by loading home page and reference
     */
    constructor() {
        super();
        super.load('reference');
        super.load('home');
    }
}

new App();
