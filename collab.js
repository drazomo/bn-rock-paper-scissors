const options = ['rock', 'paper', 'scissors'];

let userScore = 0,
	computerScore = 0,
	roundNumber = 0;

const computerPlay = () => options[Math.floor(Math.random() * 3)];

const userInput = () => {
	const userResponse = prompt(
		`Round: ${roundNumber + 1}: Rock, paper, or scissors?`
	);

	return userResponse !== null ? userResponse.toLowerCase().trim() : null;
};

const playRound = (playerSelection, computerSelection) => {
	const draw = playerSelection === computerSelection;
	const win = /rockscissors|scissorspaper|paperrock/gi.test(
		playerSelection + computerSelection
	);

	if (draw) return 'Draw!';

	return `${win ? 'Your Point!' : 'Computer Point!'}, ${
		win ? playerSelection : computerSelection
	} beats ${win ? computerSelection : playerSelection}.`;
};

const updateScore = (result) => {
	if (result === 'Draw!') return;
	if (result.includes('Your Point!')) userScore++;
	else computerScore++;
};

const game = () => {
	alert("Let's play rock, paper, scissors! 😋");

	while (roundNumber < 5) {
		const userResponse = userInput();

		if (userResponse === null) break;
		else if (!options.includes(userResponse)) {
			alert('Please enter a valid option.');
			continue;
		}

		const result = playRound(userResponse, computerPlay());
		updateScore(result);

		alert(result);
		alert(`Score: You ${userScore} / Computer ${computerScore}`);
		console.log(`Score: You ${userScore} / Computer ${computerScore}`);
		roundNumber++;
	}

	if (roundNumber === 5) {
		const winner =
			userScore > computerScore
				? 'You won the game! 🥳🥳🥳'
				: userScore < computerScore
				? 'The computer won the game! 😢😢😢'
				: "It's a draw!";

		alert(`${winner} Score: You ${userScore} / Computer ${computerScore}`);
	}
};

game();
