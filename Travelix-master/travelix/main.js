//Selectors
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

window.addEventListener('scroll',function(){
    let WindowPosition = window.scrollY>0;
    header.classList.toggle('active',WindowPosition)

})

hamburgerMenu.addEventListener('click',function(){
    header.classList.toggle('menu-open');
})