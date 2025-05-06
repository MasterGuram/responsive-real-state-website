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

// Value
const accordItems = document.querySelectorAll('.value__accord-item')

accordItems.forEach((item) =>{
    const accordHeader = item.querySelector('.value__accord-header')

    accordHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accord-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordContent = item.querySelector('.value__accord-content')

    if(item.classList.contains('accord-open')){
        accordContent.removeAttribute('style')
        item.classList.remove('accord-open')
    }else{
        accordContent.style.height = accordContent.scrollHeight + 'px'
        item.classList.add('accord-open')
    }
}

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

/* SHOW SCROLL UP */ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
}
window.addEventListener('scroll', scrollUp)

/* DARK LIGHT THEME */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconMoon = 'bx-moon';
const iconSun = 'bx-sun';
// Get previously selected theme and icon from localStorage
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
// Apply the saved theme and icon on page load
if (selectedTheme) {
    document.body.classList.toggle(darkTheme, selectedTheme === 'dark');
    themeButton.classList.remove(iconMoon, iconSun);
    themeButton.classList.add(selectedTheme === 'dark' ? iconSun : iconMoon);
}

// Toggle theme and icon on button click
themeButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle(darkTheme);

    // Remove both icons and add the correct one
    themeButton.classList.remove(iconMoon, iconSun);
    themeButton.classList.add(isDark ? iconSun : iconMoon);

    // Save the selected theme and icon
    localStorage.setItem('selected-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('selected-icon', isDark ? iconSun : iconMoon);
});

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 100,
    // reset: true
})

sr.reveal(`.home__title, .popular__container`)
sr.reveal(`.home__description`, {delay: 400})
sr.reveal(`.home__search`, {delay: 200})
sr.reveal(`.home__value`, {delay: 300})
sr.reveal(`.home__images, .footer__container`, {delay: 300, origin: 'bottom'})
sr.reveal(`.logos__img`, {interval: 100})
sr.reveal(`.contact__content, .contact__title, .card-left`, {origin: 'left'})
sr.reveal(`.contact__images, .card-right`, {origin: 'right'})
sr.reveal(`.subscribe__container`, {scale: 0.5})
sr.reveal(`.agents_pro`, {origin: 'bottom'})

