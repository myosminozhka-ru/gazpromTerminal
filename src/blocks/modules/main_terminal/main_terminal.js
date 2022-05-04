import Glide from '@glidejs/glide';

const MainTerminal = class MainTerminal {
    constructor({sliderOptions}){
        this.sliderOptions = sliderOptions;
    }
    initialSlider() {
        setTimeout(() => {
            new Glide('.glide', this.sliderOptions).mount();
        }, 500)
    }
    init() {
        this.initialSlider();
    }
}

export default MainTerminal;