const menuBar = document.querySelector('#menu-bar');
const navLinks = document.querySelector('.nav-links');
const bar = menuBar.children[0]; // select i element 


menuBar.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        bar.classList.toggle('fa-xmark')
});