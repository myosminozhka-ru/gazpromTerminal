const MainFooter = class MainFooter {
    constructor(){}
    scrollTo() {
        setTimeout(() => {
            document.querySelectorAll('.lang_ru ul li a').forEach(anchor => {
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

export default MainFooter;