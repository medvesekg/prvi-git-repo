function randint(min, max) {
  let random = Math.random()
  random = (random * (max - min + 1)) + min
  return Math.floor(random)
}

function chooseRandomItem() {
  let random = randint(0,2)
  return items[random]
}

function displayChoices() {
  document.querySelector('.computers-choice-text').innerHTML = 'The computer chose: '
  document.querySelector('.computers-choice-item').innerHTML = computersChoice
  document.querySelector('.round').innerHTML = "Round " + round
}


let items = ['Rock', 'Paper', 'Scissors']
let round = 1

let computersChoice = chooseRandomItem()

let result = document.querySelector('.result')
let resultText = document.querySelector('.result-text')
let resultImage = document.querySelector('.result-image')

document.querySelector('.item-rock').onclick = function() {

  displayChoices()

  if(computersChoice == "Rock") {
    result.innerHTML = "Draw!"
    resultText.innerHTML = "The Rock is not impressed."
    resultImage.src = "img/rock_draw.jpg"
    
  }
  else if(computersChoice == "Paper") {
    result.innerHTML = "You lose!"
    resultText.innerHTML = "Oh no! Paper is The Rock's one and only weakness!"
    resultImage.src = "img/rock_lose.jpg"
  }
  else if(computersChoice == "Scissors") {
    result.innerHTML = "You win!"
    resultText.innerHTML = "The Rock easily crushes scissors."
    resultImage.src = "img/rock_win.jpg"
  }

  computersChoice = chooseRandomItem()
  round++

}

document.querySelector('.item-paper').onclick = function() {

  displayChoices()


  if(computersChoice == "Paper") {
    result.innerHTML = "Draw!"
    resultText.innerHTML = "There is so much paper!"
    resultImage.src = "img/paper_draw.jpg"
    
  }
  else if(computersChoice == "Rock") {
    result.innerHTML = "You win!"
    resultText.innerHTML = "Paper is the best!"
    resultImage.src = "img/paper_win.jpg"
  }
  else if(computersChoice == "Scissors") {
    result.innerHTML = "You lose!"
    resultText.innerHTML = "Prepare to be shredded!"
    resultImage.src = "img/paper_lose.jpg"
  }

  computersChoice = chooseRandomItem()
  round++


}

document.querySelector('.item-scissors').onclick = function() {

  displayChoices()

  if(computersChoice == "Scissors") {
    result.innerHTML = "Draw!"
    resultText.innerHTML = "Running with scissors is dangerous!"
    resultImage.src = "img/scissors_draw.jpg"
    
  }
  else if(computersChoice == "Paper") {
    result.innerHTML = "You win!"
    resultText.innerHTML = "You are the scissor master!"
    resultImage.src = "img/scissors_win.jpg"
  }
  else if(computersChoice == "Rock") {
    result.innerHTML = "You lose!"
    resultText.innerHTML = "Ouch!"
    resultImage.src = "img/scissors_lose.jpg"
  }

  computersChoice = chooseRandomItem()
  round++

}



