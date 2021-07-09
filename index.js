let firstCard = 11
let secondCard = 10
let hasBlackJack = false
let isAlive = true
message = ''

let output_el = document.getElementById('output-el')
sum = firstCard + secondCard
console.log(sum)


let startGame = ()=>{
    if(sum <= 20) {
        message = 'Do you want to draw a new card'
    } else if(sum === 21) {
        message = "Wooho!!,You've got blackjack"
        hasBlackJack = true
    } else {
        message = 'You are out of game'
        isAlive = false
    }
    output_el.textContent = message
}

console.log(hasBlackJack)
console.log(isAlive)
