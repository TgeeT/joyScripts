//----------STACK----------//

class Stack {
  constructor() {
    this.items = [];
  }

  push = element => this.items.push(element);

  pop = () => this.items.pop();

  peek = () => this.items[this.items.length - 1];

  size = () => this.items.length;

  isEmpty = () => this.items.length === 0;

  clear = () => (this.items.length = 0);
}

const doOperation = (lhs, rhs, op) => {
  switch (op) {
    case '+':
      return lhs + rhs;
    case '-':
      return lhs - rhs;
    case '/':
      return lhs / rhs;
    case '*':
      return lhs * rhs;
    case '%':
      return lhs % rhs;
    default:
      break;
  }
};

const postCalc = input => {
  inputs = input.split(' ');
  let leftOp, rightOp;
  const calcStack = new Stack();
  inputs.forEach(element => {
    if (!isNaN(element)) {
      calcStack.push(+element);
    } else if (isNaN(element)) {
      rightOp = calcStack.pop();
      leftOp = calcStack.pop();
      calcStack.push(doOperation(leftOp, rightOp, element));
    }
  });
  return calcStack.pop();
};

const input = '4 2 3 5 1 - + * +';

console.log('postCalc(input)', postCalc(input))
