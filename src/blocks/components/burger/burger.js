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
    }
    init() {
        this.setEventListener();
    }
}

export default Burger;