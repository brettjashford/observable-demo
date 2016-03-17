'use strict'

const fs = require('fs');

const params = {
    maxTime: 200,
    minInterval: 15,
    outputFile: '4Stocks.json',
    stocks: {
        DIBS: {
            minPrice: 50,
            maxPrice: 75
        },
        MSFT: {
            minPrice: 70,
            maxPrice: 95
        },
        GOOG: {
            minPrice: 600,
            maxPrice: 640
        },
        AAPL: {
            minPrice: 105,
            maxPrice: 120
        }
    }
};
const randomInt = (low, high) => Math.floor(Math.random() * (high - low) + low);

(() => {
    const data = [];
    console.log('generating data for: ', Object.keys(params.stocks));

    // loop through each symbol
    for (let symbol in params.stocks) {
        if (!params.stocks.hasOwnProperty(symbol)) {
            continue;
        }

        // generate stock data for the symbol's timeline
        let time = 0;
        let stockParams = params.stocks[symbol];
        for(let i=time; i<params.maxTime; i++) {
            time = randomInt(time + 1, time + params.minInterval);
            if (time > params.maxTime) {
                continue;
            }
            data.push({
                price: randomInt(stockParams.minPrice, stockParams.maxPrice),
                symbol,
                time
            });
        }
    }

    console.log(data);
    console.log('generation complete');
    console.log('writing to: ', params.outputFile);
    fs.writeFileSync(`./testData/${params.outputFile}`, JSON.stringify(data, null, 2));
})();
