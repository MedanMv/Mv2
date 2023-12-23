
document.addEventListener('DOMContentLoaded', function() {
    n1 = +prompt("Number1:")
    n2 = +prompt("Number2:")
    
    function comp(num1,num2){
        if(num1 > num2){
            alert(num1)
        }else if(num1 < num2){
            alert(num2)
        }else{
            alert("Numbers are the same")
        }
    }
    comp(n1,n2)

});