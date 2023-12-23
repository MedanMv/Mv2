

function count(){
    var a = document.getElementById("a").value
    var b = document.getElementById("b").value
    var c = document.getElementById("c").value
    let ans = ""
    let D = (b*b)-(4*a*c)
    
    document.getElementById("varA").textContent = a
    document.getElementById("varB").textContent = b
    document.getElementById("varC").textContent = c
    
    if(D == 0){
       ans = "The discriminant has 1 root"
    }else if(D > 0){
        ans = "The discriminant has 2 roots"
    }else if(D < 0){
        ans = "The discriminant has no roots"
    }
    
    document.getElementById("varAns").textContent = ans
}
        
