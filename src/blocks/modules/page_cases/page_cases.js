import Glide from '@glidejs/glide';

const PageCases = class PageCases {
    constructor({sliderOptions}){
        this.sliderOptions = sliderOptions;
    }
    initialSlider() {
        setTimeout(() => {
            if (!document.querySelector('.cases-glide-js')) return;
            if (window.innerWidth > 1023) {
                new Glide('.cases-glide-js', this.sliderOptions).mount();
            }
        }, 500)
    }
    init() {
        this.initialSlider();
    }
}

export default PageCases;