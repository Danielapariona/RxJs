import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete')
}

const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);


const interval$ = interval(1000);
// const timer$ = timer(2000, 1000);  // inicia en 2 segundos y emite cada segundo
const timer$ = timer(hoyEn5); // Recibe fechas, se puede programar cuando se desea que inicie/

console.log('inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');