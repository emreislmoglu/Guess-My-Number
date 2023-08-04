'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1

const screenMsg = function (message) {
    document.querySelector('.message').textContent = message
}

const answerNumber = document.querySelector('.number')
const body = document.querySelector('body')
const inputValue = document.querySelector('.guess')

let score = 20
let highScore = 0

const scoreOption = function (scorefnc) {
    document.querySelector('.score').textContent = score
}

const highScoreOption = function (highScorefnc) {
    document.querySelector('.highscore').textContent = highScore
}

const btnCheck = document.querySelector('.check')


btnCheck.addEventListener('click', function () {

    const estimateValue = Number(document.querySelector('.guess').value)
    console.log(estimateValue, typeof(estimateValue))

    if (!estimateValue) {
        screenMsg('Enter a number...')
    }   else if (estimateValue === secretNumber) {
            answerNumber.textContent = secretNumber
            body.style.backgroundColor = `#60b347`
            answerNumber.style.fontSize = '30 rem'

                if (score > highScore) {
                    highScore = score
                    highScoreOption(highScore)
                }

    }

    else if (estimateValue !== secretNumber) {
        if (score > 1) {
            screenMsg(estimateValue > secretNumber ? 'Bigger than chosen.' : 'Smaller than chosen.')
            score--
            scoreOption(score)
        }
    }
})

// AGAIN BUTTON 

const btnAgain = document.querySelector('.again')

btnAgain.addEventListener(`click`, function () {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1
    screenMsg('Start guessing...')
    scoreOption(score)
    body.style.backgroundColor = `#222`
    answerNumber.textContent = '?'
    inputValue.value = ''
})