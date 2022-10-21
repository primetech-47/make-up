const navToggle = document.querySelector('.nav-toggle');
const navLInks = document.querySelectorAll('.nav-link');




navToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('nav-open');
    document.body.style.overflow=document.body.style.overflow=='hidden' ? 'auto': 'hidden'
})

navLInks.forEach(link =>{
    link.addEventListener('click', ()=>{
    document.body.classList.remove('nav-open');
    document.body.style.overflow='initial'  
  
    })
})






function scrollr(){
    var right = document.querySelector('.service-container');
    right.scrollBy(200, 0)
}

function scrolll(){
    var left = document.querySelector('.service-container');
    left.scrollBy(-200, 0)
}
function scrollR(){
    var Right = document.querySelector('.team-container');
    Right.scrollBy(300, 0)
}

function scrollL(){
    var Left = document.querySelector('.team-container');
    Left.scrollBy(-300, 0)
}
function scrollBR(){
    var Bright = document.querySelector('.blog-container');
    Bright.scrollBy(300, 0)
}

function scrollBL(){
    var Bleft = document.querySelector('.blog-container');
    Bleft.scrollBy(-300, 0)
}
function scrollf(){
    var foward = document.querySelector('.brand-container');
    foward.scrollBy(300, 0)
}

function scrollb(){
    var backward = document.querySelector('.brand-container');
    backward.scrollBy(-300, 0)
}