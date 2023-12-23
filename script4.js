function count(){
    num = parseInt(document.getElementById("a").value, 10);
    num1 = parseInt(document.getElementById("b").value, 10);
    n1 = 0
    n2 = 0
    
    if(num < num1){
        n1 = num
        n2 = num1
    }else{
        n1 = num1
        n2 = num
    }

    g = 0
    
    for(i = n1; i <= n2; i++){
        g = g + i
    }
    
    document.getElementById("min").textContent = num
    document.getElementById("max").textContent = num1
    document.getElementById("E").textContent = g
    document.getElementById("eek").style.display = "flex"
}

