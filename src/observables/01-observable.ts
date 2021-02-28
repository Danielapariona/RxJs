import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente', value),
    error: error => console.warn('error [obs]', error),
    complete: () => console.log('Completado [obs]')
}

const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // Error
    /* const a = undefined;
    a.nombre = 'Daniela'; */

    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');
});

obs$.subscribe(observer);
/* obs$.subscribe(
    valor => console.log('next', valor),
    error => console.warn('error', error),
    () => console.info('completado')
);
 */