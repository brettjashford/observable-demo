var button = document.querySelector('button');
var output = document.querySelector('h2');

// stream of click events
var clickStream = Rx.Observable.fromEvent(button, 'click');

var bufferedClickCountStream = clickStream
    .buffer(function() { return clickStream.throttle(250); })
    .map(function(list) { return list.length; });

var multiClickStream = bufferedClickCountStream
    .filter(function(numClicks) { return numClicks >= 2; });

var singleClickStream = bufferedClickCountStream
    .filter(function(numClicks) { return numClicks === 1; });


multiClickStream.subscribe(function (numclicks) {
    output.textContent = numclicks + 'x click';
});

singleClickStream.subscribe(function (numclicks) {
    output.textContent = 'click';
});


multiClickStream
    .throttle(1000)
    .subscribe(function () {
        output.textContent = '';
    });



