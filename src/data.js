export default class Resource {

    constructor(url) {
        this.url = url;
        this.data = []
    }

    async load() {
        let response = await fetch(this.url);
        let result = await response.json();

        return result.data;
    }    
}

