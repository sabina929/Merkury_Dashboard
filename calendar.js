const previousButton = document.querySelector('.previous-arrow');
const nextButton = document.querySelector('.next-arrow');


previousButton.addEventListener('click', goToPrevious);
nextButton.addEventListener('click', goToNext);


let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function goToPrevious() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function goToNext() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}



function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let lastDay = (daysInMonth) % 4 + firstDay - 1;
    if (lastDay >= 7) {
        lastDay = lastDay - 7;
    }

    let weeks = Math.floor(daysInMonth / 7);




    // console.log(firstDay)
    // console.log(lastDay)
    // console.log(weeks)


    let calendarBody = document.querySelector('.calendar__second-row');
    calendarBody.innerHTML = '<div class="week">Mon</div><div class="week">Tue</div><div class="week">Wed</div><div class="week">Thu</div><div class="week">Fri</div><div class="week">Sat</div><div class="week">Sun</div>';

    monthAndYear.innerHTML = months[month] + " " + year;


    let date = 1;
    for (let i = 0; i < 7; i++) {


        for (let j = 0; j < 6; j++) {
            if (i === 0 && j < firstDay) {
                let dateDiv = document.createElement("div");
                let divText = document.createTextNode("");
                dateDiv.appendChild(divText);
                dateDiv.classList.add('date');
                calendarBody.appendChild(dateDiv);
            } else if (date > daysInMonth) {

                // console.log(date);
                date = 1;

            } else {
                let dateDiv = document.createElement("div");

                let divText = document.createTextNode(date);
                console.log(divText);

                dateDiv.classList.add('date');


                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    dateDiv.classList.add("today-bg");
                }
                dateDiv.appendChild(divText);
                calendarBody.appendChild(dateDiv);

                // let today2 = new Date();
                // let nextMonth = (today2.getMonth()) + 1;
                // console.log(months[nextMonth])

                // let firstDay = (new Date(year, month)).getDay();
                // if (date < daysInMonth) {
                date++;


                // console.log(date);
                // }

            }
        }
    }

}

// else if (i === 7 && j > lastDay) {

//     console.log(i);
//     let dateDiv = document.createElement("div");
//     let divText = document.createTextNode("");
//     dateDiv.appendChild(divText);
//     dateDiv.classList.add('date');
//     calendarBody.appendChild(dateDiv);

// }