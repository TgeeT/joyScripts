class Que {
  constructor() {
    this.items = [];
  }

  enque = element => this.items.push(element);

  deque = () => this.items.shift();

  peek = () => this.items[0];

  size = () => this.items.length;
}

class PriorityQue extends Que{
    constructor() {
        super();
    }

    enque = (element) => {
        if(this.size === 0) {
            this.items.push(element)
        }
        this.items.every((item, index, arr) => {
            if (element > item) {
                this.items = this.items.splice(index, 0, element);
                return
            } else if(element === item) {
                this.push(element);
                return;
            }
        })
        console.log('this.items', this.items)
    }

    prioritized = (request, current) => {
        request > current ? true : false
    }
}

const policeRequests = new PriorityQue();

policeRequests.enque(1);
policeRequests.enque(4);
policeRequests.enque(7);
policeRequests.enque(10);


console.log('policeRequests', policeRequests)

