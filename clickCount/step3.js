var observable = document.querySelector('.observable');
var observer = document.querySelector('.observerSingle');

var clickStream = Rx.Observable.fromEvent(observable, 'click');

var multiClickStream = clickStream
    .buffer(clickStream.throttle(250))
    .map(function(list) { return list.length; })
    .filter(function(numClicks) { return numClicks >= 2; });

multiClickStream.subscribe(function (numclicks) {
    observer.textContent = numclicks + 'x';
});

multiClickStream
    .throttle(1000)
    .subscribe(function () {
        observer.textContent = '';
    });



