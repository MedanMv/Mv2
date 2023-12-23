

document.addEventListener('DOMContentLoaded', function() {
    const body = document.getElementById("body")

    var str = prompt("Ваш рядок:").toLowerCase()
    
    const split = str.split(" ")
    
    var toFind = ["безкоштовно","гарантія"]
    
    isSpam = false
    
    for(i = 0; i < toFind.length;i++){
        if(isSpam == false){
            if(str[str.search(toFind[i])]){
                alert("Це спам")
                break
            }else{
                alert("Не спам")
            }
        }
    }
});
