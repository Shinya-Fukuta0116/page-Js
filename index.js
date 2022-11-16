let imageItems = [...document.querySelectorAll('.img-wrap')];
console.log(imageItems);
let titles = [...document.querySelectorAll('h2')];
let titleMessage = document.querySelector('title');

// Monitor where they are. And when you come to a specific position, call a function.

let setItemActive = (entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
};

let options = {};

let observer = new IntersectionObserver(setItemActive, options)

observer.observe(titleMessage);

// Function to load active the moment it is monitored



const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // toggle nav
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.0}s`;
      }
    });
    // burger Animation
    burger.classList.toggle('toggle');
  });
}

navSlide();