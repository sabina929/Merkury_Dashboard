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


// TO-DO

const toDoOptionsButtons = document.querySelectorAll('.to-do__option');
const inProgressOptionsButtons = document.querySelectorAll('.in-progress__option');
const completedOptionsButtons = document.querySelectorAll('.completed__option');

const deleteOptions = document.querySelectorAll(".delete-option");
const inProgressOptions = document.querySelectorAll(".in-progress-option");
const completedOptions = document.querySelectorAll(".completed-option");


const deleteOptions2 = document.querySelectorAll(".delete-option2");
const completedOptions2 = document.querySelectorAll(".completed-option2");

const deleteOptions3 = document.querySelectorAll(".delete-option3");

const inProgresses = document.querySelector(".in-progresses");
const completedAll = document.querySelector(".completed-all");






function openOptions(e) {
    let optionContainer = e.target.nextSibling.nextSibling.nextSibling.nextSibling;
    console.log(optionContainer);
    console.log('clicked');
    optionContainer.classList.toggle('open-options');
}

function openOptions3(e) {
    let optionContainer = e.target.nextSibling.nextSibling;
    console.log(optionContainer);
    console.log('clicked');
    optionContainer.classList.toggle('open-options');
}


function deleteToDo(e) {
    let toDo = e.target.parentNode.parentNode;
    // console.log(toDo);
    toDo.style.display = 'none';


    const todosAmount = document.querySelector(".workflow .to-do .to-do__heading h1 span");

    let regex = /\d+/;
    let amount = todosAmount.textContent.match(regex)[0];
    // console.log(amount);

    let number = Number(amount);
    // console.log(number);
    number--
    // console.log(number);
    todosAmount.textContent = `(${number})`;

}

function removeToInProgress(e) {
    let toDo = e.target.parentNode.parentNode;
    // console.log(toDo);
    toDo.style.display = 'none';

    let inProgress = document.createElement('div');
    inProgresses.appendChild(inProgress);
    inProgress.classList.add('in-progress');

    let toDoImg = e.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling;
    // console.log(toDoImg);
    let toDoImgSrc = toDoImg.src;

    let inProgressToDo = document.createElement('img');
    inProgress.appendChild(inProgressToDo);
    inProgressToDo.src = toDoImgSrc;
    inProgressToDo.alt = 'in-progress';

    let inProgressOptions = document.createElement('img');
    inProgress.appendChild(inProgressOptions);
    inProgressOptions.src = '../images/workflow/options.png';
    inProgressOptions.alt = 'three dots';
    inProgressOptions.classList.add('in-progress__option');

    let inProgressTimeBadge = document.createElement('img');
    inProgress.appendChild(inProgressTimeBadge);
    inProgressTimeBadge.src = '../images/workflow/5days-left-badge.png';
    inProgressTimeBadge.alt = '5 days left';
    inProgressTimeBadge.classList.add('five-days-left');


    let inProgressOptionContainer = document.createElement('div');
    inProgress.appendChild(inProgressOptionContainer);
    inProgressOptionContainer.classList.add('option-container2');

    let inProgressDeleteOption = document.createElement('p');
    inProgressOptionContainer.appendChild(inProgressDeleteOption);
    inProgressDeleteOption.classList.add('delete-option2');
    inProgressDeleteOption.innerHTML = "delete";

    let inProgressCompletedOption = document.createElement('p');
    inProgressOptionContainer.appendChild(inProgressCompletedOption);
    inProgressCompletedOption.classList.add('completed-option2');
    inProgressCompletedOption.innerHTML = "completed";




    const todosAmount = document.querySelector(".workflow .to-do .to-do__heading h1 span");

    let regex = /\d+/;
    let amount = todosAmount.textContent.match(regex)[0];

    let number = Number(amount);
    number--
    todosAmount.textContent = `(${number})`;

    const inProgressesAmount = document.querySelector(".workflow .in-progresses .in-progress__heading h1 span");

    let amount2 = inProgressesAmount.textContent.match(regex)[0];

    let number2 = Number(amount2);
    number2++
    inProgressesAmount.textContent = `(${number2})`;

}



