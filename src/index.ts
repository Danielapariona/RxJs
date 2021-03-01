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

    return () => clearInterval(intervalId);
});


/**
 * 1. Casteo multiple: Muchas suscripciones van a estar sujetas a este mismo subject y sirve para distrubir la misma información a todos los lugares que estén suscritos.
 * 2. Tambien es un Observer
 * 3. Next(), error, complete
 */
const subject$ = new Subject();
intervalo$.subscribe(subject$);


// const subs1 = intervalo$.subscribe((rnd) => console.log('subs1', rnd));
// const subs2 = intervalo$.subscribe((rnd) => console.log('subs2', rnd));

const subs1 = subject$.subscribe((rnd) => console.log('subs1', rnd));
const subs2 = subject$.subscribe((rnd) => console.log('subs2', rnd));

setTimeout(() => {
    subject$.next(10); // Permite ingresar un datos al flujo de datos que es esta emitiendo el observable.
    subject$.complete();
}, 3500);

