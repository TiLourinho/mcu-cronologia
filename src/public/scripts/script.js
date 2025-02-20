const container = document.querySelector(".mcu-container");
const anchors = document.querySelectorAll(".nav-link");

const url = getCurrentURL();
const splittedUrl = url.split("/");
const currentPage = splittedUrl[splittedUrl.length - 1];

if (currentPage === "movies" || currentPage === "series") {
  container.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
      container.scrollLeft += 650;
      event.preventDefault();
    } else {
      container.scrollLeft -= 650;
      event.preventDefault();
    }
  });
}

anchors.forEach((anchor) => {
  const anchorValue = anchor.attributes.href.value.split("/")[1];

  if (anchorValue === currentPage) {
    anchor.classList.add("active");
  }
});

function getCurrentURL() {
  return window.location.href;
}
