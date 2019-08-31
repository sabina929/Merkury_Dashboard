const containers = document.querySelectorAll('.period');
const selections = document.querySelectorAll('.period>p>span');
const firstOptions = document.querySelectorAll('.options p:nth-child(1)');
const secondOptions = document.querySelectorAll('.options p:nth-child(2)');
const thirdOptions = document.querySelectorAll('.options p:nth-child(3)');
const fourthtOptions = document.querySelectorAll('.options p:nth-child(4)');


containers.forEach(container => {
    container.addEventListener('click', () => {
        container.classList.toggle('expand');
    });
});


firstOptions.forEach(firstOption => {
    firstOption.addEventListener('click', changeSelectionToFirstOption);
});

secondOptions.forEach(firstOption => {
    firstOption.addEventListener('click', changeSelectionToSecondOption);
});

thirdOptions.forEach(firstOption => {
    firstOption.addEventListener('click', changeSelectionToThirdOption);
});

fourthtOptions.forEach(firstOption => {
    firstOption.addEventListener('click', changeSelectionToFourthtOption);
});



function changeSelectionToFirstOption(e) {
    // console.log(e.target);
    // console.log(e.target.parentNode.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.childNodes[1]);

    let selected = e.target.parentNode.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.childNodes[1];
    selected.innerHTML = 'All time';
}

function changeSelectionToSecondOption(e) {
    let selected = e.target.parentNode.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.childNodes[1];
    selected.innerHTML = 'Last year';
}

function changeSelectionToThirdOption(e) {
    let selected = e.target.parentNode.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.childNodes[1];
    selected.innerHTML = 'Last month';
}

function changeSelectionToFourthtOption(e) {
    let selected = e.target.parentNode.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.childNodes[1];
    selected.innerHTML = 'Last week';
}


// SEARCH BOX

const searchIcon = document.querySelector('.top-menu__nav nav ul li:nth-child(2) img');
const searchBox = document.querySelector('.search-box');

searchIcon.addEventListener('click', showSearchBox);


function showSearchBox() {
    searchBox.classList.toggle('show');
    searchIcon.classList.toggle('move-right');
}


// CLOSING SIDE MENU 


const hamburgerArrow = document.querySelector('.top-menu__nav nav ul li:nth-child(1) img:nth-child(1)');
const hamburger = document.querySelector('.top-menu__nav nav ul li:nth-child(1) img:nth-child(2)');
const sideMenu = document.querySelector('.side-menu');
const topMenuNav = document.querySelector('.top-menu__nav');
const topMenuListItems = document.querySelector('.top-menu__nav nav ul li:nth-child(3)');
const homeContent = document.querySelector('.home-content');



hamburger.addEventListener('click', closeSideMenu);

function closeSideMenu() {
    sideMenu.classList.toggle('close-side-menu');
    hamburgerArrow.classList.toggle('hide');
    topMenuNav.classList.toggle('move-to-left');
    topMenuListItems.classList.toggle('move-to-right');
    homeContent.classList.toggle('change-position');
}