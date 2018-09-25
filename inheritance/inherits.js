Function.prototype.inherits = function(Parent) {
  
  // let surrogate = function Surrogate(){};
  function Surrogate(){}
  Surrogate.prototype = Parent.prototype;
  // console.log("Surrogate.prototype", Surrogate.prototype);
  this.prototype = new Surrogate();
  // console.log("this.prototype", this.prototype);
  this.prototype.constructor = this;  
  // console.log("this.prototype.constructor2:", this.prototype.constructor);
};

Function.prototype.inheritsCreate = function (Parent) {
  this.prototype = Object.create(Parent.prototype);
  this.prototype.constructor = this;
};


function MovingObject () {
  this.x = 0;
  this.y = 0;
}
  
MovingObject.prototype.move = function (dx, dy) {
  this.x += dx;
  this.y += dy;
};


function Asteroid (weight){
    MovingObject.call(this);
    console.log("x", this.x);
    console.log("y", this.y);
    
    this.weight = weight;
    console.log("weight", this.weight);
  }
Asteroid.inheritsCreate(MovingObject);
let asteroid = new Asteroid(100);
asteroid.move(1,1);
console.log("moved asteroid", asteroid.x);


function Ship(name, speed) {
    MovingObject.call(this);
    console.log("this", this);
    console.log("x", this.x);
    console.log("y", this.y);
    this.speed = speed;
    console.log("speed: ",speed);
    this.name = name;
  }
  
  Ship.prototype.fire = function () {
    console.log(`${this.name} fires laser. pew pew.`);
  };

Ship.inheritsCreate(MovingObject);
let battlecruiser_ship = new Ship("battlecruiser", "1x lightspeed" );
console.log("ship", battlecruiser_ship.x);
// battlecruiser_ship.fire();





// function Asteroid () {}
// Asteroid.inherits(MovingObject);
// 
// let asteroid = new Asteroid();
// console.log(asteroid);
// console.log(asteroid.x);
// console.log(asteroid.y);
// console.log(asteroid.constructor);

// 
