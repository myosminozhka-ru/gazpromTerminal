import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import Vue from 'vue/dist/vue.js';

import Burger from '../blocks/components/burger/burger.js';
import MainNumber from '../blocks/modules/main_numbers/main_numbers.js';
import MainNews from '../blocks/modules/main_news/main_news.js';
import MainTerminal from '../blocks/modules/main_terminal/main_terminal.js';
import Modals from '../blocks/modules/modals/modals.js';

window.app = new Vue({
    el: '#app',
    data: () => ({
        isMounted: false,
        sizes: {
            tablet: 1024,
            mobile: 768,
            window: window.innerWidth
        },
        burger: new Burger({
            isMobileMenuOpened: false,
        }),
        mainNumber: new MainNumber(),
        mainNews: new MainNews({
            sliderOptions: {
                type: 'carousel',
                perView: 4,
                gap: 40,
                focusAt: '1',
                startAt: 1,
                breakpoints: {
                    1023: {
                        perView: 3
                    },
                  800: {
                    perView: 2
                  },
                  640: {
                    perView: 1
                  }
                }
            }
        }),
        mainTerminal: new MainTerminal({
            sliderOptions: {
                type: 'carousel',
                startAt: 0,
                perView: 1
            }
        }),
        modals: new Modals({
            modalsSelector: "data-modal",
            modalsOpenerSelector: "data-modal-id",
            openedClass: "isOpened"
        }),
    }),
    beforeCreate() {        
        window.addEventListener('resize', () => {
            this.sizes.window = window.innerWidth;
        });
    },
    beforeMount() {
        this.isMounted = true;
        this.burger.init();
        this.mainNumber.init();
        this.mainNews.init();
        this.mainTerminal.init();
        this.modals.init();
    },
    computed: {
        isMobile: function () {
            return this.sizes.window < this.sizes.mobile;
        },
        isTablet: function () {
            return this.sizes.window < this.sizes.tablet && this.sizes.window > this.sizes.mobile;
        },
    },
});