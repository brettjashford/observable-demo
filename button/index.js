(() => {
    const button = document.getElementById('button');

    //const button = document.getElementById('button');
    //const handler = function (e) {
    //    alert('clicked');
    //    //button.removeEventListener('click', handler);
    //};
    //button.addEventListener('click', handler);


    //// collection of all event objects
    //const clicks = Rx.Observable.fromEvent(button, 'click');
    //clicks.forEach(e => {
    //    alert('clicked');
    //});

    //const clicks = Rx.Observable.fromEvent(button, 'click');
    //clicks.forEach(
    //    function onNext(e) {
    //        alert('clicked');
    //        throw 'error';
    //    },
    //    function onError(error) {
    //        console.log('error!');
    //    },
    //    function onCompleted() {
    //        console.log('done');
    //    }
    //);

    // TODO: error throwing not working correclty for some reason
    // TODO: subscribe vs foreach?
    //const clicks = Rx.Observable.fromEvent(button, 'click');
    //clicks.subscribe(
    //    function onNext(e) {
    //        alert('clicked');
    //        throw 'error';
    //    },
    //    function onError(error) {
    //        console.log('error!');
    //    },
    //    function onCompleted() {
    //        console.log('done');
    //    }
    //);

    const clicks = Rx.Observable.fromEvent(button, 'click');
    const subscription = clicks.subscribe(
        function onNext(e) {
            alert('clicked');
            subscription.dispose();
        },
        function onError(error) {
            console.log('error!');
        },
        function onCompleted() {
            console.log('done');
        }
    );
})();



