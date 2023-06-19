// super = Refers to the parent class.
//      Commonly used to invoke constructor of a parent class
//      helps with code reuseablility

class Animal {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

}

class Rabbit extends Animal{
  constructor(name, age, runSpeed){
    super(name, age);
    this.runSpeed = runSpeed;
  }
}

class Fish extends Animal{
  constructor(name, age, swimSpeed){
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
}

class Hawk extends Animal{
  constructor(name, age, flySpeed){
    super(name, age);
    this.flySpeed = flySpeed;
  }
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 50);
const hawk = new Hawk("hawk", 5, 70);