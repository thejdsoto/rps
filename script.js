let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = [`rock`, `paper`, `scissors`];
    let index = Math.floor(Math.random() * 3);

    return choice[index];
}

function playRound(humanChoice, computerChoice) {
    let resultElement = document.createElement('p');
    let resultDiv = document.querySelector(`div.result`);
    
    // If human picks rock
    if (humanChoice === `rock` && computerChoice === `rock`) {
        resultElement.innerText = `It's a tie! Both players choose rock.` 
    } else if (humanChoice === `rock` && computerChoice === `paper`) {
        resultElement.innerText = `You lose! Rock loses to paper.`;
        computerScore++;
    } else if (humanChoice === `rock` && computerChoice === `scissors`) {
        resultElement.innerText = `You win! Rock beats scissors.`;
        humanScore++;
    }

    // If human picks paper
    if (humanChoice === `paper` && computerChoice === `paper`) {
        resultElement = `It's a tie! Both players choose paper.`;
    } else if (humanChoice === `paper` && computerChoice === `rock`) {
        resultElement = `You win! Paper beats rock.`;
        humanScore++;
    } else if (humanChoice === `paper` && computerChoice === `scissors`) {
        resultElement = `You lose! Paper loses to scissors.`;
        computerScore++;
    }

    // If human picks scissors
    if (humanChoice === `scissors` && computerChoice === `scissors`) {
        resultElement = `It's a tie! Both players choose scissors.`;
    } else if (humanChoice === `scissors` && computerChoice === `rock`) {
        resultElement = `You lose! Scissors loses to rock.`;
        computerScore++;
    } else if (humanChoice === `scissors` && computerChoice === `paper`) {
        resultElement = `You win! Scissors beat paper.`;
        humanScore++;
    }

    resultDiv.append(resultElement);
    resultElement.innerText = '';   
}

function initialize() {
    let round = 0;
    let buttons = document.querySelectorAll(`button`);
        
    for (const button of buttons) {
        button.addEventListener("click", (e) => {
            let elementID = button.getAttribute(`id`);
            let humanChoice = elementID;
            let computerChoice = getComputerChoice();

            if (round < 6){
                playRound(humanChoice, computerChoice);
                console.log(`Round ${round}`);
                console.log(`Human score: ${humanScore}`);
                console.log(`Computer score: ${computerScore}`);
                round++;
            } else {
                console.log(`Up to 5 rounds only! Refresh to start game again!`);
                return;
            }
        });
    }
}

initialize();