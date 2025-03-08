const imageContainer = document.querySelector(".mcu-details-container");
const backdropImage = document.querySelector("#backdrop");

imageContainer.style.backgroundImage = `url(${backdropImage.src})`;
imageContainer.style.backgroundColor = "#202020dd";
imageContainer.style.backgroundPosition = "center";
imageContainer.style.backgroundSize = "cover";
imageContainer.style.backgroundBlendMode = "saturation";
