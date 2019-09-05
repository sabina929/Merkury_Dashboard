jQuery(document).ready(function ($) {

    $('.easy-pie-chart-1').easyPieChart({
        easing: 'easeOutBounce',
        barColor: '#5484ff',
        scaleColor: false,
        trackColor: '#dadee7',
        rotate: 180,
        lineWidth: 10,
        onStep: function (from, to, percent) {
            $(this.el).find('.percent1').text(Math.round(percent));
        }
    });
    $('.easy-pie-chart-2').easyPieChart({
        easing: 'easeOutBounce',
        barColor: '#aa5fb9',
        scaleColor: false,
        trackColor: '#dadee7',
        rotate: 180,
        lineWidth: 10,
        onStep: function (from, to, percent) {
            $(this.el).find('.percent2').text(Math.round(percent));
        }
    });
    $('.easy-pie-chart-3').easyPieChart({
        easing: 'easeOutBounce',
        barColor: '#f83c7b',
        trackColor: '#dadee7',
        scaleColor: false,
        rotate: 180,
        lineWidth: 10,
        onStep: function (from, to, percent) {
            $(this.el).find('.percent3').text(Math.round(percent));
        }
    });
});

// let chartThree = document.querySelector('.easy-pie-chart-3');

let editOne = document.querySelector(".editing1>span:nth-child(1)");
let editTwo = document.querySelector(".editing2>span:nth-child(1)");
let editThree = document.querySelector(".editing3>span:nth-child(1)");

let editSalesOne = document.querySelector(".editing1>p");
let editSalesTwo = document.querySelector(".editing2>p");
let editSalesThree = document.querySelector(".editing3>p");



const editButton = document.querySelector('.total-sales img:nth-child(2)');
const deleteButton = document.querySelector('.total-sales img:nth-child(3)');
// console.log(editButton);



let timesClicked = 1;

editButton.addEventListener('click', checkTimesClicked);
deleteButton.addEventListener('click', clearCharts);

function clearCharts() {
    let string = editOne.innerHTML = '0';
    let string2 = editTwo.innerHTML = '0';
    let string3 = editThree.innerHTML = '0';

    let number = Number(string);
    let number2 = Number(string2);
    let number3 = Number(string3);

    let chartOne = document.querySelector('.easy-pie-chart-1');
    let percentOne = chartOne.dataset.percent;
    percentOne = `${number}`;
    chartOne.dataset.percent = percentOne;

    let spanOne = document.querySelector('.percent1');

    new EasyPieChart(chartOne, {
        easing: 'easeOutBounce',
        barColor: '#5484ff',
        trackColor: '#dadee7',
        scaleColor: false,
        rotate: 180,
        lineWidth: 10
    });




    //------

    let chartTwo = document.querySelector('.easy-pie-chart-2');
    let percentTwo = chartTwo.dataset.percent;
    percentTwo = `${number2}`;
    chartTwo.dataset.percent = percentTwo;

    let spanTwo = document.querySelector('.percent2');

    new EasyPieChart(chartTwo, {
        easing: 'easeOutBounce',
        barColor: '#aa5fb9',
        trackColor: '#dadee7',
        scaleColor: false,
        rotate: 180,
        lineWidth: 10
    });



    //------

    let chartThree = document.querySelector('.easy-pie-chart-3');
    let percentThree = chartThree.dataset.percent;
    percentThree = `${number3}`;
    chartThree.dataset.percent = percentThree;

    let spanThree = document.querySelector('.percent3');

    new EasyPieChart(chartThree, {
        easing: 'easeOutBounce',
        barColor: '#f83c7b',
        trackColor: '#dadee7',
        scaleColor: false,
        rotate: 180,
        lineWidth: 10
    });


    spanOne.innerHTML = percentOne;
    spanTwo.innerHTML = percentTwo;
    spanThree.innerHTML = percentThree;

    // console.log(chartOne, chartTwo, chartThree);
}

function checkTimesClicked() {
    if (timesClicked === 1) {
        makeContenteditableTrue();

    } else if (timesClicked === 2) {

        makeContenteditableFalse();
    }
}

function makeContenteditableTrue() {
    editOne.contentEditable = true;
    editOne.focus();
    editOne.style.outline = '1.8px solid #95b3fd';
    editOne.style.padding = '3px';
    editTwo.contentEditable = true;
    editTwo.style.outline = '1.8px solid #95b3fd';
    editTwo.style.padding = '3px';
    editThree.contentEditable = true;
    editThree.style.outline = '1.8px solid #95b3fd';
    editThree.style.padding = '3px';

    editSalesOne.contentEditable = true;
    editSalesOne.style.outline = '1.8px solid #95b3fd';
    editSalesOne.style.padding = '3px';
    editSalesOne.style.marginTop = '3px';
    editSalesTwo.contentEditable = true;
    editSalesTwo.style.outline = '1.8px solid #95b3fd';
    editSalesTwo.style.padding = '3px';
    editSalesTwo.style.marginTop = '3px';
    editSalesThree.contentEditable = true;
    editSalesThree.style.outline = '1.8px solid #95b3fd';
    editSalesThree.style.padding = '3px';
    editSalesThree.style.marginTop = '3px';

    // console.log(editOne.contentEditable);
    // console.log(editTwo.contentEditable);
    // console.log(editThree.contentEditable);

    timesClicked = 2;
}

