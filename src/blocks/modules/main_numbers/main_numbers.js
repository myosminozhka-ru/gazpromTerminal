import gsap from 'gsap';
import { TweenLite } from 'gsap';

const MainNumber = class MainNumber {
    constructor(){
        this.counters = []
    }
    animationNumbers() {
        document.querySelectorAll('.counter').forEach(counter => {
            let Cont = { val: 0 };

            TweenLite.to(Cont, 5, {
                val: counter.dataset.counter,
                roundProps: "val",
                onUpdate: function () {
                    document.querySelector(`[data-counter="${counter.dataset.counter}"]`).innerHTML = Cont.val;
                }
            });
        });
    }
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    showElem() {
        let isEvent = false;
        const scrollToSecScr=()=>{
            let blShow=document.querySelector('.main_numbers');
            // console.log(this.isInViewport(blShow));
            if ( !isEvent ) {
                if (this.isInViewport(blShow)) {
                // if (document.documentElement.scrollTop) {
                    this.animationNumbers()
                    isEvent = true;
                }
            }
        }
        window.addEventListener('scroll',scrollToSecScr);
    }
    init() {
        this.showElem();
    }
}

export default MainNumber;