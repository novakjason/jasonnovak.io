document.addEventListener(
  "click",
  (event) => {
    if (!event.target.matches(".nav-toggler")) return;
    event.preventDefault();
    document.querySelector(".nav-toggler").classList.toggle("open");
    document.querySelector(".navbar").classList.toggle("open");
  },
  false
);
