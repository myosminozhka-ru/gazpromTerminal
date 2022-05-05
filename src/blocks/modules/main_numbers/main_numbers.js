import gsap from 'gsap';
import { TweenLite } from 'gsap';

const MainNumber = class MainNumber {
    constructor(){
        document.querySelectorAll('.counter').forEach(item => {
            let number = item.getAttribute('data-count');
        })
    }
    animationNumbers() {
        // var Cont = { val: 0 },
        // NewVal = number;

        // TweenLite.to(Cont, 5, {
        //     val: NewVal,
        //     roundProps: "val",
        //     onUpdate: function () {
        //         // document.getElementById("counter").innerHTML = Cont.val;
        //         document.querySelectorAll('.counter').forEach(item => {
        //             item.innerHTML = Cont.val;
        //         })
        //     }
        // });
    }
    init() {
        this.animationNumbers();
    }
}

export default MainNumber;