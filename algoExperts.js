//----------STACK----------//

class Stack {
    constructor() {
        this.items = [];
    }

    push = (element) => this.items.push(element);

    pop = () => this.items.pop();

    peek = () => this.items[this.items.length - 1];

    size = () => this.items.length;

    isEmpty = () => this.items.length === 0;

    clear = () => this.items.length = 0; 
};