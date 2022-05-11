let burger = document.querySelector('.icon-menu');
let menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'none' ? 'flex' : 'none'; 
})