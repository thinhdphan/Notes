// static = belongs to a class, not the objects
//          properties: useful for caches, fixed-configuration
//          methods: useful for utility functions


// keeping track of cars maded
class Car {

 static numberOfCars = 0;
  
  constructor(model){
    this.model = model;
    Car.numberOfCars += 1;
  }

  static startRace({
    console.log("3...2...1...GO!");
  })
}
const car1 = new Car("honda");
const car2 = new Car("toyota");
const car3 = new Car("audi");

console.log(Car.numberOfCars);
Car.startRace();