import { IObserver } from '../types';
import { Observable } from './observable';
export const fromEvent = (target: HTMLElement, event: keyof HTMLElementEventMap) => {
  const observable = new Observable((observer) => observer.next('a'));
    target.addEventListener(event, () => {
      observable.subscribers.forEach((observer: Partial<IObserver>) => observer.next());
    });
  return observable;
};
