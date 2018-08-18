document.addEventListener('DOMContentLoaded', () => {
    const
        navbarBurger = document.querySelector('.navbar-burger'),
        menu = document.getElementById(navbarBurger.dataset.target);

    navbarBurger.addEventListener('click', () => {
        navbarBurger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
});