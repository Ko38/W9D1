function curriedSum(numArgs){
  let numbers = [];
  let _curriedSum = function(n) {
    numbers.push(n);
    if (numbers.length === numArgs) {
      return numbers.reduce((a, b) => a + b,11);
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
}

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56
// console.log(sum(5)(30));