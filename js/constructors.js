// constructor = a special method of a class,
//               accepts arguments and assigns properties

class Student{
  
  constructor(name, age, gpa){
    this.name = name;
    this.age = age;
    this.gpa = gpa;
  }

  study(){
    console.log(`${this.name} is studying`);
  }
}

const student1 = new Student("Thinh", 26, 3.5);
console.log(this.name);
console.log(this.age);
console.log(this.gpa);
student1.study();