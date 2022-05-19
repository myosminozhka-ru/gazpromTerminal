import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import Vue from 'vue/dist/vue.js';

import Burger from '../blocks/components/burger/burger.js';
import MainHeader from '../blocks/modules/header/header.js';
import MainNumber from '../blocks/modules/main_numbers/main_numbers.js';
import MainProjects from '../blocks/modules/main_projects/main_projects.js';
import MainQuestion from '../blocks/modules/main_ques/main_ques.js';
import MainNews from '../blocks/modules/main_news/main_news.js';
import MainTerminal from '../blocks/modules/main_terminal/main_terminal.js';
import MainFooter from '../blocks/modules/footer/footer.js';
import PageCases from '../blocks/modules/page_cases/page_cases.js';
import CasePage from '../blocks/modules/case_page/case_page.js';
import Modals from '../blocks/modules/modals/modals.js';
import Value from '../blocks/modules/main__value/main__value.js';

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
        mainHeader: new MainHeader(),
        mainFooter: new MainFooter(),
        mainNumber: new MainNumber({
            number1: 60,
            number2: 50,
            number3: 30,
        }),
        mainNews: new MainNews({
            sliderOptions: {
                type: 'carousel',
                perView: 4,
                gap: 40,
                watchOverflow: true,
                startAt: 0,
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
        mainQuestion: new MainQuestion({
            isOpened: false,
        }),
        mainProjects: new MainProjects({
            sliderOptions: {
                type: 'carousel',
                startAt: 0,
                gap: 40,
                perView: 2,
                breakpoints: {
                    1023: {
                        perView: 1
                    },
                }
            }
        }),
        casePage: new CasePage({
            sliderOptions: {
                type: 'carousel',
                startAt: 0,
                perView: 1
            }
        }),
        mainTerminal: new MainTerminal({
            sliderOptions: {
                type: 'carousel',
                startAt: 0,
                perView: 1,
                transitionType: 'fade'
            }
        }),
        pageCases: new PageCases({
            sliderOptions: {
                type: 'carousel',
                startAt: 0,
                perView: 1
            }
        }),
        modals: new Modals({
            modalsSelector: "data-modal",
            modalsOpenerSelector: "data-modal-id",
            openedClass: "isOpened",
            sliderOptions: {
                type: 'carousel',
                startAt: 0,
                perView: 1
            }
        }),
        value: new Value(),
        headerHeight: 0
    }),
    beforeCreate() {        
        window.addEventListener('resize', () => {
            this.sizes.window = window.innerWidth;
        });
    },
    beforeMount() {
        this.isMounted = true;
        this.burger.init();
        this.mainHeader.init();
        this.mainFooter.init();
        this.mainNumber.init();
        this.mainQuestion.init();
        this.mainProjects.init();
        this.mainNews.init();
        this.mainTerminal.init();
        this.pageCases.init();
        this.casePage.init();
        this.modals.init();
        this.value.init();        
    },
    mounted() {
        setTimeout(() => {
            this.headerHeight = document.querySelector('.header').offsetHeight;
        }, 500)
    },
    computed: {
        isMobile: function () {
            return this.sizes.window < this.sizes.mobile;
        },
        isTablet: function () {
            return this.sizes.window < this.sizes.tablet && this.sizes.window > this.sizes.mobile;
        },
    },
    methods: {
        addClassToWrapper(nameOfClass) {
            if (document.querySelector('.wrapper')) {
                document.querySelector('.wrapper').classList.add(nameOfClass)
            }
        },
    }
});