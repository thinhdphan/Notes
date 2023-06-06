// for loop = repeat some code a certain amount of times

for(let i =1; i <= 10; i+=1){
  console.log(i);

}

// break = breaks out of a loop entirely
// continue = skip an iteration of a loop

// stop at 3
for(let i =1; i <= 10; i+=1){
  if (i == 3){
    break;
  }
}

//skips 3 and continues
for(let i =1; i <= 10; i+=1){
  if (i == 3){
    continue;
  }
}