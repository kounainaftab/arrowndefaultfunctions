/*Definition of a function:
A function is like a recipe. It's a set of instructions that you can reuse to do a specific task,
like baking a cake.You give it some ingredients (inputs),it does something with them (processes),
and then gives you back the finished cake (output).
 Functions make it easier to do tasks by breaking them into smaller,reusable steps.*/
// We use functions to organize our code
// "Syntax"
//function name = (parameters){}
//------------------------------------------------------------------------------------------
/*function greet(){
    console.log("hello")
}
greet()

//------------------------------------------------------------------------------------------
/*function myName(){
  return "Konain"
}
let result=myName()
console.log(result)

//----------------------------------------------------------------------------------------
/*function add(x:number,y:number){  //---------> parameters()
    return x+y
                            //code will not run after return
}
let result=add(4,3) // ----------------> arguments(
    console.log(result)
/*function calculateArea(a:number,b:number){
    return a * b               //length*width
}
console.log(calculateArea(4,2));
console.log(calculateArea(6,7));
console.log(calculateArea(2,3));
console.log(calculateArea(6,6));
console.log(calculateArea(4,7));


//-------------------------------------------------------------------------------------------------
/* Arrow Function  // Shortcut => Functions
Arrow function is the compact way of writing functions*/
///////  Syntax  ///////
//let name()=>{} //
//---------------------------------------------------------------------------------------------------
//let greet=()=>{
//   console.log("hello")
//{
//greet()
//--------------------------------------------------------------------------------------------------------
//let subtract=(a:number,b:number)=>{
//  return a-b
//}
//console.log(subtract(8,3));
//===========================================================================================================
///                                     Default Parameters      //built-in settings
function greet(message) {
    return message;
}
var result = greet("hello world");
console.log(result);
