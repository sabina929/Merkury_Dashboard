const wrapper = document.querySelector('.wrapper');
const loginSection = document.querySelector('#login');


function loading() {
    setTimeout(() => {
        wrapper.style.opacity = 0;
        wrapper.style.display = 'none';

        loginSection.style.display = 'block';
        setTimeout(() => (loginSection.style.opacity = 1), 65);


    }, 5000);
}

loading();