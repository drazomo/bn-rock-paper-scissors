// Array of Rock, Paper, Scissors options
const rpsOptions = ['rock', 'paper', 'scissors'];
// Select all buttons under the class name of ".selectors"
const playerSelectorBtns = document.querySelectorAll('.selectors button');
const userSelectionWindow = document.querySelector('window__area_user');
const computerSelectionWindow = document.querySelector('window_area_computer');
// Initialize the playerSelection, computerSelection, result, userScore, computerScore, and roundNumber variables
let playerSelection = '',
	computerSelection = '',
	result = '',
	userScore = 0,
	computerScore = 0,
	roundNumber = 0;

// Loop through each button in playerSelectorBtns
for (const playerBtn of playerSelectorBtns) {
	// Attach a click event listener to the button
	playerBtn.addEventListener('click', () => {
		// Set playerSelection to the value attribute of the clicked button
		playerSelection = playerBtn.getAttribute('value');
		// Set computerSelection to a random option from the rpsOptions array
		computerSelection = rpsOptions[Math.floor(Math.random() * 3)];
		userSelectionWindow.textContent = playerSelection;
		computerSelectionWindow.textContent = computerSelection;
	});
}

const game = () => {
	const playRound = (playerSelection, computerSelection) => {
		let draw = playerSelection === computerSelection;
		return draw
			? 'Draw!'
			: `${result ? 'Your Point!' : 'Computer Point!'}, ${
					result ? playerSelection : computerSelection
			  } beats ${result ? computerSelection : playerSelection}.`;
	};

	while (roundNumber < 5) {
		result = playRound(userResponse, computerSelection);
		roundNumber++;
	}

	if (result.includes('Draw')) {
		result = 'Draw!';
	} else if (result.includes('Your')) {
		userScore++;
	} else {
		computerScore++;
	}
};

if (roundNumber === 5) {
	if (userScore > computerScore) console.log('You won the game!');
	else if (userScore < computerScore) console.log('The computer won the game!');
	else console.log("It's a draw!");
	alert(`${
		userScore > computerScore
			? 'You won the game!'
			: userScore < computerScore
			? 'The computer won the game!'
			: "It's a draw!"
	} 
      Score: You ${userScore} / Computer ${computerScore}`);
}
