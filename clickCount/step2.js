var observable = document.querySelector('.observable');
var observer = document.querySelector('.observerSingle');

var clickStream = Rx.Observable.fromEvent(observable, 'click');

clickStream.subscribe(function (event) {
    observer.textContent = 'click';
});

clickStream
    .throttle(1000)
    .subscribe(function (event) {
        observer.textContent = '';
    });



