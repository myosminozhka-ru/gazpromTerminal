import gsap from 'gsap';
import { TweenLite } from 'gsap';

const MainNumber = class MainNumber {
    constructor(){
        document.querySelectorAll('.counter').forEach(item => {
            let number = item.getAttribute('data-count');
        })
    }
    animationNumbers() {
        var Cont = { val: 0 },
        // NewVal = number;
        NewVal = 40;

        TweenLite.to(Cont, 5, {
            val: NewVal,
            roundProps: "val",
            onUpdate: function () {
                document.getElementById("counter").innerHTML = Cont.val;
                // document.querySelectorAll('.counter').forEach(item => {
                //     item.innerHTML = Cont.val;
                // })
            }
        });
    }
    animationNumbers2() {
        var Cont = { val: 0 },
        // NewVal = number;
        NewVal = 50;

        TweenLite.to(Cont, 5, {
            val: NewVal,
            roundProps: "val",
            onUpdate: function () {
                document.getElementById("counter2").innerHTML = Cont.val;
                // document.querySelectorAll('.counter').forEach(item => {
                //     item.innerHTML = Cont.val;
                // })
            }
        });
    }
    animationNumbers3() {
        var Cont = { val: 0 },
        // NewVal = number;
        NewVal = 30;

        TweenLite.to(Cont, 5, {
            val: NewVal,
            roundProps: "val",
            onUpdate: function () {
                document.getElementById("counter3").innerHTML = Cont.val;
                // document.querySelectorAll('.counter').forEach(item => {
                //     item.innerHTML = Cont.val;
                // })
            }
        });
    }
    init() {
        if (!document.getElementById("counter")) return;
        this.animationNumbers();
        this.animationNumbers2();
        this.animationNumbers3();
    }
}

export default MainNumber;