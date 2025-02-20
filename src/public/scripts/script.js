const container = document.querySelector(".movies-container");

container.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    container.scrollLeft += 650;
    event.preventDefault();
  } else {
    container.scrollLeft -= 650;
    event.preventDefault();
  }
});
