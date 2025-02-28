// Barcha card elementlarini olish
const cards = document.querySelectorAll('.card');

// Har bir kartaga turli xil fon rasmlari
const bgImages = [
  'url("./assets/img/valute.png")',
  'url("./assets/img/gif.app.png")',
  'url("./assets/img/WeatherApp.png")',
  'url("./assets/img/exploreasia.png")',
  'url("./assets/img/wonderful-island.png")',
  'url("./assets/img/uzb-old.png")',
  'url("./assets/img/hajjumrah.png")',
  'url("./assets/img/assistant-ai.png")',
  'url("./assets/img/chip-dip.png")',
  'url("./assets/img/about-me.png")',
  'url("./assets/img/dashboard.png")',
  'url("./assets/img/zetmarket.png")',
  'url("./assets/img/Rent car.png")',
  'url("/assets/img/namoz vaqtlari.png")',
  'url("/assets/img/movies.png")',
  'url("/assets/img/todo-app.png")',
  'url("/assets/img/next-store.png")',
  'url("/assets/img/SpaceR.jpg")',
  'url("/assets/img/burger777.png")'


];

// Har bir kartaga fon rasmini qo‘llash
cards.forEach((card, index) => {
  card.style.backgroundImage = bgImages[index];
  card.style.backgroundSize = 'cover';
  card.style.backgroundPosition = 'center';
});

// Navbar, menu icon va sahifa hodisalari
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('header nav a');

document.getElementById('downloadCv').addEventListener('click', function () {
  // Fayl URL-manzili
  const resumeUrl = './assets/Cv/Cv.pdf'; // Fayl manzilingizni to'g'ri ko'rsating

  // Faylni yuklab olish uchun link yaratish
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'Resume.pdf'; // Yuklangan fayl nomi
  link.click(); // Linkni bosish orqali faylni yuklash
});

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

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
window.addEventListener('load', function () {
  const loaderWrapper = document.querySelector('.loader-wrapper');
  const content = document.querySelector('.content');

  // Loader tugagach, sahifa tarkibini ko'rsatish
  loaderWrapper.addEventListener('animationend', function () {
    loaderWrapper.style.display = 'none';
  });
});
