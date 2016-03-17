'use strict';

const Rx = require('rx');
const data = require('./testData/onlyDibs');
const ticker = require('./ticker');

(() => {
    const eventEmitter = ticker({ data });
    const source = Rx.Observable.fromEvent(eventEmitter, 'newPrice');

    const subscription = source.subscribe(
        price => {
            console.log(price);
            if (price.price > 68) {
                console.log('LIMIT REACHED!');
                subscription.dispose();
            }
        },
        () => console.log('error'),
        () => console.log('complete')
    );
})();
