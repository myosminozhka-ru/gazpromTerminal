const Burger = class Burger {
    constructor({isMobileMenuOpened}){
        this.isMobileMenuOpened = false;
    }
    toogleMobileMenu() {
        this.isMobileMenuOpened = !this.isMobileMenuOpened;
    }
    closeMobileMenu() {
        this.isMobileMenuOpened = false;
    }
    setEventListener() {
        document.addEventListener('click', (event) => {
            if (event.target.closest('.menu_burger__body') || event.target.closest('.menu_burger')) return;
            this.closeMobileMenu();
        }) 
        document.getElementsByClassName('menu_burger__menu').onclick = function(e) {
            if(e.target.tagName != 'A') return;
            else closeMobileMenu();//Иначе закрываем меню
        }
    }
    init() {
        this.setEventListener();
    }
}

export default Burger;