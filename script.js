let page = document.querySelector('.page');

page.classList.remove('lighttheme');
page.classList.add('darktheme');
page.classList.remove('darktheme')
page.classList.add('lighttheme')

let button = document.querySelector('.button');

button.onclick = function() {
    page.classList.toggle('darktheme');
    page.classList.toggle('lighttheme');
};