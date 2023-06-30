const road = document.querySelector(".road")
const car = document.querySelector(".car")

road.style.animationPlayState = "running"

document.addEventListener("keydown", e => {
    if (e.code == "Space") {
        if (road.style.animationPlayState == "paused") {
            road.style.animationPlayState = "running"
        } else {
            road.style.animationPlayState = "paused"
        }
    }

    if (e.code == "KeyL") {
        const index = car.src.indexOf("Images", -1)
        const img_src = car.src.substr(index)
        console.log(img_src)
        if (img_src == "Images/Img_05.png") {
            car.src = "Images\\Img_06.png"
        } else if (img_src == "Images/Img_06.png") {
            car.src = "Images\\Img_05.png"
        }
        console.log(img_src)
    }
})