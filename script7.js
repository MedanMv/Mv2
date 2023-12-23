

document.addEventListener('DOMContentLoaded', function() {
    x = +prompt("Min:")
    y = +prompt("Max:")
    
    var min = 0
    var max = 0
    
    if(x < y){
        min = x
        max = y
    }else if(x > y){
        min = y
        max = x
    }
    
    num = Math.floor(min + Math.random() * (max+1 - min))
    
    // for(let i=0;i<1000;i++){
    //     num = Math.floor(min + Math.random() * (max+1 - min))
    //     document.writeln(num)
    // }
    
    lichSp = 0
    
    function guess(){
        guessNum = prompt(`Вгадайте число від ${min} до ${max}` + `(Спроба номер  ${lichSp})`)
        if(guessNum == null){
            return
        }
        if(guessNum == num){
            alert("Ви вгадали")
        }else if(guessNum > 100 || guessNum < 0){
            lichSp++
            alert("Треба ввести номер від 0 до 100")
            guess()
        }else if(guessNum > num){
            lichSp++
            alert("Ваш номер більше від загаданого")
            guess()
        }else{
            lichSp++
            alert("Ваш номер менше від загаданого")
            guess()
        }
    }
    
    guess()
});
