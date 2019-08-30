const container = document.querySelector('#period');
const selection = document.querySelector('#period p span');
const optionOne = document.querySelector('.options p:nth-child(1)');
const optionTwo = document.querySelector('.options p:nth-child(2)');
const optionThree = document.querySelector('.options p:nth-child(3)');
const optionFour = document.querySelector('.options p:nth-child(4)');

// console.log(selection);
// console.log(optionOne);
// console.log(optionTwo);
// console.log(optionThree);
// console.log(optionFour);

container.addEventListener('click', expandContainer);

optionOne.addEventListener('click', changeSelectionToOptionOne);
optionTwo.addEventListener('click', changeSelectionToOptionTwo);
optionThree.addEventListener('click', changeSelectionToOptionThree);
optionFour.addEventListener('click', changeSelectionToOptionFour);

function expandContainer() {
    container.classList.toggle('expand');
    // console.log('clicked');
}

function changeSelectionToOptionOne() {
    selection.innerHTML = 'All time';
}

function changeSelectionToOptionTwo() {
    selection.innerHTML = 'Last year';
}

function changeSelectionToOptionThree() {
    selection.innerHTML = 'Last month';
}

function changeSelectionToOptionFour() {
    selection.innerHTML = 'Last week';
}

// SELECTION2

const container2 = document.querySelector('#period2');
const selection2 = document.querySelector('#period2 p span');
const optionOne2 = document.querySelector('#period2 .options2 p:nth-child(1)');
const optionTwo2 = document.querySelector('#period2 .options2 p:nth-child(2)');
const optionThree2 = document.querySelector('#period2 .options2 p:nth-child(3)');
const optionFour2 = document.querySelector('#period2 .options2 p:nth-child(4)');



container2.addEventListener('click', expandContainer2);

optionOne2.addEventListener('click', changeSelection2ToOptionOne);
optionTwo2.addEventListener('click', changeSelection2ToOptionTwo);
optionThree2.addEventListener('click', changeSelection2ToOptionThree);
optionFour2.addEventListener('click', changeSelection2ToOptionFour);

function expandContainer2() {
    container2.classList.toggle('expand2');
}

function changeSelection2ToOptionOne() {
    selection2.innerHTML = 'All time';
}

function changeSelection2ToOptionTwo() {
    selection2.innerHTML = 'Last year';
}

function changeSelection2ToOptionThree() {
    selection2.innerHTML = 'Last month';
}

function changeSelection2ToOptionFour() {
    selection2.innerHTML = 'Last week';
}