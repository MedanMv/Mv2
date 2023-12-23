

document.addEventListener('DOMContentLoaded', function() {
    const row = document.getElementById("textRow")
    const outRow1 = document.getElementById("outRow1")
    const outRow2 = document.getElementById("outRow2")
    const outRow3 = document.getElementById("outRow3")
    
    barrier1 = Math.floor(Math.random() * 90 + 10)
    barrier2 = Math.floor(Math.random() * 90 + 10)
    
    var min,max
    
    if(barrier1 < barrier2){
        min = barrier1
        max = barrier2
    }else if(barrier1 > barrier2){
        min = barrier2
        max = barrier1
    }
    
    
    num1 = Math.floor(min + Math.random() * (max+1 - min))
    num2 = Math.floor(min + Math.random() * (max+1 - min))
    num3 = Math.floor(min + Math.random() * (max+1 - min))
    
    row.textContent = `In the range between ${min} and ${max} generated numbers are:`
    outRow1.textContent = `Number 1 = ${num1}`
    outRow2.textContent = `Number 2 = ${num2}`
    outRow3.textContent = `Number 3 = ${num3}`
});