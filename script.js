const themeBtn = document.getElementById('set-theme');
const body = document.querySelector('body');

themeBtn.addEventListener('click', e => {
    if(body.classList.contains('theme-bright')) {
        body.classList.remove('theme-bright');
        body.classList.add('theme-dark');
    } else {
        body.classList.remove('theme-dark');
        body.classList.add('theme-bright');
    }
    console.log(body);
})