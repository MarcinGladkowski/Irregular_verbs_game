import Resource from './data.js';
import Game from './game.js';
import Form from './form.js';

const resource = new Resource('https://iverb.huckbit.com/api/all');
const game = new Game(
    new Form('.game')
);

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