function makeContenteditableFalse() {
    editOne.contentEditable = false;
    editOne.style.outline = 'none';
    editOne.style.padding = '0px';
    editTwo.contentEditable = false;
    editTwo.style.outline = 'none';
    editTwo.style.padding = '0px';
    editThree.contentEditable = false;
    editThree.style.outline = 'none';
    editThree.style.padding = '0px';


    editSalesOne.contentEditable = false;
    editSalesOne.style.outline = 'none';
    editSalesOne.style.padding = '0px';
    editSalesOne.style.marginTop = '0px';
    editSalesTwo.contentEditable = false;
    editSalesTwo.style.outline = 'none';
    editSalesTwo.style.padding = '0px';
    editSalesTwo.style.marginTop = '0px';
    editSalesThree.contentEditable = false;
    editSalesThree.style.outline = 'none';
    editSalesThree.style.padding = '0px';
    editSalesThree.style.marginTop = '0px';

    // console.log(editOne.contentEditable);
    // console.log(editTwo.contentEditable);
    // console.log(editThree.contentEditable);

    timesClicked = 1;
}



// console.log(editOne);
// console.log(editTwo);
// console.log(editThree);


// let percentThree = chartThree.dataset.percent;

editOne.addEventListener('input', changeChartPercentageOne);
editTwo.addEventListener('input', changeChartPercentageTwo);
editThree.addEventListener('input', changeChartPercentageThree);

function changeChartPercentageOne() {
    let string = editOne.innerHTML;
    let string2 = editTwo.innerHTML;
    let string3 = editThree.innerHTML;
    let number = Number(string);
    let number2 = Number(string2);
    let number3 = Number(string3);
    let mid = Math.floor((number / (number + number2 + number3)) * 100);
    let mid2 = Math.floor((number2 / (number + number2 + number3)) * 100);
    let mid3 = Math.floor((number3 / (number + number2 + number3)) * 100);
    // console.log(Math.floor(mid));
    // console.log(number);
    let chartOne = document.querySelector('.easy-pie-chart-1');
    let percentOne = chartOne.dataset.percent;
    percentOne = `${mid}`;
    // console.log(percentOne);
    chartOne.dataset.percent = percentOne;
    // console.log(chartOne);
    let chartTwo = document.querySelector('.easy-pie-chart-2');
    let percentTwo = chartTwo.dataset.percent;
    percentTwo = `${mid2}`;
    // console.log(percentTwo);
    chartTwo.dataset.percent = percentTwo;

    let chartThree = document.querySelector('.easy-pie-chart-3');
    let percentThree = chartThree.dataset.percent;
    percentThree = `${mid3}`;
    // console.log(percentThree);
    chartThree.dataset.percent = percentThree;
    // console.log(chartThree);

    let spanOne = document.querySelector('.percent1');

    new EasyPieChart(chartOne, {
        easing: 'easeOutBounce',
        barColor: '#5484ff',
        trackColor: '#dadee7',
        scaleColor: false,
        rotate: 180,
        lineWidth: 10
    });

    if (string === '' || percentOne === 'NaN') {
        spanOne.innerHTML = '0';
    } else {
        spanOne.innerHTML = percentOne;
    }

    let spanTwo = document.querySelector('.percent2');

    new EasyPieChart(chartTwo, {
        easing: 'easeOutBounce',
        barColor: '#aa5fb9',
        trackColor: '#dadee7',
        scaleColor: false,
        rotate: 180,
        lineWidth: 10
    });


    if (string2 === '' || percentTwo === 'NaN') {
        spanTwo.innerHTML = '0';
    } else {
        spanTwo.innerHTML = percentTwo;
    }


    let spanThree = document.querySelector('.percent3');

    new EasyPieChart(chartThree, {
        easing: 'easeOutBounce',
        barColor: '#f83c7b',
        trackColor: '#dadee7',
        scaleColor: false,
        rotate: 180,
        lineWidth: 10
    });


    if (string3 === '' || percentThree === 'NaN') {
        spanThree.innerHTML = '0';
    } else {
        spanThree.innerHTML = percentThree;
    }

}




