let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop = 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

// Tugma elementi
const backToTopButton = document.getElementById('backToTop');

// Sahifa scroll bo'lganda tugmani ko'rsatish
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Tugmaga bosilganda yuqoriga qaytish
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

new WOW().init();
new WOW({
  boxClass: 'wow',       
  animateClass: 'animate__animated', 
  offset: 80,      
  mobile: true,       
  live: true             
}).init();

// Scroll foizini aniqlash va animatsiyani faollashtirish
const handleScroll = () => {
  const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.5; 

    if (sectionTop < triggerPoint && scrollPercent >= 50) {
      section.classList.add('show'); 
    }
  });
};

// Scroll va yuklanish hodisalari
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
// ------------------------------------------//
window.addEventListener('load', function() {
  const loaderWrapper = document.querySelector('.loader-wrapper');
  const content = document.querySelector('.content');

  // Loader tugagach, sahifa tarkibini ko'rsatish
  loaderWrapper.addEventListener('animationend', function() {
    loaderWrapper.style.display = 'none'; 
    // content.classList.add('show'); 
  });
});


