/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Activate link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove mobile menu */
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});
/* interval and delay are used to create a fading motion as elements are revealed*/
/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL Experience*/

sr.reveal('.Experience__subtitle',{delay: 400}); 
sr.reveal('.Experience__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 200});

/*SCROLL Languages*/
sr.reveal('.lang__subtitle',{}); 
sr.reveal('.lang__text',{}); 
sr.reveal('.lang__data',{interval: 200}); 
sr.reveal('.lang__img',{delay: 600});

/*SCROLL Education using*/
sr.reveal('.Education section',{interval: 200}); 
sr.reveal('.Education section',{delay:400});

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 




