// Script for navigation bar
const bar = document.querySelector('#mobile');
const nav = document.querySelector('.navbar')
const cls = document.querySelector('#close')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    }) 
}

if (cls) {
    cls.addEventListener('click', () => {
        nav.classList.remove('active')
    }) 
}

