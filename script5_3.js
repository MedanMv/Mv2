document.addEventListener('DOMContentLoaded', function() {
    for(var i = 1;i <= 10;i++){
        for(var j = 1; j <= 10;j++){
            document.write("<h1>" + String(i)+ "*" + j + "=" + i*j + "</h1>")
        }
    }
});