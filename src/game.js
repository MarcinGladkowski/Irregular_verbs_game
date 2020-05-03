export default class Game {

    constructor(form) {
        this.actualQuestion = null;
        this.form = form;
    }

    setData(data) {
        this.data = data;
    }

    start() {
        this.addClickListenerOnPlay()
        this.loadQuestion();
    }

    loadQuestion() {
        this.actualQuestion = this.data[this.randomInt(this.data.length)]

        if (this.actualQuestion) {
            let { infinitive, past, pastParticiple } = this.actualQuestion;

            let toShow = this.randomInt(3);

            const formElements = [
                this.form.getInfinitiveElement(),
                this.form.getPastElement(),
                this.form.getPastParticipleElement()
            ]

            // hide some options
            this.form.getInfinitiveElement().value = infinitive;
            this.form.getPastElement().value = past;
            this.form.getPastParticipleElement().value = pastParticiple;

            formElements.forEach((element, index) => {
                if (index != toShow) {
                    element.value = '';
                }
            })
        }
    }

    randomInt(max) {
        return 0 + Math.floor((max - 0) * Math.random());
    }

    addClickListenerOnPlay() {

        this.form.getPlayElement().addEventListener("click", () => {

            // user answer
            const answer = {
                infinitive: this.form.getInfinitiveElement().value,
                past: this.form.getPastElement().value,
                pastParticiple: this.form.getPastParticipleElement().value
            }

            if (
                this.actualQuestion.infinitive !== answer.infinitive
                || this.actualQuestion.past !== answer.past
                || this.actualQuestion.pastParticiple !== answer.pastParticiple
            ) {
                // show error box
                // show erros on form
                throw 'Invalid answer!';        
            }

            // valid answers
            // return result
            this.loadQuestion()
        })
    }

    
}