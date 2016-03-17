'use strict';

const filter = require('lodash.filter');
const EventEmitter = require('events');

module.exports = opts => {
    const options = Object.assign({}, {
        data: {},
        interval: 100
    }, opts || {});

    console.log('starting ticker');
    let time = 0;
    const emitter = new EventEmitter();

    setInterval(() => {
        console.log(time);
        const prices = filter(options.data, { time });
        if (prices.length) {
            prices.forEach(price => {
                emitter.emit('newPrice', price)
            });
        }
        time++;
    }, options.interval);

    return emitter;
};
