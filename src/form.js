export default class Form {
    constructor(selector) {
        this.form = document.querySelector(selector)
    }

    getInfinitiveElement() {
        return this.form.querySelector('.infinitive');
    }

    getPastElement() {
        return this.form.querySelector('.past');
    }

    getPastParticipleElement() {
        return this.form.querySelector('.past-participle');
    }

    getPlayElement() {
        return this.form.querySelector('.play');
    }
}