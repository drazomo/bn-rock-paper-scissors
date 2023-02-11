const rpsOptions = ['rock', 'paper', 'scissors'];
const playerSelectorBtns = document.querySelectorAll('.selectors button');
const userSelectionWindow = document.querySelector('#user__selection');
const computerSelectionWindow = document.querySelector('#computer__selection');
const displayComputerScore = document.querySelector('.computer__score--window');
const displayUserScore = document.querySelector('.user__score--window');
const displayWinner = document.querySelector('.result__window');
const playBtn = document.querySelector('.play__button');

const randomizeChoice = () => rpsOptions[Math.floor(Math.random() * 3)];

let playerSelection = '',
	computerSelection = '',
	usrScore = 0,
	compScore = 0,
	roundNum = 0;

for (const playerBtn of playerSelectorBtns) {
	playerBtn.addEventListener('click', () => {
		playerSelection = playerBtn.getAttribute('value');
		computerSelection = randomizeChoice();
		computerSelectionWindow.textContent = computerSelection;
		userSelectionWindow.textContent = playerSelection;
		plyRound(playerSelection, computerSelection);
	});
}

const onResetBtnClick = playBtn.addEventListener('click', () => {
	playerSelection = '-';
	computerSelection = '-';
	usrScore = 0;
	compScore = 0;
	roundNum = 0;

	displayWinner.textContent = 'Select Rock, Paper or Scissors to Play';

	computerSelectionWindow.textContent = computerSelection;
	userSelectionWindow.textContent = playerSelection;

	displayComputerScore.textContent = compScore;
	displayUserScore.textContent = usrScore;

	for (const btn of playerSelectorBtns) {
		btn.classList.remove('disabled');
	}
});

const plyRound = (plyrSelect, compSelect) => {
	playBtn.classList.add('hidden');
	const playerResult = /rockscissors|scissorspaper|paperrock/gi.test(
		plyrSelect + compSelect
	);

	let draw = playerSelection === computerSelection;

	roundNum++;
	const userEndResult = usrScore > compScore;

	if (draw) {
		displayWinner.textContent = `Draw!`;
	} else if (playerResult) {
		usrScore++;
		displayUserScore.textContent = usrScore;
		displayWinner.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
	} else {
		compScore++;
		displayComputerScore.textContent = compScore;
		displayWinner.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
	}

	if (usrScore === 5 || compScore === 5) {
		for (const btn of playerSelectorBtns) {
			playBtn.classList.toggle('hidden');
			btn.classList.add('disabled');
			playBtn.classList.remove('disabled');
			displayWinner.textContent = `You ${userEndResult ? 'Win' : 'Lose'}! ${
				userEndResult ? '🥳🥳🥳' : '😢😢😢'
			}`;
		}
	}
};
