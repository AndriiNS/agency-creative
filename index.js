// scroll to e
document.querySelectorAll(".header__link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});
//========================================================================================================================================================
//header btn
function mobileNav() {
  const navBtn = document.querySelector(".mobile-nav-btn");
  const nav = document.querySelector(".mobile-nav");
  const menuIcon = document.querySelector(".nav-icon");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  navBtn.onclick = function () {
    nav.classList.toggle("mobile-nav--open");
    menuIcon.classList.toggle("nav-icon--active");

    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  navLinks.forEach((link) => {
    link.onclick = function () {
      nav.classList.remove("mobile-nav--open");
      menuIcon.classList.remove("nav-icon--active");
      document.body.style.overflow = "";
    };
  });
}

document.addEventListener("DOMContentLoaded", mobileNav);
//========================================================================================================================================================
//preloader
document.body.style.overflow = "hidden";

gsap.fromTo(".preloader-logo img", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.5 });

gsap.fromTo(".preloader-title", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 1.5 });

gsap.fromTo(".preloader-text", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 3 });

gsap.to(".preloader-logo", {
  x: "-100%",
  duration: 2,
  ease: "power3.inOut",
  delay: 4.5
});

gsap.to(".preloader-text-box", {
  x: "100%",
  duration: 2,
  ease: "power3.inOut",
  delay: 4.5,
  onComplete: () => {
    document.querySelector(".preloader").style.display = "none";
    document.body.style.overflow = "initial";
  }
});
// input toggle
const headerLink = document.querySelectorAll(".header__link"),
  checkbox = document.getElementById("checkbox"),
  doneText = document.querySelector(".done"),
  doneFeetback = document.querySelector(".done__feetback"),
  footerLogo = document.querySelector(".header__logo.footer"),
  darkModeText = document.querySelector(".text-dark"),
  darkComments = document.querySelectorAll(".testimonial__box");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  doneText.classList.toggle("black-text");
  doneFeetback.classList.toggle("black-text");
  footerLogo.classList.toggle("black-text");
  darkComments.forEach((box) => {
    box.classList.toggle("bg-black");
  });
  headerLink.forEach((link) => {
    link.classList.toggle("white-text");
  });
  if (checkbox.checked) {
    darkModeText.textContent = "Light mode";
  } else {
    darkModeText.textContent = "Dark mode";
  }
});
//========================================================================================================================================================
gsap.from(".header", { duration: 2, y: -100, opacity: 0, ease: "power4.out", delay: 6, scale: 0.7 });
gsap.set(".dream__title", { opacity: 1, scaleX: 0, transformOrigin: "left center", willChange: "transform" });
gsap.from(".mobile-nav-btn", {
  duration: 1,
  x: 100,
  opacity: 0,
  delay: 6,
  ease: "power2.out"
});
gsap.to(".dream__title", { duration: 1.5, scaleX: 1, ease: "power4.out", delay: 6 });

gsap.from(".dream__text", { duration: 1.5, y: 100, opacity: 0, ease: "power4.out", delay: 6 });

const isMobile = window.innerWidth <= 968;

if (!isMobile) {
  gsap.from(".dream__img", {
    scrollTrigger: {
      trigger: ".dream__img",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
      once: true
    },
    duration: 1.5,
    x: 100,
    opacity: 0,
    delay: 1,
    ease: "power4.out"
  });
}
gsap.to(".dream__btn", { opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 7 });
gsap.from(".done", {
  scrollTrigger: {
    trigger: ".done",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none none",
    once: true
  },
  duration: 1.5,
  rotation: 360,
  scale: 0,
  opacity: 0,
  ease: "elastic.out(1, 0.75)"
});

gsap.from(".done__feetback", {
  scrollTrigger: {
    trigger: ".done__feetback",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none none",
    once: true
  },
  duration: 1.5,
  rotation: -360,
  scale: 0,
  opacity: 0,
  ease: "elastic.out(1, 0.75)"
});
//========================================================================================================================================================
gsap.registerPlugin(ScrollTrigger);

gsap.from(".teammate__title", {
  scrollTrigger: {
    trigger: ".teammate",
    start: "top 40%",
    toggleActions: "play none none none",
    once: true
  },
  y: 50,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out"
});

gsap.from(".teammate__content-inner p", {
  scrollTrigger: {
    trigger: ".teammate",
    start: "top 40%",
    end: "top 60%",
    toggleActions: "play none none none",
    once: true
  },
  y: 30,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out",
  stagger: 0.3
});

gsap.from(".teammate__content-img", {
  scrollTrigger: {
    trigger: ".teammate",
    start: "top 40%",
    end: "top 60%",
    toggleActions: "play none none none",
    once: true
  },
  scale: 0.8,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out"
});
//========================================================================================================================================================
gsap.registerPlugin(ScrollTrigger);

