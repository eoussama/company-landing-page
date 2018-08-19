document.addEventListener('DOMContentLoaded', () => {
    const
        navbarBurger = document.querySelector('.navbar-burger'),
        menu = document.getElementById(navbarBurger.dataset.target),
        langSelectEn = document.getElementById('langSelectEn'),
        langSelectEs = document.getElementById('langSelectEs'),
        langSelectFr = document.getElementById('langSelectFr'),
        dict = {
            "Home": {
                'en': 'Home',
                'es': 'Inicio',
                'fr': 'Accueil'
            },
            "About": {
                'en': 'About',
                'es': 'A proposito',
                'fr': 'À propos'
            },
            "Contact": {
                'en': 'Contact',
                'es': 'Contacto',
                'fr': 'Contact'
            },
            "Language": {
                'en': 'Language',
                'es': 'Idioma',
                'fr': 'Langue'
            },
            "English": {
                'en': 'English',
                'es': 'Inglés',
                'fr': 'Anglais'
            },
            "Spanish": {
                'en': 'Spanish',
                'es': 'Español',
                'fr': 'Espanol'
            },
            "French": {
                'en': 'French',
                'es': 'Francés',
                'fr': 'Français'
            },
            "all in publi": {
                'en': 'all in advertising',
                'es': 'todos en publicidad',
                'fr': 'tout dans la publicité'
            },
        };

    navbarBurger.addEventListener('click', () => {
        navbarBurger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });

    langSelectEn.addEventListener('click', () => {
        translate(document.body, dict, 'en');
    });

    langSelectEs.addEventListener('click', () => {
        translate(document.body, dict, 'es');
    });

    langSelectFr.addEventListener('click', () => {
        translate(document.body, dict, 'fr');
    });

});