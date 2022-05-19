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
        })
    }
    init() {
        this.animationNumbers();
    }
}

export default MainNumber;