// switches = statement that examines a value
//            for a match against many case clauses.
//            More efficient than many "else if" statements

let grade = 95;

switch(true){
  case grade >= 90:
    console.log("You got an A.");
    break;
  case grade >= 80:
    console.log("You got a B.");
    break;
  case grade >= 70:
    console.log("You got a C. This is borderline to failing!");
    break;
  case grade >= 60:
    console.log("You got a D. You are now failing!");
    break;
  case grade >= 50:
    console.log("You got a F. You are failing and in the danger zone!");
  default:
    console.log("NA");
};