import { fromEvent } from 'rxjs';

/**
 * Eventos del DOM
 */
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: val => console.log('next', val)
}

// src1$.subscribe(observer);
src1$.subscribe(evento => {
    console.log(evento.x);
    console.log(evento.y);
});

src2$.subscribe(evento => {
    console.log(evento.key);
});
