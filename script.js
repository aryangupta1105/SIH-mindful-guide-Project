const navMenu = document.querySelector('.Burger');
const menu = document.querySelector('.Menu');

function toggleMenu() {
    if (!navMenu.classList.contains('active')) {
        navMenu.classList.add('active');
        menu.classList.remove('hidden');
    } else {
        navMenu.classList.remove('active');
        menu.classList.add('hidden');
    }
}

navMenu.addEventListener('click', toggleMenu);
