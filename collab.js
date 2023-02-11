const game = () => {
	const options = ['rock', 'paper', 'scissors'];
	let userResponse = '',
		result = '',
		userScore = 0,
		computerScore = 0,
		roundNumber = 0;

	const computerPlay = () => options[Math.floor(Math.random() * 3)];

	const playRound = (playerSelection, computerSelection) => {
		playerSelection = playerSelection.toLowerCase().trim();
		computerSelection = computerSelection.toLowerCase().trim();
		while (!options.includes(playerSelection)) {
			playerSelection = prompt('Please enter a valid option.');
		}

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

	while (roundNumber < 5) {
		userResponse = prompt('Rock, paper, or scissors?');
		if (options.includes(userResponse.toLowerCase().trim())) {
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
		if (userScore > computerScore) console.log('You won the game!');
		else if (userScore < computerScore)
			console.log('The computer won the game!');
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
};

game();