function removeToCompleted(e) {
    let toDo = e.target.parentNode.parentNode;
    toDo.style.display = 'none';


    let completed = document.createElement('div');
    completedAll.appendChild(completed);
    completed.classList.add('completed');

    let toDoImg = e.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling;
    let toDoImgSrc = toDoImg.src;

    let completedToDo = document.createElement('img');
    completed.appendChild(completedToDo);
    completedToDo.src = toDoImgSrc;
    completedToDo.alt = 'completed';

    let completedOptions = document.createElement('img');
    completed.appendChild(completedOptions);
    completedOptions.src = '../images/workflow/options.png';
    completedOptions.alt = 'three dots';

    let completedTimeBadge = document.createElement('img');
    completed.appendChild(completedTimeBadge);
    completedTimeBadge.src = '../images/workflow/completed-badge.png';
    completedTimeBadge.alt = 'completed';
    completedTimeBadge.classList.add('completed-badge');

    let completedOptionContainer = document.createElement('div');
    completed.appendChild(completedOptionContainer);
    completedOptionContainer.classList.add('option-container3');

    let completedDeleteOption = document.createElement('p');
    completedOptionContainer.appendChild(completedDeleteOption);
    completedDeleteOption.classList.add('delete-option3');
    completedDeleteOption.innerHTML = "delete";

    let completedCompletedOption = document.createElement('p');
    completedOptionContainer.appendChild(completedCompletedOption);
    completedCompletedOption.classList.add('delete-option3');
    completedCompletedOption.innerHTML = "completed";


    const todosAmount = document.querySelector(".workflow .to-do .to-do__heading h1 span");

    let regex = /\d+/;
    let amount = todosAmount.textContent.match(regex)[0];

    let number = Number(amount);
    number--
    todosAmount.textContent = `(${number})`;

    const completedAllAmount = document.querySelector(".workflow .completed-all .completed__heading h1 span");

    let amount3 = completedAllAmount.textContent.match(regex)[0];

    let number3 = Number(amount3);
    number3++
    completedAllAmount.textContent = `(${number3})`;

}





// IN-PROGRESS



function deleteInProgress(e) {
    let ipProgress = e.target.parentNode.parentNode;
    // console.log(ipProgress);
    ipProgress.style.display = 'none';


    const ipProgressesAmount = document.querySelector(".workflow .in-progresses .in-progress__heading h1 span");

    let regex = /\d+/;
    let amount = ipProgressesAmount.textContent.match(regex)[0];

    let number = Number(amount);
    number--
    ipProgressesAmount.textContent = `(${number})`;

}



function removeToCompleted2(e) {
    let ipProgress = e.target.parentNode.parentNode;
    ipProgress.style.display = 'none';


    let completed = document.createElement('div');
    completedAll.appendChild(completed);
    completed.classList.add('completed');

    let ipProgressImg = e.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling;
    let ipProgressImgSrc = ipProgressImg.src;

    let completedToDo = document.createElement('img');
    completed.appendChild(completedToDo);
    completedToDo.src = ipProgressImgSrc;
    completedToDo.alt = 'completed';

    let completedOptions = document.createElement('img');
    completed.appendChild(completedOptions);
    completedOptions.src = '../images/workflow/options.png';
    completedOptions.alt = 'three dots';

    let completedTimeBadge = document.createElement('img');
    completed.appendChild(completedTimeBadge);
    completedTimeBadge.src = '../images/workflow/completed-badge.png';
    completedTimeBadge.alt = 'completed';
    completedTimeBadge.classList.add('completed-badge');



    let completedOptionContainer = document.createElement('div');
    completed.appendChild(completedOptionContainer);
    completedOptionContainer.classList.add('option-container3');

    let completedDeleteOption = document.createElement('p');
    completedOptionContainer.appendChild(completedDeleteOption);
    completedDeleteOption.classList.add('delete-option3');
    completedDeleteOption.innerHTML = "delete";



    const ipProgressesAmount = document.querySelector(".workflow .in-progresses .in-progress__heading h1 span");

    let regex = /\d+/;
    let amount = ipProgressesAmount.textContent.match(regex)[0];

    let number = Number(amount);
    number--
    ipProgressesAmount.textContent = `(${number})`;

    const completedAllAmount = document.querySelector(".workflow .completed-all .completed__heading h1 span");

    let amount3 = completedAllAmount.textContent.match(regex)[0];

    let number3 = Number(amount3);
    number3++
    completedAllAmount.textContent = `(${number3})`;

}

// COMPLETED



function deleteCompleted(e) {
    let completed = e.target.parentNode.parentNode;
    // console.log(completed);
    completed.style.display = 'none';


    const completedAllAmount = document.querySelector(".workflow .completed-all .completed__heading h1 span");

    let regex = /\d+/;
    let amount = completedAllAmount.textContent.match(regex)[0];

    let number = Number(amount);
    number--
    completedAllAmount.textContent = `(${number})`;

}





toDoOptionsButtons.forEach(toDoOptionsButton => {
    toDoOptionsButton.addEventListener('click', openOptions);
});

inProgressOptionsButtons.forEach(inProgressOptionsButton => {
    inProgressOptionsButton.addEventListener('click', openOptions);
});


completedOptionsButtons.forEach(completedOptionsButton => {
    completedOptionsButton.addEventListener('click', openOptions3);
});



deleteOptions.forEach(deleteOption => {
    deleteOption.addEventListener('click', deleteToDo);
});

inProgressOptions.forEach(inProgressOption => {
    inProgressOption.addEventListener('click', removeToInProgress);
});

completedOptions.forEach(completedOption => {
    completedOption.addEventListener('click', removeToCompleted);
});




deleteOptions2.forEach(deleteOption2 => {
    deleteOption2.addEventListener('click', deleteInProgress);
});

completedOptions2.forEach(completedOption2 => {
    completedOption2.addEventListener('click', removeToCompleted2);
});


deleteOptions3.forEach(deleteOption3 => {
    deleteOption3.addEventListener('click', deleteCompleted);
});