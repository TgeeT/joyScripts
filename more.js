const numbers = [1, 3, 4, 5];

const testObj = {}


const reducecb = (acc, val, index, source) => {
    console.log('acc', acc);
    console.log('val', val);
    console.log('index', index)
    console.log('source', source)
    console.log('-------------------');
}

const ans = numbers.reduce(reducecb)

console.log(ans)
