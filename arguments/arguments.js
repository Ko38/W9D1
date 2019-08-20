function sum() {
  let result = 0;
  for (let a of arguments) {
    result += a;
  }
  return result;
}

function sum1(...ops) {
  let result = 0;
  for (let a of ops) {
    result += a;
  }
  return result;
}

// console.log(sum1(1, 1, 2, 3, 4, 5));

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

 markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// Function.prototype.myBind = function(...args) {
//   return (...args2) => {
//     console.log(`${args[0].name} says ${args2[0]} to ${args2[1]}!`);
//   };
// };

// Function.prototype.myBind = function(...args) {
//   return () => {
//     console.log(`${args[0].name} says ${args[1]} to ${args[2]}!`);
//   };
// };

Function.prototype.myBind = function (...args) {
  return () => {
   // this.apply(args[0], [args[1], args[2]]);
    this.call(args[0], args[1],args[2]);

  };
};

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();

// Pavlov says meow to Kush!
// true

Function.prototype.myBind = function (dog) {
  return (...args) => {
    this.apply(dog, [args[0], args[1]]);
  };
};
// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

Function.prototype.myBind = function (...args) {
  return (...args2) => {
    this.apply(args[0], [args[1], args2[0]]);
  };
};
// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

Function.prototype.myBind = function (ctx) {
  return (...args) => {
    this.call(ctx, args[0], args[1]);
  };
};

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");

// Pavlov says meow to me!
// true