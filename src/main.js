import Resource from './data.js';
import Game from './game.js';

const resource = new Resource('https://iverb.huckbit.com/api/all');
const game = new Game();

async function app() {
    const data = await resource.load();

    console.log(data);
    // parse data, load to game
    if (data.length) {
        game.setData(data);
        game.start();
    }
}

app();