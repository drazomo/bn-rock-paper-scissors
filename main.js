const rpsOptions = ['rock', 'paper', 'scissors'];
const playerSelectorBtns = document.querySelectorAll('.selectors button');
const userSelectionWindow = document.querySelector('#user__selection');
const computerSelectionWindow = document.querySelector('#computer__selection');
const displayComputerScore = document.querySelector('.computer__score--window');
const displayUserScore = document.querySelector('.user__score--window');
const displayWinner = document.querySelector('result__window');
const playBtn = document.querySelector('.play__button');

const randomizeChoice = () => rpsOptions[Math.floor(Math.random() * 3)];

let playerSelection = '',
	computerSelection = '',
	userScore = 0,
	computerScore = 0,
	roundNumber = 0;

for (const playerBtn of playerSelectorBtns) {
	playerBtn.addEventListener('click', () => {
		playerSelection = playerBtn.getAttribute('value');
		computerSelection = randomizeChoice();
		computerSelectionWindow.textContent = computerSelection;
		userSelectionWindow.textContent = playerSelection;
		playRound(playerSelection, computerSelection);
	});
}

const onResetBtnClick = playBtn.addEventListener('click', () => {
	playerSelection = '-';
	computerSelection = '-';
	userScore = 0;
	computerScore = 0;
	roundNumber = 0;

	computerSelectionWindow.textContent = computerSelection;
	userSelectionWindow.textContent = playerSelection;

	displayComputerScore.textContent = computerScore;
	displayUserScore.textContent = userScore;

	for (const btn of playerSelectorBtns) {
		btn.classList.remove('disabled');
	}
});

const playRound = (plyrSelect, compSelect) => {
	playBtn.classList.add('hidden');
	const playerResult = /rockscissors|scissorspaper|paperrock/gi.test(
		plyrSelect + compSelect
	);

	let draw = playerSelection === computerSelection;

	roundNumber++;

	if (draw) {
	} else if (playerResult) {
		userScore++;
		displayUserScore.textContent = userScore;
	} else {
		computerScore++;
		displayComputerScore.textContent = computerScore;
	}

	if (userScore === 5 || computerScore === 5) {
		for (const btn of playerSelectorBtns) {
			playBtn.classList.toggle('hidden');
			btn.classList.add('disabled');
			playBtn.classList.remove('disabled');
		}
	}
};
