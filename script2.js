

// let mas = prompt("Як вас звуть?", "ok")
// let age = +prompt("Скільки вам років?")
// let nStr = age.toString()
// let nss = nStr.substring(nStr.length - 1,nStr.length)

ans = ""

function openModal() {
    var ppp = document.getElementById("divP")
    var mas = document.getElementById("name").value
    var age = document.getElementById("age").value
    let nStr = age.toString()
    let nss = nStr.substring(nStr.length - 1,nStr.length)

    if(age <= 0){  
        // alert("Неправильно введенний рік")
        ans = "Неправильно введенний рік"
    }else if(age == 1){
        // alert("Добрий день " + mas + ", вам " + age + " рік, а на сайт можна заходити тільки від 18 років")
        ans = "Добрий день " + mas + ", вам " + age + " рік, а на сайт можна заходити тільки від 18 років"
    }else if(age < 18){    // 18
        if(age <=5 && age > 1){
            // alert("Добрий день " + mas + ", вам " + age + " роки, а на сайт можна заходити тільки від 18 років")
            ans = "Добрий день " + mas + ", вам " + age + " роки, а на сайт можна заходити тільки від 18 років"
        }else if(age >= 5){
            // alert("Добрий день " + mas + ", вам " + age + " років, а на сайт можна заходити тільки від 18 років")
            ans = "Добрий день " + mas + ", вам " + age + " років, а на сайт можна заходити тільки від 18 років"
        }
    }else if(age > 100){    // 100
        if(nss == 1){
            // alert("Добрий день " + mas + ", вам " + age + " рік, а на сайт можна заходити тільки до 100 років")
            ans = "Добрий день " + mas + ", вам " + age + " рік, а на сайт можна заходити тільки до 100 років"
        }else if(nss == 2 || nss == 3 || nss == 4){
            // alert("Добрий день " + mas + ", вам " + age + " роки, а на сайт можна заходити тільки до 100 років")
            ans = "Добрий день " + mas + ", вам " + age + " роки, а на сайт можна заходити тільки до 100 років"
        }else if(nss >= 5){
            // alert("Добрий день " + mas + ", вам " + age + " років, а на сайт можна заходити тільки до 100 років")
            ans = "Добрий день " + mas + ", вам " + age + " років, а на сайт можна заходити тільки до 100 років"
        }
    }else if(nss == 1){
        // alert("Добрий день " + mas + ", вам " + age + " рік, тож вас можна запустити на сайт")
        ans = "Добрий день " + mas + ", вам " + age + " рік, тож вас можна запустити на сайт"
    }else if(nss == 2 || nss == 3 || nss == 4){
        // alert("Добрий день " + mas + ", вам " + age + " роки, тож вас можна запустити на сайт")
        ans = "Добрий день " + mas + ", вам " + age + " роки, тож вас можна запустити на сайт"
    }else{
        // alert("Добрий день " + mas + ", вам " + age + " років, тож вас можна запустити на сайт")
        ans = "Добрий день " + mas + ", вам " + age + " років, тож вас можна запустити на сайт"
    }

    ppp.textContent = ans
    var modal = document.getElementById("myModal");
    modal.style.display = "flex"; 
}