gsap.from(".services__info", {
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".services",
    start: "top 30%",
    toggleActions: "play none none none",
    once: true
  }
});

gsap.from(".services__tools-card", {
  opacity: 0,
  y: 50,
  scale: 0.8,
  stagger: 0.2,
  duration: 1.2,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".services",
    start: "top 30%",
    toggleActions: "play none none none",
    once: true
  }
});
//========================================================================================================================================================
gsap.from(".portfolio__title", {
  scrollTrigger: {
    trigger: ".portfolio",
    start: "top 30%",
    end: "bottom top",
    once: true,
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power4.out"
});

gsap.from(".portfolio__text", {
  scrollTrigger: {
    trigger: ".portfolio",
    start: "top 30%",
    end: "bottom top",
    once: true,
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power4.out",
  delay: 0.3
});

// Анімація для карток
gsap.utils.toArray(".portfolio__content-card").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 60%",
      end: "bottom 20%",
      once: true,
      toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.8,
    rotation: 5,
    duration: 1.2,
    ease: "power4.out",
    delay: index * 0.2
  });
});

// Анімація для кнопки "See All Portfolio"
gsap.from(".portfolio__btn", {
  scrollTrigger: {
    trigger: ".portfolio",
    start: "top 30%",
    once: true,
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power4.out",
  delay: 0.5
});
//========================================================================================================================================================
gsap.from(".testimonial__title", {
  scrollTrigger: {
    trigger: ".testimonial",
    start: "top 30%",
    once: true,
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power4.out"
});

// Анімація для блоків відгуків
gsap.utils.toArray(".testimonial__box").forEach((box, index) => {
  gsap.from(box, {
    scrollTrigger: {
      trigger: box,
      start: "top 70%",
      once: true,
      toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.9,
    y: 20,
    duration: 1.2,
    ease: "power4.out",
    delay: index * 0.3
  });
});

// Анімація для синіх точок
gsap.from(".testimonial-blue-dots1", {
  scrollTrigger: {
    trigger: ".testimonial",
    start: "top 30%",
    once: true,
    toggleActions: "play none none none"
  },
  opacity: 0,
  scale: 0.5,
  rotation: 360,
  duration: 1.5,
  ease: "power4.out"
});

gsap.from(".testimonial-blue-dots2", {
  scrollTrigger: {
    trigger: ".testimonial",
    start: "top 30%",
    once: true,
    toggleActions: "play none none none"
  },
  opacity: 0,
  scale: 0.5,
  rotation: -360,
  duration: 1.5,
  ease: "power4.out",
  delay: 0.3
});
//========================================================================================================================================================
if (window.matchMedia("(min-width: 968px)").matches) {
  gsap.from(".colaboration__title", {
    scrollTrigger: {
      trigger: ".colaboration",
      start: "top 80%",
      end: "bottom top",
      once: true,
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: -50,
    duration: 1.2,
    ease: "power4.out"
  });

  gsap.from(".colaboration__text", {
    scrollTrigger: {
      trigger: ".colaboration",
      start: "top 75%",
      end: "bottom top",
      once: true,
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 30,
    duration: 1.2,
    ease: "power4.out"
  });

  gsap.from(".colaboration__link", {
    scrollTrigger: {
      trigger: ".colaboration",
      start: "top 70%",
      end: "bottom top",
      once: true,
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 20,
    scale: 0.9,
    duration: 1.2,
    ease: "power4.out"
  });

  gsap.from(".colaboration__img-left", {
    scrollTrigger: {
      trigger: ".colaboration",
      start: "top 60%",
      end: "bottom top",
      once: true,
      toggleActions: "play none none none"
    },
    opacity: 0,
    x: -100,
    duration: 1.2,
    ease: "power4.out"
  });

  gsap.from(".colaboration__img-right", {
    scrollTrigger: {
      trigger: ".colaboration",
      start: "top 60%",
      end: "bottom top",
      once: true,
      toggleActions: "play none none none"
    },
    opacity: 0,
    x: 100,
    duration: 1.2,
    ease: "power4.out"
  });

  gsap.from(".colaboration__dost-blue", {
    scrollTrigger: {
      trigger: ".colaboration",
      start: "top 50%",
      end: "bottom top",
      once: true,
      toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    ease: "power4.out"
  });

  gsap.from(".colaboration__dost-orange", {
    scrollTrigger: {
      trigger: ".colaboration",
      start: "top 50%",
      end: "bottom top",
      once: true,
      toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    ease: "power4.out",
    delay: 0.3
  });
}
//========================================================================================================================================================
