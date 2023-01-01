export class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }

        return this;
    }

    emit(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].forEach((cb) => cb.apply(this, args));
        }
        return this;
    }
}
