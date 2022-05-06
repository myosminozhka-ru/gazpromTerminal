import Glide from '@glidejs/glide';

const CasePage = class CasePage {
    constructor({sliderOptions}){
        this.sliderOptions = sliderOptions;
    }
    initialSlider() {
        setTimeout(() => {
            if (!document.querySelector('.case_page-glide-js')) return;
            new Glide('.case_page-glide-js', this.sliderOptions).mount();
        }, 500)
    }
    init() {
        this.initialSlider();
    }
}

export default CasePage;