console.clear();

//
//const promise = new Promise(resolve => {
//    setTimeout(() => {
//        console.log('promise timeout');
//        resolve(42)
//    }, 500);
//    console.log('promise started');
//});
//promise.then(x => console.log(x));
//
//
//// copy/paste
//const source = Rx.Observable.create(observer => {
//    setTimeout(() => {
//        console.log('observable timeout');
//        observer.onNext(42);
//    }, 500);
//    console.log('observable started');
//});
////source.forEach(x => console.log(x));




const promise = new Promise(resolve => {
    setTimeout(() => {
        console.log('promise timeout');
        resolve(42)
    }, 500);
    console.log('promise started');
});
promise.then(x => console.log(x));


// copy/paste
const source = Rx.Observable.create(observer => {
    var timeoutId = setTimeout(() => {
        console.log('observable timeout');
        observer.onNext(42);
    }, 500);
    console.log('observable started');

    // returns dispose function
    return () => {
        console.log('dispose called');
        clearTimeout(timeoutId);
    };
});
var disposable = source.forEach(x => console.log(x));

setTimeout(() => {
    disposable.dispose();
}, 500);
