// This = reference to a particular object
//    the object depends on the immediate context

const car1 = {
  model: "Honda Civic",
  color: "Gray",
  year: 2017,

  drive : function(){
    console.log(`You are driving a ${this.model}`);
  },

  brake : function(){
    console.log(`You are braking`);
  }
}

const car2 = {
  model: "Corolla",
  color: "White",
  year: 2023,

  drive : function(){
    console.log(`You are driving a ${this.model}`);
  },
  
  brake : function(){
    console.log(`You are braking`);
  }
}


this.name = "Window";
console.log(this.name);