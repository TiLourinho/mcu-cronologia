const container = document.querySelector(".mcu-container");
const anchors = document.querySelectorAll(".nav-link");

const url = getCurrentURL();

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

anchors.forEach((anchor) => {
  const anchorValue = anchor.attributes.href.value.split("/")[1];

  if (url.includes(anchorValue)) {
    anchor.classList.add("active");
  }
});

function getCurrentURL() {
  return window.location.href;
}
