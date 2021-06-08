interface Observer {
    update: (data: any) => void
}
interface Subject {
    subscribe: (observer: Observer) => void
    unsubscribe: (observer: Observer) => void
}

class Subscription implements Subject {
    observers: Observer[] = []

    constructor(el: HTMLElement, event: string){
        el.addEventListener(event, () => {
            if (event === 'click') {
                this.notify(this, true);
            }
        })
    }

    subscribe(observer: Observer){
        this.observers.push(observer);
    }
    unsubscribe(observer: Observer){
        const index = this.observers.findIndex(obj => {
            return obj === observer;
        });
        this.observers.splice(index, 1);
    }
    notify(data: any, activeClick?: boolean){
        if(activeClick === true){
            this.observers.forEach(observer => observer.update(data))
        }
    }
}

export class CountSubscriptions implements Observer {
    private el: HTMLElement;
    private btnEl: HTMLElement;
    private run: boolean = false;
    countNumber: number = 0;

    constructor(){
        this.el = document.querySelector('.subscribed-count');
        this.btnEl = document.querySelector('.subscribed-btn');
    }
    update(data: any){
        this.run = !this.run;

        if(this.run){
            const instanceCount = this.sumCount();
            const stringCount: string = instanceCount().toString();
            this.el.innerHTML = stringCount;
            data.subscribe(this);
            this.btnEl.innerText = 'Cancel Subscription';
        }
        else {
            const responseCancel: boolean = confirm('Are you sure of cancel your subscription ?')
            if (responseCancel) {
                const instanceCount = this.minusCount();
                const stringCount: string = instanceCount().toString();
                this.el.innerHTML = stringCount;
                data.unsubscribe(this);
                this.btnEl.innerText = 'Subscribe Me';
            }
        }
    }
    sumCount(){
        const addition: () => number = () => {
            this.countNumber = this.countNumber + 1;
            return this.countNumber;
        }
        return addition;
    }
    minusCount(){
        const minus: () => number = () => {
            this.countNumber = this.countNumber - 1;
            return this.countNumber;
        }
        return minus;
    }
}

export default Subscription;