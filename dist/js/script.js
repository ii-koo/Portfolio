// line transition

const animate = document.querySelector('#animate');
const navMenu = document.querySelector('#nav-menu');

animate.addEventListener('click', function(){
    animate.classList.toggle('animate-active');
    navMenu.classList.toggle('hidden');
})


// navbar fixed

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNavbar = header.offsetTop;
    const toTop = document.querySelector('#toTop')

    if(window.pageYOffset > fixedNavbar){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fiexed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// klik diluar 3-line
window.addEventListener('click', function (e){
    if(e.target != animate && e.target !=navMenu){
        animate.classList.remove('animate-active')
        navMenu.classList.add('hidden')
    }
})


// Darkmode toggle

const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')

darkToggle.addEventListener('click', function(){
    if(darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark'
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light'
    }
})

// Check toggle
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }