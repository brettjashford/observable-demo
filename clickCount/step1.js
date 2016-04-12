var observable = document.querySelector('.observable');
var observer = document.querySelector('.observerSingle');

// observable (stream) of click events
var clickStream = Rx.Observable.fromEvent(observable, 'click');

// observable
clickStream.subscribe(function (event) {
    observer.textContent = observer.textContent + ' click';
});
