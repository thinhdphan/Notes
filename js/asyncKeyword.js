// async = makes a function return a Promise

async function loadFile(){
  let fileLoaded = true;

  if(fileLoaded){
    return "File Loaded";
  }
  else {
    throw "File not loaded";
  }
};

loadFile().then(calue => console.log(value))
  .catch(error => console.log(error));