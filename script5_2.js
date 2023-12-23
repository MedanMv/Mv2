

document.addEventListener('DOMContentLoaded', function() {
    div = document.getElementById("add_to_me")

    a = document.getElementById("aAdd")

    eek = String(prompt("Enter the symbol"))

    num = +prompt("Enter the amount of times")

    symb = String("<a>"+ eek + " " +"</a>")

    for(var i = 1;i < num+2;i++){
        a.innerHTML += ("<a>"+ eek.repeat(i) + " " +"</a>")
        a.innerHTML += "<br>"
    }
    
});