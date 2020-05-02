export default class Game {

    constructor() {
        this.actualQuestion = null;
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
                this.getInfinitiveElement(),
                this.getPastElement(),
                this.getPastParticipleElement()
            ]

            // hide some options
            this.getInfinitiveElement().value = infinitive;
            this.getPastElement().value = past;
            this.getPastParticipleElement().value = pastParticiple;

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
        this.getPlayElement().addEventListener("click", () => {

            // user answer
            const answer = {
                infinitive: this.getInfinitiveElement().value,
                past: this.getPastElement().value,
                pastParticiple: this.getPastParticipleElement().value
            }

            if (
                this.actualQuestion.infinitive !== answer.infinitive
                || this.actualQuestion.past !== answer.past
                || this.actualQuestion.pastParticiple !== answer.pastParticiple
            ) {
                // show error box
                throw 'Invalid answer!';        
            }



            // valid answers
            // return result
            this.loadQuestion()
        })
    }

    getInfinitiveElement() {
        return document.querySelector('.infinitive');
    }

    getPastElement() {
        return document.querySelector('.past');
    }

    getPastParticipleElement() {
        return document.querySelector('.past-participle');
    }

    getPlayElement() {
        return document.querySelector('.play');
    }
}