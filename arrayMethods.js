// ARRAY METHODS:
items = [
    {name: 'book', price: 100},
    {name: 'egg', price: 10},
    {name: 'fish', price: 200},
    {name: 'dish', price: 1200},
    {name: 'tea', price: 1000},
]

// 1. Filter - return an array filtering the items with the passed condition
const filteredItems = items.filter((item) => {
    return item.price <= 100;
})
console.log('========== Filtered Items ========');
console.log(filteredItems);

// 2. Map -  get a new array with what we want in it
const itemNames = items.map((item) => {
    return item.name;
})
console.log('========== Mapped Items name ========');
console.log(itemNames);

// 3. find - return the first item found passing the condition given
const foundItem = items.find((item) => {
    return item.name === 'fish'
})
console.log('========== Found Item ========');
console.log(foundItem);

// 4. Some - check if any item is passing the condition (return true/false)
const hasCheapPrice = items.some((item) => {
    return item.price <= 0;
})
console.log(`=> Find within some condition is::::: ${hasCheapPrice}`);

// 5. every - check if all the items are passing the condition (return true/false)
const noFreeGoods= items.every((item) => {
    return item.price >= 0;
})
console.log(`=> Find within every condition is::::: ${noFreeGoods}`);

// 6. forEach - help loop through each item in the array
console.log('+++++++++ for each start ++++++++');
items.forEach(item => {
    console.log(item);
});
console.log('+++++++++ for each end ++++++++');

// 7. reduce - Reduce the values of an array to a single value (from left-to-right)
const totalPrice = items.reduce((currentTotal, item) => {
    return currentTotal + item.price;
}, 0);
console.log(`=> Reduced total: ${totalPrice}`);

// 8. includes - check if the array includes the passed item returning true/false
items2 = [1, 2, 3, 4, 5]
const includesCheck = items2.includes(7);
console.log(`=> includes check ${includesCheck}`);

// Array comparison check against elements 
targetArr = [1,2,7]
const checker = (arr, target) => target.every(v => arr.includes(v));
const check = checker(items2, targetArr);

console.log(`=> checker ${check} <=`);
