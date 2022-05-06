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
    scrollTo() {
        setTimeout(() => {
            document.querySelectorAll('.tabs__tab').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        }, 500)
    }
    init() {
        this.initialSlider();
        this.scrollTo();
    }
}

export default CasePage;