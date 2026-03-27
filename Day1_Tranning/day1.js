
// let name = prompt("Enter first number...")

// let times  = prompt("Enter times...")

//2 X 1 =---------10

// if (number != '' && times != '') {

// for (i = 1 ;i <= times ;i++){
//     document.write(`${number}x${i} = ${number*i}<br>`);   
// }
// }else{
//     document.write("you must all fill both number and times!!Try again...")
// }

function user(name){
    console.log(`this is my love ${name}`);
    
}
user("Peter");


function sum(num1 = 0, num2 = 0) {
    console.log(`${num1} + ${num2} = ${num1+num2}`);
    
}

let peter = function(age = 0) {
    console.log(`this is peter village ${age}`);
    
}

let phone = (type = 0) =>{
    console.log(`this is my phone color I like ${type}`);
    
}
phone("redmi")
peter(24)
sum(400,782)
sum()

let call = (message) =>{
    return 'hello morning...' + message
}

console.log( call('good night peter'));

let arrReturn = () => {
    return ['apple','orange','avocado','orin']
}

let objReturn = () => {
    return {name:'book',age:23,name:'mouse',id:6}
}

console.log( arrReturn() );
console.log( objReturn() );


let fruite = 'mango'

if(fruite == 'apple'){
    console.log('this is my like fruite');
    
}else{
    console.log('this is other fruiter');
    
}
console.log('the end');

let number = 21;

result = (number%2== 0)? "even" : "odd";

console.log(result);


let brands = ['bmw','toyota','hoderfit','crow','lcuxs']

// console.log(brands);
// console.log(brands.length);

for (i= 0; i<brands.length;i++){
    console.log(brands[i]);
    
}

brands.forEach(item => {
    console.log(item);
    
})

let numbers = prompt('enter your number...')
let time = prompt('enter your time...')

if(numbers !='' && time !='' ){
    for( i = 1 ; i<=time; i++){
    
    document.write(`${numbers} x ${i} =  ${numbers * i} <br>`)
}


}else{
    document.write('You must fill both number and time! try again.')
}


