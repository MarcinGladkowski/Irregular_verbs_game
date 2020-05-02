import Resource from './data.js';

const resource = new Resource('https://iverb.huckbit.com/api/all');

async function app() {
    const data = await resource.load();

    console.log(data);
}

app();