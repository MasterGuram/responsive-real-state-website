/* CHANGE BACKGROUND HEADER */
function scrollHeader(){
    const header = document.getElementById('header')
    // When scroll is > 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* SWIPER POPULAR */
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


/* VALUE ACCORDION */


/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id');
              
        const link = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');
        
        if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        }
    });
}

// Example: Add event listener to trigger function on scroll
window.addEventListener('scroll', scrollActive);

// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight,
//               sectionTop = current.offsetTop - 58,
//               sectionId = current.getAttribute('id')
              
//     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//         document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//     }else{
//         document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//     }
//     })
// }

/* SHOW SCROLL UP */ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
}
window.addEventListener('scroll', scrollUp)

/* DARK LIGHT THEME */ 


/* SCROLL REVEAL ANIMATION */
