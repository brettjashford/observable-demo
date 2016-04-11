var button = document.querySelector('button');
var output = document.querySelector('h2');

// stream of click events
var clickStream = Rx.Observable.fromEvent(button, 'click');

var multiClickStream = clickStream
    .buffer(function() { return clickStream.throttle(250); })
    .map(function(list) { return list.length; })
    .filter(function(numClicks) { return numClicks >= 2; });

multiClickStream.subscribe(function (numclicks) {
    output.textContent = numclicks + 'x click';
});

multiClickStream
    .throttle(1000)
    .subscribe(function () {
        output.textContent = '';
    });



