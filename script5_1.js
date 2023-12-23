

document.addEventListener('DOMContentLoaded', function() {
    num = Math.floor(Math.random() * 100)

    lichSp = 0
    
    function guess(){
        guessNum = prompt("Вгадайте число від 0 до 100" + "(Спроба номер " + lichSp + ")")
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