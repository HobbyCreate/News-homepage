const navbarButton = document.querySelector('.navbar-button');
const navbarMenu = document.querySelector('.navbar-menu');

navbarButton.addEventListener('click', function () {
    navbarButton.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});