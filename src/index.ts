import { Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('siguiente', value),
    error: error => console.warn('error [obs]', error),
    complete: () => console.log('Completado [obs]')
}