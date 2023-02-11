const options = ['rock', 'paper', 'scissors'];

let userResponse = '',
	result = '',
	userScore = 0,
	computerScore = 0,
	roundNumber = 0;

const computerPlay = () => options[Math.floor(Math.random() * 3)];

const userInput = () => {
	userResponse = prompt(`Round: ${roundNumber + 1}: Rock, paper, or scissors?`);

	if (userResponse !== null) {
		userResponse = userResponse.toLowerCase().trim();
	} else {
		return;
	}
};

const playRound = (playerSelection, computerSelection) => {
	let draw = playerSelection === computerSelection;
	const result = /rockscissors|scissorspaper|paperrock/gi.test(
		playerSelection + computerSelection
	);

	return draw
		? 'Draw!'
		: `${result ? 'Your Point!' : 'Computer Point!'}, ${
				result ? playerSelection : computerSelection
		  } beats ${result ? computerSelection : playerSelection}.`;
};

//game
const game = () => {
	alert("Let's play rock, paper, scissors! 😋");

	while (roundNumber < 5) {
		userInput();

		if (userResponse === null) {
			break;
		} else if (options.includes(userResponse)) {
			result = playRound(userResponse, computerPlay());
			alert(result);
			roundNumber++;
		} else {
			alert('Please enter a valid option.');
			continue;
		}

		if (result.includes('Draw')) result = 'Draw!';
		else if (result.includes('Your')) userScore++;
		else computerScore++;

		alert(`Score: You ${userScore} / Computer ${computerScore}`);
		console.log(`Score: You ${userScore} / Computer ${computerScore}`);
	}

	if (roundNumber === 5) {
		alert(
			`${
				userScore > computerScore
					? 'You won the game! 🥳🥳🥳'
					: userScore < computerScore
					? 'The computer won the game! 😢😢😢'
					: "It's a draw!"
			} Score: You ${userScore} / Computer ${computerScore}`
		);
	}
};

game();
