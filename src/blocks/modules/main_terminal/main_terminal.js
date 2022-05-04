import Glide from '@glidejs/glide';

const MainTerminal = class MainTerminal {
    constructor({sliderOptions}){
        this.sliderOptions = sliderOptions;
    }
    initialSlider() {
        setTimeout(() => {
            new Glide('.terminal-glide-js', this.sliderOptions).mount();
        }, 500)
    }
    init() {
        this.initialSlider();
    }
}

export default MainTerminal;