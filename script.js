let page = document.querySelector('body');

page.classList.remove('light-theme');
page.classList.add('dark-theme');
let button = document.querySelector('.button');
button.onclick = function() {
    page.classList.toggle('dark-theme');
    page.classList.toggle('light-theme')
};