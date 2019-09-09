const closeIcon = document.querySelector('#tooltip-wrapper>img');
const tooltipWrapper = document.querySelector('#tooltip-wrapper');
const showButton = document.querySelector('.calendar__second-row div.date.date-2 .event');
const tooltipEditButton = document.querySelector('#tooltip-wrapper .tooltip-container .tooltip-container-third button');
// const paragOne = document.querySelector('#tooltip-wrapper .tooltip-container .tooltip-container-first>p');
const paragTwo = document.querySelector('#tooltip-wrapper .tooltip-container .tooltip-container-first>div>div p:nth-child(1)');
const paragThree = document.querySelector('#tooltip-wrapper .tooltip-container .tooltip-container-first>div>div p:nth-child(2)');
const rightParags = document.querySelectorAll('#tooltip-wrapper .tooltip-container .tooltip-container-second .tooltip-container-second-right p:not(:last-child)');
const rightParagsLastChild = document.querySelector('#tooltip-wrapper .tooltip-container .tooltip-container-second .tooltip-container-second-right p:last-child');
const rightParagsFirstChild = document.querySelector('#tooltip-wrapper .tooltip-container .tooltip-container-second .tooltip-container-second-right p:first-child');
// const overlay1 = document.querySelector('#tooltip-wrapper .tooltip-container .tooltip-container-first');
const overlay2 = document.querySelector('.home-bg img');

closeIcon.addEventListener('click', closeTooltipWrapper);
showButton.addEventListener('click', openTooltipWrapper);
tooltipEditButton.addEventListener('click', makeContentEditableTrue);
// overlay1.addEventListener('click', makeContentEditableFalse);
overlay2.addEventListener('click', makeContentEditableFalse);
rightParagsFirstChild.addEventListener('input', changeEventContent);


function closeTooltipWrapper() {
    setTimeout(() => {
        tooltipWrapper.style.opacity = "0";
        setTimeout(() => {
            tooltipWrapper.style.display = "none";
        }, 280);
    }, 450);

    tooltipWrapper.style.animation = "scale1 .45s ease forwards";

}

function openTooltipWrapper() {

    setTimeout(() => {
        tooltipWrapper.style.animation = "scale2 .45s ease forwards";
        setTimeout(() => {
            tooltipWrapper.style.opacity = "1";
        }, 10);
    }, 280);
    tooltipWrapper.style.display = "block";

}

function makeContentEditableTrue() {
    // paragOne.contentEditable = true;
    // paragOne.style.outline = "1px solid rgba(14, 26, 53,.2)";
    // paragOne.style.padding = "2px 4px 2px 4px";
    // paragOne.style.marginRight = "40px";

    paragTwo.contentEditable = true;
    paragTwo.style.outline = "1px solid rgba(14, 26, 53,.2)";
    paragTwo.style.padding = "2px 4px 2px 4px";

    paragThree.contentEditable = true;
    paragThree.style.outline = "1px solid rgba(14, 26, 53,.2)";
    paragThree.style.padding = "2px 4px 2px 4px";

    rightParags.forEach(rightParag => {
        rightParag.contentEditable = true;
        rightParag.style.outline = "1px solid rgba(14, 26, 53,.2)";
        rightParag.style.padding = "3.4px 5px 3.4px 5px";
        rightParag.style.marginRight = "5px";
        rightParag.style.marginTop = "-2px";
        rightParag.style.marginBottom = "6px";
    });

    rightParagsLastChild.contentEditable = true;
    rightParagsLastChild.style.outline = "1px solid rgba(14, 26, 53,.2)";
    rightParagsLastChild.style.padding = "3.4px 5px 3.4px 5px";
    rightParagsLastChild.style.marginRight = "5px";
    rightParagsLastChild.style.marginTop = "-2px";
    rightParagsLastChild.style.marginBottom = "6px";

}

function makeContentEditableFalse() {
    // paragOne.contentEditable = false;
    // paragOne.style.outline = "none";
    // paragOne.style.padding = "0px";
    // paragOne.style.marginRight = "20px";

    paragTwo.contentEditable = false;
    paragTwo.style.outline = "none";
    paragTwo.style.padding = "0px";

    paragThree.contentEditable = false;
    paragThree.style.outline = "none";
    paragThree.style.padding = "0px";

    rightParags.forEach(rightParag => {
        rightParag.contentEditable = false;
        rightParag.style.outline = "none";
        rightParag.style.padding = "0px";
        rightParag.style.paddingBottom = "11.4px";
        rightParag.style.marginRight = "9px";
        rightParag.style.marginTop = "0px";
        rightParag.style.marginBottom = "0px";
    });

    rightParagsLastChild.contentEditable = false;
    rightParagsLastChild.style.outline = "none";
    rightParagsLastChild.style.padding = "0px";
    rightParagsLastChild.style.paddingBottom = "0px";
    rightParagsLastChild.style.marginRight = "9px";
    rightParagsLastChild.style.marginTop = "0px";
    rightParagsLastChild.style.marginBottom = "0px";
}

function changeEventContent() {
    let content = rightParagsFirstChild.innerHTML;
    // console.log(showButton.innerHTML.length);
    // console.log(content);
    // console.log(content.length);

    if (content.length > 18) {
        let extractedstring = content.slice(0, 18);
        // console.log(content.length);
        // console.log(extractedstring.length);
        showButton.innerHTML = `${extractedstring}...`;
    } else {
        showButton.innerHTML = content;
    }
}