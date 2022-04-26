const Burger = class Burger {
    constructor(){
        this.isMobileMenuOpened = false;
    }
    toogleMobileMenu() {
        this.isMobileMenuOpened = !this.isMobileMenuOpened;
    }
    closeMobileMenu() {
        this.isMobileMenuOpened = false;
    }
    setEventListener() {
        if (!document.querySelector('.menu_burger__icon')) return;
        document.querySelector('.menu_burger__icon').addEventListener('click', () => {
            this.toogleMobileMenu();
        }) 
        if (document.querySelector('.menu_burger__close')) {
            document.querySelector('.menu_burger__close').addEventListener('click', () => {
                this.closeMobileMenu();
            }) 
        }
        document.addEventListener('click', (event) => {
            if (event.target.closest('.menu_burger__body') || event.target.closest('.menu_burger__icon')) return;
            this.closeMobileMenu();
        }) 

    }
    init() {
        this.setEventListener();
    }
}

export default Burger;