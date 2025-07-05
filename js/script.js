//toggle class active

const navbarNav = document.querySelector('.navbar-nav');
//hamburger klik

document.querySelector('#hamburger-menu').onclick=() =>{

navbarNav.classList.toggle('active')
};

//klik untuk ngilangin nav

const hamburger = document.querySelector('#hamburger-menu')

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})