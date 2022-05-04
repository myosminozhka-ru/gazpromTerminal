import Glide from '@glidejs/glide';

const MainNews = class MainNews {
    constructor({sliderOptions}){
        this.sliderOptions = sliderOptions;
    }
    initialSlider() {
        setTimeout(() => {
            new Glide('.news-glide-js', this.sliderOptions).mount();
        }, 500)
    }
    init() {
        this.initialSlider();
    }
}

export default MainNews;