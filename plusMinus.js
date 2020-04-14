function PlusMinus(num) {
  let arr = num.toString().split('').map((num) => parseInt(num));
  let possibilities = [];

  const traverse = ([d, ...rest], combination, sum) => {
    if (rest.length === 0) {
      if (sum + d === 0) possibilities.push(combination + '+');
      if (sum -  d === 0) possibilities.push(combination + '-');
    } else {
      traverse(rest, combination + '+', sum + d);
      traverse(rest, combination + '-', sum - d);
    }
  };
  const maxMinuses = (combinations) => {
    return combinations.reduce((acc, curr) =>
      [...acc].filter((c) => c === '-').length >
      [...curr].filter((c) => c === '-').length
        ? acc
        : curr
    );
  };
  traverse(arr.slice(1), '', arr[0]);
  return possibilities.length ? maxMinuses(possibilities) : 'not possible';
}

// keep this function call here
console.log(PlusMinus(26712));

