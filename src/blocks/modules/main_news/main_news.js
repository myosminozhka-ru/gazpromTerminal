import Glide from '@glidejs/glide';

const MainNews = class MainNews {
    constructor({sliderOptions}){
        this.sliderOptions = sliderOptions;
        this.slider = new Glide('.news-glide-js', this.sliderOptions);
    }
    initialSlider() {
        setTimeout(() => {
            if (!document.querySelector('.news-glide-js')) return;
            this.slider.mount();
        }, 500)
    }
    init() {
        this.initialSlider();
    }
}

export default MainNews;