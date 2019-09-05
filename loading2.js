const wrapper = document.querySelector('.wrapper');
const homeSection = document.querySelector('#home');


function loading() {
    setTimeout(() => {
        wrapper.style.opacity = 0;
        wrapper.style.display = 'none';

        homeSection.style.display = 'block';
        setTimeout(() => (homeSection.style.opacity = 1), 65);


    }, 1600);
}

loading();