const MainForm2 = class MainForm2 {
    constructor() {
        this.name = "";
        this.phone = "";
        this.email = "";
        this.check2 = false;
        this.url = "/local/ajax/form.php";
        this.errors = {
            name: '',
            phone: '',
            email: '',
            check2: ''
        }
        this.isSended = false
    }
    mask() {
        const prefixNumber = (str) => {
            if (str === "7") {
              return "7 (";
            }
            if (str === "8") {
              return "8 (";
            }
            if (str === "9") {
              return "7 (9";
            }
            return "7 (";
        };
        const value = this.phone.replace(/\D+/g, "");
        const numberLength = 11;

        let result;
        if (this.phone.includes("+8") || this.phone[0] === "8") {
            result = "";
        } else {
            result = "+";
        }

        //
        for (let i = 0; i < value.length && i < numberLength; i++) {
            switch (i) {
            case 0:
                result += prefixNumber(value[i]);
                continue;
            case 4:
                result += ") ";
                break;
            case 7:
                result += "-";
                break;
            case 9:
                result += "-";
                break;
            default:
                break;
            }
            result += value[i];
        }
        //
        this.phone = result;
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

        if (this.name !== '' && this.phone !== '' && this.email !== '' && this.check2) {
            var data = new FormData();
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
                if (response.success) {
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

export default MainForm2;