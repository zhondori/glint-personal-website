$(document).ready(() => {
  let arr = Array.from($(".child_list"));
  $(".has-child").each((idx, li) => {
    // Mouse Enter;
    $(li).mouseenter(() => {
      $(arr[idx]).slideDown(300);
    });
    // Mouse Leave;
    $(li).mouseleave(() => {
      $(arr[idx]).slideUp(300);
    });
  });

  // Fixed Content.
  $("#hamburger").click(() => {
    $(".fixed-content").css("right", 0);
  });

  $("#times").click(() => {
    $(".fixed-content").css("right", "-150%");
  });

  // Loader
  $(".loader").css({
    display: "none",
  });
});
// Navbar Sticky
let nav = document.querySelector("nav"),
  toTop = document.querySelector(".to-top");

window.addEventListener("scroll", Scrolling);
function Scrolling() {
  if (window.scrollY > 100) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }

  if (window.scrollY > 0) {
    toTop.classList.add("to-fixed");
  } else {
    toTop.classList.remove("to-fixed");
  }
}
// Navbar HightLight on scroll
const sections = document.querySelectorAll(".sect"),
  navListItem = document.querySelectorAll(".nav_list__item");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sect) => {
    let sectTop = sect.offsetTop;

    if (pageYOffset >= sectTop) {
      current = sect.getAttribute("id");
    }
  });

  navListItem.forEach((li) => {
    li.classList.remove("active_link");
    if (li.classList.contains(current)) {
      li.classList.add("active_link");
    }
  });
});

const videoContent = document.querySelector(".video__content > svg"),
  aboutVideo = document.querySelector(".about_video"),
  overlay = document.querySelector(".overlay"),
  xButton = document.querySelector(".close_svg");

videoContent.addEventListener("click", () => {
  aboutVideo.classList.add("active");
});

overlay.addEventListener("click", () => {
  aboutVideo.classList.remove("active");
});

xButton.addEventListener("click", () => {
  aboutVideo.classList.remove("active");
});
// Slides Hover Content;
const slides = document.querySelectorAll(".project_slider__col"),
  hoverContents = document.querySelectorAll(".hover_content"),
  maxOffsetX = 377,
  maxOffsetY = 450;
slides.forEach((slide, id) => {
  slide.addEventListener("mousemove", (evt) => {
    if (
      (evt.offsetY < maxOffsetY / 2 && evt.offsetX < maxOffsetX / 2) ||
      evt.offsetY > maxOffsetY / 2
    ) {
      hoverContents[id].style.cssText = `
          top: 0%;
          left: 3%;
        `;
    } else if (
      (evt.offsetY < maxOffsetY / 2 && evt.offsetX > maxOffsetX / 2) ||
      evt.offsetY > maxOffsetY / 2
    ) {
      hoverContents[id].style.cssText = `
        top: 0%;
        left: 3%;
      `;
    } else if (
      (evt.offsetX < maxOffsetX / 2 && evt.offsetY < maxOffsetY / 2) ||
      evt.offsetX > maxOffsetX / 2
    ) {
      hoverContents[id].style.cssText = `
        top: 0;
        left: 3%;
      `;
    } else if (
      (evt.offsetX > maxOffsetX / 2 && evt.offsetY < maxOffsetY / 2) ||
      evt.offsetX > maxOffsetX / 2
    ) {
      hoverContents[id].style.cssText = `
        top: 0;
        left: 3%;
      `;
    }
  });

  // MouseLeave
  slide.addEventListener("mouseleave", (evt) => {
    if (
      (evt.offsetY < maxOffsetY / 2 && evt.offsetX < maxOffsetX / 2) ||
      evt.offsetY > maxOffsetY / 2
    ) {
      hoverContents[id].style.cssText = `
        top: 0%;
        left: -100%;
      `;
    } else if (
      (evt.offsetY < maxOffsetY / 2 && evt.offsetX > maxOffsetX / 2) ||
      evt.offsetY > maxOffsetY / 2
    ) {
      hoverContents[id].style.cssText = `
      top: 0%;
      left: 100%;
    `;
    } else if (
      (evt.offsetX < maxOffsetX / 2 && evt.offsetY < maxOffsetY / 2) ||
      evt.offsetX > maxOffsetX / 2
    ) {
      hoverContents[id].style.cssText = `
      top: -100%;
      left: 3%;
    `;
    } else if (
      (evt.offsetX < maxOffsetX / 2 && evt.offsetY > maxOffsetY / 2) ||
      evt.offsetX > maxOffsetX / 2
    ) {
      hoverContents[id].style.cssText = `
      top: 100%;
      left: 3%;
    `;
    }
  });
});

const bar = document.querySelector(".bar"),
  navCol = document.querySelector("nav > .container > .row > .col-lg-6"),
  closeRef = document.querySelector(".close-refs");

bar.addEventListener("click", () => {
  navCol.style.cssText = `
    opacity: 1;
    display: block;
  `;
})

closeRef.addEventListener("click", () => {
  navCol.style.cssText = `
    display: none;
    opacity: 0;
  `;
})