function greeting( name = "default name"){
    console.log("my name is" + name); 
}
greeting('peter lwin')

function sum(num1 = 0,num2 = 0){
    console.log(` ${num1} + ${num2} = ${num1+num2}`);
    
}
sum(200 , 400)
sum( )

// other way
let peter = function(){
    console.log('this is peter');
}
peter();

//es6 arrow function

let TinNwe = (age = 0)=>{
    console.log(`this is thin nwe age is ${age}`);
    
}
TinNwe(23)

function rain(number1,number2) {
   let result = number1 * number2
  return result;
    
}
console.log(rain(4,8));


let Alice = (age)=>'this is my age is ' + age

console.log(Alice(23));
