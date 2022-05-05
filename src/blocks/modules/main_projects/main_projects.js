import Glide from '@glidejs/glide';

const MainProjects = class MainProjects {
    constructor({sliderOptions}){
        this.sliderOptions = sliderOptions;
    }
    initialSlider() {
        setTimeout(() => {
            if (!document.querySelector('.projects-glide-js')) return;
            new Glide('.projects-glide-js', this.sliderOptions).mount();
        }, 500)
    }
    init() {
        this.initialSlider();
    }
}

export default MainProjects;