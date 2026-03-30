let result = document.getElementById("result")
let temp = ''
function getNumber(data){
    let input = data.innerText

    if(input == '='){
        result.innerHTML = eval(temp).toFixed(5)
        temp =eval(temp).toFixed(5)
    }else{
        temp += input
    result.innerText = temp
    
    }
}

function clearForm(){
    result.innerText = 0
    temp =" "
}