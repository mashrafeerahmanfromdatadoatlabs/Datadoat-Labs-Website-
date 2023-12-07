let filter_btn = document.querySelectorAll(".filter-btn");
let tab_items = document.querySelectorAll(".tab-item");

filter_btn.forEach((el, i) => {
  el.addEventListener("click", function (ev) {
    document.querySelector(".filter-btn.selected").classList.remove("selected");
    let select_tab = filter_btn[i].getAttribute("data-tab");
    console.log(select_tab);
    filter_btn[i].classList.add("selected");
    document
      .querySelector(`.tab-itm.selected_tab`)
      .classList.remove("selected_tab");
    document.querySelector(`#${select_tab}`).classList.add("selected_tab");
  });
});

let faq_itms = document.querySelectorAll(".faq-itm");

faq_itms.forEach((el, i) => {
  el.addEventListener("click", (ev) => {
    el.classList.toggle("faq-expanded");
    el.querySelector("img").style.rotate == "0deg" ||
    el.querySelector("img").style.rotate.length == 0
      ? (el.querySelector("img").style.rotate = "180deg")
      : (el.querySelector("img").style.rotate = "0deg");
    let p = el.nextElementSibling;
    if (p.style.maxHeight) {
      p.style.maxHeight = null;
    } else {
      p.style.maxHeight = p.scrollHeight + "px";
    }
  });
});

let mobMenuToggle = document.querySelector("#mobile-menu");

mobMenuToggle.addEventListener("click", (ev) => {
  mobMenuToggle.nextElementSibling.classList.toggle("show");
  mobMenuToggle.querySelector("img").getAttribute("src") ==
  "/src/images/open.svg"
    ? mobMenuToggle
        .querySelector("img")
        .setAttribute("src", "/src/images/close.svg")
    : mobMenuToggle
        .querySelector("img")
        .setAttribute("src", "/src/images/open.svg");
});

// -------------------------------slider section js code -------------------
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

// -------------------recommendation slider  js ------------------------>

let currentIndex = 0;
const totalCards = document.querySelectorAll(".testimonial-card").length;

function showSlide(index) {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const cardWidth = document.querySelector(".testimonial-card").offsetWidth;
  const newTransformValue = -index * cardWidth + "px";

  sliderWrapper.style.transform = "translateX(" + newTransformValue + ")";
  currentIndex = index;

  // Hide or show buttons based on the current index
  document.querySelector(".slider-btn-left").style.display =
    currentIndex === 0 ? "none" : "block";
  document.querySelector(".slider-btn-right").style.display =
    currentIndex === totalCards - 1 ? "none" : "block";
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalCards;
  showSlide(currentIndex);
}

// -------------------------tab section js start---------------------------

function openTab(event, tabId) {
  // Hide all tabs
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  // Deactivate all tab links
  var tabLinks = document.getElementsByClassName("tab-link");
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].style.fontWeight = "400";
  }

  // Show the clicked tab
  document.getElementById(tabId).style.display = "block";

  // Activate the clicked tab link
  event.currentTarget.style.fontWeight = "600";
}
