
const hairstyleBtn = document.querySelector("#hairstyle-h")
const hairstyle = document.querySelector("#hairstyle")
const makeup = document.querySelector("#makeup")
const makeupBtn = document.querySelector("#makeup-h")
const opacity = document.querySelector(".opacity")

hairstyleBtn.addEventListener("click", () => {
    hairstyle.style.display = "grid"
    makeup.style.display = "none"
    hairstyleBtn.classList.remove("opacity")
    makeupBtn.classList.add("opacity")

    //Select the other button and add a class called opacity.
})

makeupBtn.addEventListener("click", () => {
    makeup.style.display = "grid"
    hairstyle.style.display = "none"
    makeupBtn.classList.remove("opacity")
    hairstyleBtn.classList.add("opacity")
})
