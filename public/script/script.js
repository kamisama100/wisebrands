//menu 
const navBar = document.querySelector('nav');
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const children = mobileMenu.querySelectorAll('a');
const menuImage = mobileMenu.querySelectorAll('img');

openMenu.addEventListener('click', e =>{
    e.preventDefault();

    navBar.classList.add('hidden');
    mobileMenu.classList.replace('hidden', 'block');
});
closeMenu.addEventListener('click', e =>{
    e.preventDefault();

    navBar.classList.remove('hidden');
    mobileMenu.classList.replace('block', 'hidden');
});

children.forEach(el =>{
    el.addEventListener('click', e =>{
        mobileMenu.classList.replace('block','hidden');
    })
});

//nav color
const nav = document.querySelector('nav');
const domainBtn = nav.querySelectorAll('li a');

window.addEventListener('scroll', ()=>{
    if (window.scrollY >= 32) {
        nav.style.backgroundColor = '#F6B8A9';
        menuImage[0].classList.replace('top-12','top-2');
        menuImage[1].classList.replace('top-14','top-4');
        domainBtn[4].classList.replace('bg-secondary' , 'bg-gray');
    }else{
        nav.style.backgroundColor = '#F3F5F5';
        domainBtn[4].classList.replace('bg-gray' , 'bg-secondary');
        menuImage[0].classList.replace('top-2','top-12');
        menuImage[1].classList.replace('top-4','top-14');
    }
});

// carousels
if(window.location.hostname === 'localhost' && window.location.pathname === '/'){   
    var domains = new Splide('#domains', {
        speed: 1000,
        perPage: 1,
        perMove: 1,
        pagination: true,
        mediaQuery: 'min',
        breakpoints: {
            1280:{ 
                padding: {left:100},
                gap:-331,
                pagination:true,
            },
            780:{
                padding: {left:0, right:0},
                gap:-246,
                pagination: false,
            },
            320:{
                gap: -134,
                pagination:false,
            }
        }
    }).mount();

    var testimonials = new Splide('#testimonials',{
        type: 'loop',
        pagination: true,
        gap:300
    }).mount();

    var partners = new Splide('#partners',{
        type: 'loop',
        gap:300
    }).mount();
    /*
    const partner = document.querySelectorAll('.partner');
    partner.forEach(el=>{
        el.addEventListener('mouseenter', e=>{
            e.preventDefault();
            
            el.classList.add('text-white');
            el.classList.replace('bg-secondary', 'bg-primary')
        });
        el.addEventListener('mouseleave', e=>{
            e.preventDefault();
            
            el.classList.remove('text-white');
            el.classList.replace('bg-primary', 'bg-secondary')
        });
    });*/
}

//dropdown paragraph
function showHideText(p, arrow) {
    p.classList.contains('hidden') ? p.classList.remove('hidden') : p.classList.add('hidden');
    arrow.setAttribute("src", arrow.getAttribute("src") == 'images/icons/down-arrow.svg' ? 'images/icons/up-arrow.svg' : 'images/icons/down-arrow.svg');
}

//email validation.
function emailValidation(email){
    const emailFail = document.getElementById('email-fail');
    const emailCont = document.getElementById('email-cont');
    const subscribe = document.getElementById('subscribe');

    const mailformat = /^[^\s@]+@(?:(?!\\.)[^\s@])+(?:\.(?!\\.)[^\s@]+)+$/;
    if(email.match(mailformat)){
        subscribe.classList.add('hidden');
        emailCont.classList.replace('hidden', 'flex');
        emailFail.classList.replace('block', 'hidden');
        return true;
    }
    else{
        emailFail.classList.replace('hidden', 'block');
        return false;
    }
}
function emailValidationTwo(email, fail, success, emailCont){
    const mailformat = /^[^\s@]+@(?:(?!\\.)[^\s@])+(?:\.(?!\\.)[^\s@]+)+$/;

    if(email.value.match(mailformat)){
        emailCont.classList.add('hidden');
        success.classList.replace('hidden', 'flex');
        return true;
    }
    else{
        fail.classList.replace('hidden', 'block');
        return false;
    }
}
