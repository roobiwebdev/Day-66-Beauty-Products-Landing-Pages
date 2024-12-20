const navBar = document.querySelector("#nav-bar");
const menu = document.querySelector("#menu");
const navLinks = document.querySelectorAll(".nav-link");
const navIcons = document.querySelectorAll(".nav-icon");

menu.addEventListener("click", () => {
  navBar.classList.toggle("left-[0]");
  menu.classList.toggle("ri-close-large-line");
  if (menu.classList.contains("white")) {
    menu.classList.remove("white");
  } else {
    menu.classList.add("white");
  }
});

const NavEvent = (link) => {
  link.forEach((link) => {
    link.addEventListener("click", () => {
      navBar.classList.toggle("left-[0]");
      menu.classList.toggle("ri-close-large-line");
      if (menu.classList.contains("white")) {
        menu.classList.remove("white");
      } else {
        menu.classList.add("white");
      }
    });
  });
};

NavEvent(navIcons);
NavEvent(navLinks);

const Questions = document.querySelectorAll("#quest");
const Answers = document.querySelectorAll("#answer");
const PlusIcons = document.querySelectorAll("#plusIcon");
const MinusIcons = document.querySelectorAll("#minusIcon");

Answers.forEach((answer) => answer.classList.add("hidden"));
MinusIcons.forEach((icon) => icon.classList.add("hidden"));

Questions.forEach((quest, index) => {
  quest.addEventListener("click", () => {
    const answer = Answers[index];
    const plusIcon = PlusIcons[index];
    const minusIcon = MinusIcons[index];

    answer.classList.toggle("hidden");
    plusIcon.classList.toggle("hidden");
    minusIcon.classList.toggle("hidden");

    Answers.forEach((ans, idx) => {
      if (idx !== index) {
        ans.classList.add("hidden");
        PlusIcons[idx].classList.remove("hidden");
        MinusIcons[idx].classList.add("hidden");
      }
    });
  });
});

const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 1000,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnIntraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

if (window.innerWidth >= 760) {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true,
  });

  sr.reveal("._data");
  sr.reveal(".left_data", { origin: "left", distance: "400px" });
  sr.reveal(".right_data", { origin: "right", distance: "400px" });
  sr.reveal(".footer_data", {
    origin: "bottom",
    distance: "400px",
  });
}
