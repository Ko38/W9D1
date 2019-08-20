Function.prototype.inherits = function(parent) {
  function Surrogate() {}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  //this.prototype.constructor = this;
};

function MovingObject(test) {this.test = test;}
MovingObject.prototype.say = function() {
  console.log("hello line 10");
};

function Ship(two) {
  this.two = two * 2;
}
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);

let moving = new MovingObject();
moving.say();

let ship = new Ship(5);
ship.say();

console.log(ship.two);

let asteroid = new Asteroid();
asteroid.say();