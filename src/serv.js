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
  mobMenuToggle.querySelector("img").getAttribute("src") == "/images/open.svg"
    ? mobMenuToggle
        .querySelector("img")
        .setAttribute("src", "/images/close.svg")
    : mobMenuToggle
        .querySelector("img")
        .setAttribute("src", "/images/open.svg");
});
