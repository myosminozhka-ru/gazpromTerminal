import Glide from '@glidejs/glide';

const Modals = class Modals {
    constructor({modalsSelector, modalsOpenerSelector, openedClass, sliderOptions}){
        this.modalsSelector = modalsSelector;
        this.modalsOpenerSelector = modalsOpenerSelector;
        this.openedClass = openedClass;
        this.sliderOptions = sliderOptions;
    }
    initialSlider() {
        setTimeout(() => {
            if (!document.querySelector('.modal-glide-js')) return;
            new Glide('.modal-glide-js', this.sliderOptions).mount();
        }, 500)
    }
    openModal(id) {
        if (!document.querySelector(`[${this.modalsSelector}="${id}"]`)) return;
        document.querySelector(`[${this.modalsSelector}="${id}"]`).classList.add(this.openedClass);
    }
    closeModal(id) {
        if (!document.querySelector(`[${this.modalsSelector}="${id}"]`)) return;
        document.querySelector(`[${this.modalsSelector}="${id}"]`).classList.remove(this.openedClass);
    }
    addClickListener() {
        document.addEventListener('click', (event) => {
            if (event.target.dataset.modalId) {
                event.preventDefault();
                this.openModal(event.target.dataset.modalId);
            }
            if (!event.target.dataset.modalId && event.target.dataset.modal) {
                event.preventDefault();
                this.closeModal(document.querySelector(`[${this.modalsSelector}].isOpened`).dataset.modal);
            }
            if (event.target.closest('.modal__closer')) {
                event.preventDefault();
                this.closeModal(document.querySelector(`[${this.modalsSelector}].isOpened`).dataset.modal);
            }
        })
    }
    addKeyupListener() {
        document.addEventListener('keyup', (event) => {
            if (event.keyCode === 27 && document.querySelector(`[${this.modalsSelector}].isOpened`)) {
                this.closeModal(document.querySelector(`[${this.modalsSelector}].isOpened`).dataset.modal);
            }
        })
    }
    init() {
        if (!this.modalsSelector && this.modalsOpenerSelector) return;
        this.addClickListener();
        this.addKeyupListener();
        this.initialSlider();
    }
}

export default Modals;