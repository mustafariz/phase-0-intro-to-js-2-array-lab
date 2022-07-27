
let cats =["Milo" ,"Otis","Garfield"];
console.log(cats);// Write your solution here!

function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}

function destructivelyPrependCat(name){
  cats.unshift(name);
  return cats;
}

function destructivelyRemoveLastCat(name){
  cats.pop();
  return cats;
}

function destructivelyRemoveFirstCat(name){
  cats.shift();
  return cats;
}
function appendCat(name){
  var name_1= [...cats,name];
  return name_1;
}

function prependCat(name){
  var name_2=[name, ...cats];
  return name_2
}

function removeFirstCat(name){
  var cats= cats.slice(1)
  return cats;
}



