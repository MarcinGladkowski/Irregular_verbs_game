export default class Game {

    setData(data) {
        this.data = data;
    }

    start() {
        this.addClickListenerOnPlay()
        this.loadQuestion();
    }

    loadQuestion() {
        const verb = this.data[this.randomInt()]

        if (verb) {
            let { infinitive, past, pastParticiple } = verb;
            this.getInfinitiveElement().value = infinitive;
            this.getPastElement().value = past;
            this.getPastParticipleElement().value = pastParticiple;
        }
    }

    randomInt() {
        return 0 + Math.floor((this.data.length - 0) * Math.random());
    }

    addClickListenerOnPlay() {
        this.getPlayElement().addEventListener("click", () => {
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