const MainForm = class MainForm {
    constructor() {
        this.question = "";
        this.name = "";
        this.phone = "";
        this.email = "";
        this.check1 = false;
        this.check2 = false;
        this.url = "http://gazprom-tech.01sh.ru/local/ajax/form1.php";
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
            var data = new FormData();
            data.append('QUESTION', this.question);
            data.append('FID', this.name);
            data.append('PHONE', this.phone);
            data.append('EMAIL', this.email);
            data.append('PERS_DATA', this.check2);
            let req = new Request(this.url, {
                method: 'POST',
                // mode: 'no-cors',
                // headers: {
                //     'Accept': 'application/json',
                //     'Content-Type': 'application/json'
                // },
                body: data
            })
            fetch(req).then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Bad HTTP!'); 
                }
            }).then(response => {
                console.log(response);
                if (response.id) {
                    app.modals.closeModal(3)
                    this.isSended = true;
                }
            }).catch(error => {
                console.log(error.message);
            })
        }
    }
    init() {
        console.log('form inited');
    }
}

export default MainForm;