let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = [`rock`, `paper`, `scissors`];
    let index = Math.floor(Math.random() * 3);

    return choice[index];
}

function playRound(humanChoice, computerChoice) {
    // If human picks rock
    if (humanChoice === `rock` && computerChoice === `rock`) {
        console.log(`It's a tie! Both players choose rock.`);
    } else if (humanChoice === `rock` && computerChoice === `paper`) {
        console.log(`You lose! Rock loses to paper.`);
        computerScore++;
    } else if (humanChoice === `rock` && computerChoice === `scissors`) {
        console.log(`You win! Rock beats scissors.`);
        humanScore++;
    }

    // If human picks paper
    if (humanChoice === `paper` && computerChoice === `paper`) {
        console.log(`It's a tie! Both players choose paper.`);
    } else if (humanChoice === `paper` && computerChoice === `rock`) {
        console.log(`You win! Paper beats rock.`);
        humanScore++;
    } else if (humanChoice === `paper` && computerChoice === `scissors`) {
        console.log(`You lose! Paper loses to scissors.`);
        computerScore++;
    }

    // If human picks scissors
    if (humanChoice === `scissors` && computerChoice === `scissors`) {
        console.log(`It's a tie! Both players choose scissors.`);
    } else if (humanChoice === `scissors` && computerChoice === `rock`) {
        console.log(`You lose! Scissors loses to rock.`);
        computerScore++;
    } else if (humanChoice === `scissors` && computerChoice === `paper`) {
        console.log(`You win! Scissors beat paper.`);
        humanScore++;
    }
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