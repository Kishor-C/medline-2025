import {Observable, map, filter, catchError, Subject} from 'rxjs';
let numbers = [10, 20, 5, 8, 18, 50, 20, 25, 30]
// creating an hardcoded Observables that can emit any kind of value
// the parameter is a function that is called only when observable is subscribed
let myObs = new Observable(obs => {
   numbers.forEach(x => obs.next(x))
}).pipe(
    map(x => x * 2), filter(x => x > 50)
);
// subscribe(observer) observer is object = { next, error, complete}
myObs.subscribe(
    {
        next : (value) => console.log('next1 ', value),
        error : (err) => console.log('error1: ', err),
        complete : () => console.log('completed1')
    }
);
//subject : share the same data to the mulitple subscribers
let liveFeeds = new Subject();
liveFeeds.subscribe({next: (value)=>{console.log('Subscriber1: ', value)}})
liveFeeds.next('hello everyone');
liveFeeds.subscribe({next: (value)=>{console.log('Subscriber2: ', value)}})
liveFeeds.next('hello everyone2');