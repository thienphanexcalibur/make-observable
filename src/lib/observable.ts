import { IProducer, IObserver, ISubscription } from "../types";
class Observable {
  subscribers: Partial<IObserver>[] = [];

  constructor(producer: IProducer | null) {
    this.producer = producer;
  }

  subscribe(observer: Partial<IObserver>): ISubscription {
    const newLength = this.subscribers.push(observer);
    this.producer(observer);
    return ({
      unsubscribe() {
        this.subcribers = this.subscribers.splice(newLength - 1, 1);
      }
    });
  }

  producer(observer: Partial<IObserver>): ISubscription {
    observer.next();
    return ({
      unsubscribe() {

      }
    });
  }
}

export {
  Observable
}

