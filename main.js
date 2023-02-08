const options = ['rock', 'paper', 'scissors'];
const playerSelectorBtns = document.querySelectorAll('.selectors button');

for(const playerBtn of playerSelectorBtns) {
  playerBtn.addEventListener('click', () => {
    console.log('click!')
  })
};