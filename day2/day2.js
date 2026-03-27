
// let letter = 't';

// switch(letter){
//     case 'a': console.log("vowel");break;
//     case 'e': console.log("vowel");break;
//     case 'i': console.log("vowel");break;
//     case 'o': console.log("vowel");break;
//     case 'u': console.log("vowel");break;
//     default:console.log("other letter");
    
    
// }

// let brands = ['toyota','bmw','hodafit','crow']

// for (i = 0; i<brands.length; i++){

//     console.log(brands[i]);
    
// }

let number = prompt("Enter number..")
let times = prompt("Enter times...")
// console.log(number);
// console.log(times);



if(number!='' && times!= '') {
        for (i = 1 ; i<=times ; i++) {
        document.write(`${number} x ${i} = ${number*i} <br>`);
}

}else{
    document.write("try again..")
}
