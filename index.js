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


let imageItems = [...document.querySelectorAll('.img-wrap')];
console.log(imageItems);
let titles = [...document.querySelectorAll('h2')];
let titleMessage = document.querySelector('.title');

let options = {
  rootMargin: "0px", //デフォルトで０.marginとほぼ同じ。
  threshold: 0.5, //閾値は0.2。これが１になると完全に画面におさまってから発動する
};
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


// Function to load active the moment it is monitored
let observer = new IntersectionObserver(setItemActive, options);

// Odd and even numbers appear in different places.
imageItems.map((item, index) => {
  console.log(item, index);
  item.children[0].style.backgroundImage = `url(./images/${index + 1}.jpg)`;
  index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
  observer.observe(item);
});

titles.map((title, index) => {
  index % 2 == 0 ? (title.style.left = "45%") : (title.style.left = "35%");
  observer.observe(title);
});

observer.observe(titleMessage);





