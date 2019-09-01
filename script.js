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
    workflow.classList.toggle('change-position');
}


// NAVIGATION
const workflow = document.querySelector('.workflow');
const navHome = document.querySelector('#nav-home');
const navWorkflow = document.querySelector('#nav-workflow');
const navStatistics = document.querySelector('#nav-statistics');
const navCalendar = document.querySelector('#nav-calendar');
const navUsers = document.querySelector('#nav-users');

const homeCont = document.querySelector('.side-menu__nav nav ul li:nth-child(1)');
const workflowCont = document.querySelector('.side-menu__nav nav ul li:nth-child(2)');
const statisticsCont = document.querySelector('.side-menu__nav nav ul li:nth-child(3)');
const calendarCont = document.querySelector('.side-menu__nav nav ul li:nth-child(4)');
const usersCont = document.querySelector('.side-menu__nav nav ul li:nth-child(5)');




navHome.addEventListener('click', goToHomeContent);
navWorkflow.addEventListener('click', goToWorkflow);
navStatistics.addEventListener('click', goToStatistics);
navCalendar.addEventListener('click', goToCalendar);
navUsers.addEventListener('click', goToUsers);

function goToHomeContent() {
    workflow.style.opacity = "0";
    setTimeout(() => {
        workflow.style.display = "none";
    }, 60);

    setTimeout(() => {
        homeContent.style.display = "grid";
        setTimeout(() => {
            homeContent.style.opacity = "1";
        }, 60);
    }, 250);

    homeCont.style.backgroundColor = '#5585ff29';
    homeCont.style.borderLeft = '5px solid rgba(85, 133, 255)';

    workflowCont.style.backgroundColor = '#5585ff00';
    workflowCont.style.borderLeft = 'none';

    statisticsCont.style.backgroundColor = '#5585ff00';
    statisticsCont.style.borderLeft = 'none';

    calendarCont.style.backgroundColor = '#5585ff00';
    calendarCont.style.borderLeft = 'none';

    usersCont.style.backgroundColor = '#5585ff00';
    usersCont.style.borderLeft = 'none';

}

function goToWorkflow() {
    homeContent.style.opacity = "0";
    setTimeout(() => {
        homeContent.style.display = "none";
    }, 60);

    setTimeout(() => {
        workflow.style.display = "grid";
        setTimeout(() => {
            workflow.style.opacity = "1";
        }, 60);
    }, 250);

    homeCont.style.backgroundColor = '#5585ff00';
    homeCont.style.borderLeft = 'none';

    workflowCont.style.backgroundColor = '#5585ff29';
    workflowCont.style.borderLeft = '5px solid rgba(85, 133, 255)';

    statisticsCont.style.backgroundColor = '#5585ff00';
    statisticsCont.style.borderLeft = 'none';

    calendarCont.style.backgroundColor = '#5585ff00';
    calendarCont.style.borderLeft = 'none';

    usersCont.style.backgroundColor = '#5585ff00';
    usersCont.style.borderLeft = 'none';

}


function goToStatistics() {
    homeContent.style.opacity = "0";
    setTimeout(() => {
        homeContent.style.display = "none";
    }, 60);

    workflow.style.opacity = "0";
    setTimeout(() => {
        workflow.style.display = "none";
    }, 60);

    // setTimeout(() => {
    //     statistics.style.display = "grid";
    //     setTimeout(() => {
    //         statistics.style.opacity = "1";
    //     }, 60);
    // }, 250);

    homeCont.style.backgroundColor = '#5585ff00';
    homeCont.style.borderLeft = 'none';

    workflowCont.style.backgroundColor = '#5585ff00';
    workflowCont.style.borderLeft = 'none';

    statisticsCont.style.backgroundColor = '#5585ff29';
    statisticsCont.style.borderLeft = '5px solid rgba(85, 133, 255)';

    calendarCont.style.backgroundColor = '#5585ff00';
    calendarCont.style.borderLeft = 'none';

    usersCont.style.backgroundColor = '#5585ff00';
    usersCont.style.borderLeft = 'none';

}

function goToCalendar() {
    homeContent.style.opacity = "0";
    setTimeout(() => {
        homeContent.style.display = "none";
    }, 60);

    workflow.style.opacity = "0";
    setTimeout(() => {
        workflow.style.display = "none";
    }, 60);

    // setTimeout(() => {
    //     calendar.style.display = "grid";
    //     setTimeout(() => {
    //         calendar.style.opacity = "1";
    //     }, 60);
    // }, 250);

    homeCont.style.backgroundColor = '#5585ff00';
    homeCont.style.borderLeft = 'none';

    workflowCont.style.backgroundColor = '#5585ff00';
    workflowCont.style.borderLeft = 'none';

    statisticsCont.style.backgroundColor = '#5585ff00';
    statisticsCont.style.borderLeft = 'none';

    calendarCont.style.backgroundColor = '#5585ff29';
    calendarCont.style.borderLeft = '5px solid rgba(85, 133, 255)';

    usersCont.style.backgroundColor = '#5585ff00';
    usersCont.style.borderLeft = 'none';

}

function goToUsers() {
    homeContent.style.opacity = "0";
    setTimeout(() => {
        homeContent.style.display = "none";
    }, 60);

    workflow.style.opacity = "0";
    setTimeout(() => {
        workflow.style.display = "none";
    }, 60);

    // setTimeout(() => {
    //     users.style.display = "grid";
    //     setTimeout(() => {
    //         users.style.opacity = "1";
    //     }, 60);
    // }, 250);

    homeCont.style.backgroundColor = '#5585ff00';
    homeCont.style.borderLeft = 'none';

    workflowCont.style.backgroundColor = '#5585ff00';
    workflowCont.style.borderLeft = 'none';

    statisticsCont.style.backgroundColor = '#5585ff00';
    statisticsCont.style.borderLeft = 'none';

    calendarCont.style.backgroundColor = '#5585ff00';
    calendarCont.style.borderLeft = 'none';

    usersCont.style.backgroundColor = '#5585ff29';
    usersCont.style.borderLeft = '5px solid rgba(85, 133, 255)';

}