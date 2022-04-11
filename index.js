// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// destructivelyAppendCat
function destructivelyAppendCat (name){
  cats.push(name);
}

destructivelyAppendCat('Ralph');
console.log(cats);

// destructivelyPrependCat
function destructivelyPrependCat (name){
    cats.unshift(name);
}

destructivelyPrependCat("Bob");
console.log(cats);

// destructivelyRemoveLastCat
function destructivelyRemoveLastCat(){
    cats.pop()
}
destructivelyRemoveLastCat();
console.log(cats);

// destructivelyRemoveFirstCat
function destructivelyRemoveFirstCat(){
    cats.shift();
}
destructivelyRemoveFirstCat();
console.log(cats);

 // appendCat
       function appendCat (name){
         return [...cats, name];
    }
    
    appendCat ("Broom");
    console.log(appendCat ("Broom"));

 // prependCat
         function prependCat (name){
          return [name, ...cats];
   }
   prependCat ("Arnold");
    console.log(prependCat ("Arnold"));

// removeLastCat
    function removeLastCat (){
        return cats.slice(0,2);
 }

 console.log( removeLastCat ());

//  removeFirstCat
function removeFirstCat (){
    return cats.slice(1);
}
console.log( removeFirstCat ());