function changeChartPercentageTwo() {
    let string = editOne.innerHTML;
    let string2 = editTwo.innerHTML;
    let string3 = editThree.innerHTML;
    let number = Number(string);
    let number2 = Number(string2);
    let number3 = Number(string3);
    let mid = Math.floor((number / (number + number2 + number3)) * 100);
    let mid2 = Math.floor((number2 / (number + number2 + number3)) * 100);
    let mid3 = Math.floor((number3 / (number + number2 + number3)) * 100);
    // console.log(Math.floor(mid));
    // console.log(number);
    let chartOne = document.querySelector('.easy-pie-chart-1');
    let percentOne = chartOne.dataset.percent;
    percentOne = `${mid}`;
    // console.log(percentOne);
    chartOne.dataset.percent = percentOne;
    // console.log(chartOne);
    let chartTwo = document.querySelector('.easy-pie-chart-2');
    let percentTwo = chartTwo.dataset.percent;
    percentTwo = `${mid2}`;
    // console.log(percentTwo);
    chartTwo.dataset.percent = percentTwo;

    let chartThree = document.querySelector('.easy-pie-chart-3');
    let percentThree = chartThree.dataset.percent;
    percentThree = `${mid3}`;
    // console.log(percentThree);
    chartThree.dataset.percent = percentThree;
    // console.log(chartThree);

    let spanOne = document.querySelector('.percent1');

    new EasyPieChart(chartOne, {
        easing: 'easeOutBounce',
        barColor: '#5484ff',
        trackColor: '#dadee7',
        scaleColor: false,
        rotate: 180,
        lineWidth: 10
    });


    if (string === '' || percentOne === 'NaN') {
        spanOne.innerHTML = '0';
    } else {
        spanOne.innerHTML = percentOne;
    }



    let spanTwo = document.querySelector('.percent2');

    new EasyPieChart(chartTwo, {
        easing: 'easeOutBounce',
        barColor: '#aa5fb9',
        trackColor: '#dadee7',
        scaleColor: false,
        rotate: 180,
        lineWidth: 10
    });

    if (string2 === '' || percentTwo === 'NaN') {
        spanTwo.innerHTML = '0';
    } else {
        spanTwo.innerHTML = percentTwo;
    }

    let spanThree = document.querySelector('.percent3');

    new EasyPieChart(chartThree, {
        easing: 'easeOutBounce',
        barColor: '#f83c7b',
        trackColor: '#dadee7',
        scaleColor: false,
        rotate: 180,
        lineWidth: 10
    });

    if (string3 === '' || percentThree === 'NaN') {
        spanThree.innerHTML = '0';
    } else {
        spanThree.innerHTML = percentThree;
    }
}


function changeChartPercentageThree() {
    let string = editOne.innerHTML;
    let string2 = editTwo.innerHTML;
    let string3 = editThree.innerHTML;
    let number = Number(string);
    let number2 = Number(string2);
    let number3 = Number(string3);
    let mid = Math.floor((number / (number + number2 + number3)) * 100);
    let mid2 = Math.floor((number2 / (number + number2 + number3)) * 100);
    let mid3 = Math.floor((number3 / (number + number2 + number3)) * 100);
    // console.log(Math.floor(mid));
    // console.log(number);
    let chartOne = document.querySelector('.easy-pie-chart-1');
    let percentOne = chartOne.dataset.percent;
    percentOne = `${mid}`;
    // console.log(percentOne);
    chartOne.dataset.percent = percentOne;
    // console.log(chartOne);
    let chartTwo = document.querySelector('.easy-pie-chart-2');
    let percentTwo = chartTwo.dataset.percent;
    percentTwo = `${mid2}`;
    // console.log(percentTwo);
    chartTwo.dataset.percent = percentTwo;

    let chartThree = document.querySelector('.easy-pie-chart-3');
    let percentThree = chartThree.dataset.percent;
    percentThree = `${mid3}`;
    // console.log(percentThree);
    chartThree.dataset.percent = percentThree;
    // console.log(chartThree);

    let spanOne = document.querySelector('.percent1');

    new EasyPieChart(chartOne, {
        easing: 'easeOutBounce',
        barColor: '#5484ff',
        trackColor: '#dadee7',
        scaleColor: false,
        rotate: 180,
        lineWidth: 10
    });

    if (string === '' || percentOne === 'NaN') {
        spanOne.innerHTML = '0';
    } else {
        spanOne.innerHTML = percentOne;
    }



    let spanTwo = document.querySelector('.percent2');

    new EasyPieChart(chartTwo, {
        easing: 'easeOutBounce',
        barColor: '#aa5fb9',
        trackColor: '#dadee7',
        scaleColor: false,
        rotate: 180,
        lineWidth: 10
    });

    if (string2 === '' || percentTwo === 'NaN') {
        spanTwo.innerHTML = '0';
    } else {
        spanTwo.innerHTML = percentTwo;
    }

    let spanThree = document.querySelector('.percent3');

    new EasyPieChart(chartThree, {
        easing: 'easeOutBounce',
        barColor: '#f83c7b',
        trackColor: '#dadee7',
        scaleColor: false,
        rotate: 180,
        lineWidth: 10
    });

    if (string3 === '' || percentThree === 'NaN') {
        spanThree.innerHTML = '0';
    } else {
        spanThree.innerHTML = percentThree;
    }
}