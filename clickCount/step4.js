var observable = document.querySelector('.observable');
var observerSingle = document.querySelector('.observerSingle');
var observerMultiple = document.querySelector('.observerMultiple');


// observables
var clickStream = Rx.Observable.fromEvent(observable, 'click');

var bufferedClickCountStream = clickStream
    .buffer(clickStream.throttle(250))
    .map(function(list) { return list.length; });

var singleClickStream = bufferedClickCountStream
    .filter(function(numClicks) { return numClicks === 1; });

var multiClickStream = bufferedClickCountStream
    .filter(function(numClicks) { return numClicks >= 2; });


// observers
singleClickStream.subscribe(function () {
    observerSingle.textContent = 'click';
});

multiClickStream.subscribe(function (numclicks) {
    observerMultiple.textContent = numclicks + 'x';
});






// clearing
singleClickStream
    .throttle(1000)
    .subscribe(function () {
        observerSingle.textContent = '';
    });
multiClickStream
    .throttle(1000)
    .subscribe(function () {
        observerMultiple.textContent = '';
    });



