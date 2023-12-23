var num = 0
var finalNum = 1
const row = document.getElementById("textRow")

function factorialF(){
    num = document.getElementById("input").value
    if(num < 0){
        row.textContent = "Cant find the factorial of a negative number"
    }else if(num == 0){
        row.textContent = "Factorial of number 0 = 1"
    }else{
        for(i = 1;i <= num;i++){
            finalNum = finalNum * i
        }
        row.textContent = `Factorial of number ${num} = ${finalNum}`
    }
}

