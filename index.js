let player = {
    name : 'Hardik',
    chips : 15    
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let output_el = document.getElementById('output-el')
let sum_el = document.querySelector('#sum-el')
let card_el = document.getElementById('card-el')


let player_el = document.getElementById("player-el")
player_el.textContent = player.name+ ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1 //0-12+1
    if (randomNumber === 1){
        return 11
    } else if (randomNumber > 10){
        return 10
    } else {
        return randomNumber
    }
}


let startGame = ()=> {
    isAlive = true
    firstCard = Math.floor(Math.random()*13)+1
    secondCard = Math.floor(Math.random()*13)+1
    cards = [firstCard+secondCard]
    // cards.push(firstCard)
    // cards.push(secondCard)
    sum = firstCard+secondCard
    renderGame()
}


let renderGame = ()=>{
    sum_el.textContent = `Sum: ${sum}`
    card_el.textContent = "Cards: "
    for(let i=0; i<cards.length; i++){
        card_el.textContent += cards[i] + " "
    }
    if(sum <= 20) {
        message = 'Draw a new card!'
    } else if(sum === 21) {
        message = "You've got blackjack"
        hasBlackJack = true
    } else {
        message = 'You are out of game'
        isAlive = false
    }
    output_el.textContent = message
}


let newCard = ()=>{
    if(isAlive === true && hasBlackJack === false){
        console.log("Drawing a new card")
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
    // else{
    //     // message = 'game over'
    //     console.log('game over')
    //     document.getElementsByName().disabled = true
    // }
}


// let person = {
//     name: "hardik",
//     age: 24,
//     country: "India"
// }

// function logData() {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }


console.log(hasBlackJack)
// logData()
console.log(isAlive)

// let scentance =  ["hi","my","name","is","hardik"]
// let greetingEl = document.getElementById("gretting-el")

// for(let i=0; i< scentance.length; i++){
//     greetingEl.textContent += scentance[i] + " "
// }


// let randomNumber = ()=>{
//     let rand = Math.floor(Math.random()*6) + 1
//     greetingEl.textContent = randomNumber()
// }

// greetingEl.textContent = randomNumber()



// airbnbCastleListing = {
//     booked = true,
//     name = "high tower",
//     number = 84848940,
//     rooms = ["1 kitchen","2 rooms", "1 bathroom"]
// }

// console.log(airbnbCastleListing.booked)




// fruits = ["🍎","🍌","🍎","🍌","🍌","🍌","🍎"]

// let apple_shelf = document.getElementById('apple-shelf')
// let banana_shelf = document.getElementById('banana-shelf')

// let sortFruits = () =>{
//     for(let i=0; i<fruits.length; i++){
//         if(fruits[i] === "🍎"){
//             apple_shelf.textContent += fruits[i]
//         }else{
//             banana_shelf.textContent += fruits[i]
//         }
//     }
// }

// sortFruits()
