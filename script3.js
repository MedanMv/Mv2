document.addEventListener('DOMContentLoaded', function() {
    let ans = prompt("Введіть назву овоча або фрукта")
    let cpan = ans.toUpperCase()

    switch(cpan){
        case "ПОМІДОР":
            alert(`${ans} - це овоч`)
            break
        case "ЯБЛУКО": 
            alert(`${ans} - це фрукт`)
            break
        case "ОГІРОК":
            alert(`${ans} - це овоч`)
            break
        case "КАРТОПЛЯ":
            alert(`${ans} - це овоч`)
            break
        default:
            alert(`${ans} - такого об'єкту немає у листі`)
    }

});