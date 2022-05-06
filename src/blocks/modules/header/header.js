const MainHeader = class MainHeader {
    constructor(){}
    scrollTo() {
        setTimeout(() => {
            document.querySelectorAll('.header__menu ul li a').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        }, 500)
    }
    init() {
        this.scrollTo();
    }
}

export default MainHeader;