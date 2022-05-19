import gsap from 'gsap';
import { TweenLite } from 'gsap';

const MainNumber = class MainNumber {
    constructor({number1, number2, number3}){
        this.number1 = number1;
        this.number2 = number2;
        this.number3 = number3;
    }
    animationNumbers() {
        setTimeout(() => {
            var Cont = { val: 0 },
            NewVal = this.number1;

            TweenLite.to(Cont, 5, {
                val: NewVal,
                roundProps: "val",
                onUpdate: function () {
                    if (!document.getElementById("counter1")) return;
                    document.getElementById("counter1").innerHTML = Cont.val;
                }
            });
        }, 500)
    }
    animationNumbers2() {
        setTimeout(() => {
            var Cont = { val: 0 },
            NewVal = this.number2;

            TweenLite.to(Cont, 5, {
                val: NewVal,
                roundProps: "val",
                onUpdate: function () {
                    if (!document.getElementById("counter2")) return;
                    document.getElementById("counter2").innerHTML = Cont.val;
                }
            });
        }, 500)
    }
    animationNumbers3() {
        setTimeout(() => {
            var Cont = { val: 0 },
            NewVal = this.number3;

            TweenLite.to(Cont, 5, {
                val: NewVal,
                roundProps: "val",
                onUpdate: function () {
                    if (!document.getElementById("counter3")) return;
                    document.getElementById("counter3").innerHTML = Cont.val;
                }
            });
        }, 500)
    }
    init() {
        this.animationNumbers();
        this.animationNumbers2();
        this.animationNumbers3();
    }
}

export default MainNumber;