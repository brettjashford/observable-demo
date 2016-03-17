'use strict';

const Rx = require('rx');
const data = require('./stockData');
const ticker = require('./ticker');

(() => {
    const eventEmitter = ticker({ data });
    const source = Rx.Observable.fromEvent(eventEmitter, 'newPrice');

    const subscription = source.subscribe(
        price => console.log(price),
        () => console.log('error'),
        () => console.log('complete')
    );
})();
