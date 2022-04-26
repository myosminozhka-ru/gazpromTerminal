import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import Vue from 'vue/dist/vue.js';

// import Burger from '../blocks/components/burger/burger.js';
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
        // burger: new Burger({
        //     isMobileMenuOpened: false,
        // }),
        modals: new Modals({
            modalsSelector: "data-modal",
            modalsOpenerSelector: "data-modal-id",
            openedClass: "isOpened"
        }),
        sizes: {
            window: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        },
    }),
    beforeCreate() {        
        window.addEventListener('resize', () => {
            this.sizes.window = window.innerWidth;
        });
    },
    beforeMount() {
        this.isMounted = true;
        // this.burger.init();
        this.modals.init();
    },
    mounted() {
        setTimeout(() => {
            window.addEventListener('resize', () => {
                this.window = {
                    width: window.innerWidth,
                    height: window.innerHeight,
                }
            });
        }, 250);
    },
    computed: {
        isMobile: function () {
            return this.sizes.window < this.sizes.mobile;
        },
        isTablet: function () {
            return this.sizes.window < this.sizes.tablet && this.sizes.window > this.sizes.mobile;
        },
        window: {
            get() {
                return {
                    width: this.sizes.window.width,
                    height: this.sizes.window.height
                }
            },
            set(newValue) {
                this.sizes.window = newValue;
            }
        },
    },
});