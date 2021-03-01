import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>(subs => {
    const intervalId = setInterval(() =>
        subs.next(Math.random()), 1000
    );

    return () => { // Se llama cuando se realiza el unsuscribe() de la suscripcion
        clearInterval(intervalId);
        console.log('intervalo destruido')
    };
});


/**
 * 1. Casteo multiple: Muchas suscripciones van a estar sujetas a este mismo subject y sirve para distrubir la misma información a todos los lugares que estén suscritos.
 * 2. Tambien es un Observer
 * 3. Next(), error, complete
 */
const subject$ = new Subject();
let intervalSubject = intervalo$.subscribe(subject$);


// const subs1 = intervalo$.subscribe((rnd) => console.log('subs1', rnd));
// const subs2 = intervalo$.subscribe((rnd) => console.log('subs2', rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10); // Subject: Permite ingresar un datos al flujo de datos que es esta emitiendo el observable.
    subject$.complete();
    intervalSubject.unsubscribe();
}, 3500);

