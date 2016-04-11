var button = document.querySelector('button');
var output = document.querySelector('h2');

// stream of click events
var clickStream = Rx.Observable.fromEvent(button, 'click');

clickStream.subscribe(function (event) {
    output.textContent = 'click';
});

clickStream
    .throttle(1000)
    .subscribe(function (event) {
        output.textContent = '';
    });



