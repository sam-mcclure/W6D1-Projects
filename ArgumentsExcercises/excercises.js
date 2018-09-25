function sum() {
  let result = 0;
  let args = Array.from(arguments);
  
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}

console.log("Sum1", sum(1,2,3));

function sumRest(...nums) {
  let result = 0;
  
  nums.forEach((num) => {
    result += num;
  });
  return result;
}

console.log("Sum2", sum(1,2,3));

Function.prototype.myBind = function (ctx) { // bind-time args
  return () => this.apply(ctx);
  //call-time args
};


Function.prototype.myBindArgs = function (ctx) {
  let bindArgs = Array.from(arguments).slice(1);
  console.log("arguments in bindArgs", arguments);
  let that = this;
  return function () {
      let callArgs = Array.from(arguments);
      console.log("arguments in callArgs", arguments);
      that.apply(ctx, bindArgs.concat(callArgs));
  };
};

Function.prototype.myBindArgsRocket = function (ctx) {
  let bindArgs = Array.from(arguments).slice(1);
  console.log("arguments in bindArgs", arguments);
  return () => {
    // retains context;
    // the arguments here is the same as the argument 
    // in bindArgs.
    
      let callArgs = Array.from(arguments);
      console.log("arguments in callArgs", arguments);
      this.apply(ctx, bindArgs.concat(callArgs));
  };
};

Function.prototype.myBindArgsRocket2 = function (ctx) {
  let bindArgs = Array.from(arguments).slice(1);
  console.log("arguments in bindArgs", arguments);
  return (...callArgs) => {
    // retains context;
    
      // let callArgs = Array.from(callArgs);
      console.log("arguments in callArgs", callArgs);
      this.apply(ctx, bindArgs.concat(callArgs));
  };
};



Function.prototype.myBindRest = function (ctx, ...bindArgs){
  return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
};

Function.prototype.myBindRestNoRocket = function (ctx, ...bindArgs){
  let that = this;
  return  function (...callArgs){
    that.apply(ctx, bindArgs.concat(callArgs));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

// console.log(markov.says.myBindRest(breakfast)("meow", "a tree"));
// 
// console.log(markov.says.myBindRestNoRocket(breakfast, "meow")("Markov"));

console.log(markov.says.myBindArgs(breakfast, "meow")("Markov"));
console.log(markov.says.myBindArgsRocket(breakfast, "meow")("Markov"));
console.log(markov.says.myBindArgsRocket2(breakfast, "meow")("Markov"));






