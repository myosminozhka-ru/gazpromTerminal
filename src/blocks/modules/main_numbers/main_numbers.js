import gsap from 'gsap';
import { TweenLite } from 'gsap';

const MainNumber = class MainNumber {
    constructor({number1, number2, number3}){
        this.number1 = number1;
        this.number2 = number2;
        this.number3 = number3;
    }
    animationNumbers() {
        var Cont = { val: 0 },
        NewVal = this.number1;

        TweenLite.to(Cont, 5, {
            val: NewVal,
            roundProps: "val",
            onUpdate: function () {
                document.getElementById("counter1").innerHTML = Cont.val;
            }
        });
    }
    animationNumbers2() {
        var Cont = { val: 0 },
        NewVal = this.number2;

        TweenLite.to(Cont, 5, {
            val: NewVal,
            roundProps: "val",
            onUpdate: function () {
                document.getElementById("counter2").innerHTML = Cont.val;
            }
        });
    }
    animationNumbers3() {
        var Cont = { val: 0 },
        NewVal = this.number3;

        TweenLite.to(Cont, 5, {
            val: NewVal,
            roundProps: "val",
            onUpdate: function () {
                document.getElementById("counter3").innerHTML = Cont.val;
            }
        });
    }
    init() {
        if (!document.getElementById("counter1")) return;
        this.animationNumbers();
        this.animationNumbers2();
        this.animationNumbers3();
    }
}

export default MainNumber;
