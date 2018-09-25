function curriedSum(numArgs){
  const numbers = [];
  console.log("numArgs", numArgs);
  
  return function _curriedSum(num){
      numbers.push(num);
      console.log("num", num);
      console.log("numbers", numbers);
      if(numbers.length === numArgs){
        let result = 0;
        numbers.forEach(num => { //rmbr the paranthesis
          result += num;
        });
        console.log("result", result);
        return result;
      } else {
        console.log(_curriedSum);
        return _curriedSum;
      }
  };
} 

let sum = curriedSum(4);
console.log("sum", sum);
console.log(sum(5)(30)(20)(1));

Function.prototype.curry = function (numArgs) {
  const numberOfArgs = [];
  const that = this;
  return function _curry(arg) {
    numberOfArgs.push(arg);
    if (numberOfArgs.length === numArgs) {
      // return this.apply(this, numberOfArgs);
      return that.apply(that, numberOfArgs);
      // return that(...numberOfArgs); // What's the difference with line 29? 
    } else {
      debugger;
      return _curry;
    }
  };
};

function mySum(num1, num2) {
  return num1 + num2;
}

let sum2 = mySum.curry(2);
console.log("sum2", sum2);
console.log(sum2(1));

// console.log(mySum.curry(2)(1)(2));

