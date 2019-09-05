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

let chartThree = document.querySelector('.easy-pie-chart-3');

let editOne = document.querySelector(".editing1>span:nth-child(1)");
let editTwo = document.querySelector(".editing2>span:nth-child(1)");
let editThree = document.querySelector(".editing3>span:nth-child(1)");

const editButton = document.querySelector('.total-sales img:nth-child(2)');
// console.log(editButton);



let timesClicked = 1;

editButton.addEventListener('click', checkTimesClicked);

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

    // console.log(editOne.contentEditable);
    // console.log(editTwo.contentEditable);
    // console.log(editThree.contentEditable);

    timesClicked = 1;
}



// console.log(editOne);
// console.log(editTwo);
// console.log(editThree);


let percentThree = chartThree.dataset.percent;

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

    spanOne.innerHTML = percentOne;


    let spanTwo = document.querySelector('.percent2');

    new EasyPieChart(chartTwo, {
        easing: 'easeOutBounce',
        barColor: '#aa5fb9',
        trackColor: '#dadee7',
        scaleColor: false,
        rotate: 180,
        lineWidth: 10
    });

    spanTwo.innerHTML = percentTwo;

    let spanThree = document.querySelector('.percent3');

    new EasyPieChart(chartThree, {
        easing: 'easeOutBounce',
        barColor: '#f83c7b',
        trackColor: '#dadee7',
        scaleColor: false,
        rotate: 180,
        lineWidth: 10
    });

    spanThree.innerHTML = percentThree;
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

    spanOne.innerHTML = percentOne;


    let spanTwo = document.querySelector('.percent2');

    new EasyPieChart(chartTwo, {
        easing: 'easeOutBounce',
        barColor: '#aa5fb9',
        trackColor: '#dadee7',
        scaleColor: false,
        rotate: 180,
        lineWidth: 10
    });

    spanTwo.innerHTML = percentTwo;

    let spanThree = document.querySelector('.percent3');

    new EasyPieChart(chartThree, {
        easing: 'easeOutBounce',
        barColor: '#f83c7b',
        trackColor: '#dadee7',
        scaleColor: false,
        rotate: 180,
        lineWidth: 10
    });

    spanThree.innerHTML = percentThree;
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

    spanOne.innerHTML = percentOne;


    let spanTwo = document.querySelector('.percent2');

    new EasyPieChart(chartTwo, {
        easing: 'easeOutBounce',
        barColor: '#aa5fb9',
        trackColor: '#dadee7',
        scaleColor: false,
        rotate: 180,
        lineWidth: 10
    });

    spanTwo.innerHTML = percentTwo;

    let spanThree = document.querySelector('.percent3');

    new EasyPieChart(chartThree, {
        easing: 'easeOutBounce',
        barColor: '#f83c7b',
        trackColor: '#dadee7',
        scaleColor: false,
        rotate: 180,
        lineWidth: 10
    });

    spanThree.innerHTML = percentThree;
}