function receivesAFunction(callback){
    let c = "something else"
    callback(c)
}
function returnsANamedFunction(){
   
 let myFunction = function returnsANamedFunction() {
    
}
return myFunction
}

// function returnsAnAnonymousFunction(){
//   let newFunctioni = function(){
//    } 
//    return newFunctioni
  
// }

let   returnsAnAnonymousFunction = function() {
    return function() {  // The function returns when you call it
        return "something"}
}