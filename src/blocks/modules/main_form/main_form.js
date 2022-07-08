const MainForm = class MainForm {
    constructor() {
        this.question = "";
        this.name = "";
        this.phone = "";
        this.email = "";
        this.check1 = false;
        this.check2 = false;
        this.url = "/local/ajax/form.php";
        this.errors = {
            question: '',
            check1: '',
            name: '',
            phone: '',
            email: '',
            check2: ''
        }
        this.isSended = false
    }
    openNextStep() {
        console.log('form next step')
        
        if (this.question === '') {
            this.errors.question = 'Задайте Ваш вопрос.';
        }
        if (!this.check1) {
            this.errors.check1 = 'Вы должны согласиться на обработку';
        }
        if (this.question !== '' && this.check1) {
            app.modals.openModal(3);
            this.errors.question = '';
            this.errors.check1 = '';
        }
        
    }
    sendForm() {
        if (this.name === '') {
            this.errors.name = 'Введите ваше имя.';
        } else {
            this.errors.name = '';
        }
        if (this.phone === '') {
            this.errors.phone = 'Введите ваш телефон.';
        } else {
            this.errors.phone = '';
        }
        if (this.email === '') {
            this.errors.email = 'Введите ваш Email.';
        } else {
            this.errors.email = '';
        }
        if (!this.check2) {
            this.errors.check2 = 'Вы должны согласиться на обработку';
        } else {
            this.errors.check2 = '';
        }
        console.log({
            question: this.question,
            name: this.name,
            phone: this.phone,
            email: this.email,
            check1: this.check1,
            check2: this.check2,
        })

        if (this.name !== '' && this.phone !== '' && this.email !== '' && this.check2) {

            fetch(this.url, {
                method: 'POST',
                body: {
                    QUESTION: this.question,
                    FID: this.name,
                    PHONE: this.phone,
                    EMAIL: this.email,
                    PERS_DATA: this.check2,
                }
            }).then(response => response.json()).then(response => {
                console.log(response);
                if (response.id) {
                    app.modals.closeModal(3)
                    this.isSended = true;
                }
            })
        }
    }
    init() {
        console.log('form inited');
    }
}

export default MainForm;