import Glide from '@glidejs/glide';

const MainQuestion = class MainQuestion {
    constructor(){
    }
    toggleQuestion() {
        setTimeout(() => {
            let navItems = document.querySelectorAll(".main_ques__block");
            const removeSelected = active => navItems.forEach(elem => {
                if (elem != active) elem.classList.remove("isActive");
            })
            navItems.forEach(navitem => {
                navitem.addEventListener("click", function() {
                    navitem.classList.toggle("isActive");
                    removeSelected(navitem);
                });
            })
        }, 500)
    }
    init() {
        this.toggleQuestion();
    }
}

export default MainQuestion;