export default class Game {

    setData(data) {
        this.data = data;
    }

    start() {
        this.addClickListenerOnPlay()
        this.loadQuestion();
    }

    loadQuestion() {
        // get random data
        const verb = this.data[this.randomInt()]

        if (verb) {
            // random form
            let infinitive = this.getInfinitiveElement().value = verb.infinitive;
            let past = this.getPastElement().value = verb.past;
            let pastParticiple = this.getPastParticipleElement().value = verb.pastParticiple;
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