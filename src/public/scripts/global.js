const container = document.querySelector(".mcu-container");
const anchors = document.querySelectorAll(".nav-link");
const footer = document.querySelector("footer");
const year = document.querySelector("footer span");

const url = getCurrentURL();
year.innerHTML = getCurrentYear();

if (url.includes("movies") || url.includes("series")) {
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

if (url.endsWith("/")) {
  footer.remove();
}

anchors.forEach((anchor) => {
  const anchorValue = anchor.attributes.href.value.split("/")[1];

  if (url.includes(anchorValue)) {
    anchor.classList.add("active");
  }
});

function getCurrentURL() {
  return window.location.href;
}

function getCurrentYear() {
  return new Date().getFullYear();
}
