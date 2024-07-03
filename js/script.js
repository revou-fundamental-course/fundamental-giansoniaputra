let setNama = () => {
    let inputNama = prompt("Masukan Nama Kamu")
    let elementNama = document.querySelector('#input-name')
    elementNama.innerHTML = inputNama
}

// MUNCULKAN PROMPT
// setNama()

// SCROLL
window.onscroll = function () {
    scroll()
}

function scroll() {
    let wScroll = document.documentElement.scrollTop;
    let nav = document.querySelector("nav")
    // console.log(wScroll);
    if (wScroll > 300) {
        nav.style.backgroundColor = "#111111"
    } else {
        nav.style.backgroundColor = ""
    }
}

// GESER BANNER
let prev = document.querySelector('#btn-prev')
let next = document.querySelector('#btn-next')

prev.addEventListener('click', function () {
    // console.log("oke");
    let parrent = document.querySelector(".slides")
    let img = document.querySelector(".image-slider")
    let countImg = document.querySelectorAll(".image-slider").length

    // let active = document.querySelector("div[class='img-banner active']")
    // let previous = active.previousElementSibling
    // if (previous.getAttribute("id") != 'btn-prev') {
    // active.style.right = "-1336px";
    // next.style.right = "1336px";
    // active.classList.remove('active')
    // previous.classList.add('active')
    if (parrent.scrollLeft === 0) {
        parrent.scrollBy({ left: img.width * countImg, behavior: 'smooth' });
    } else {
        parrent.scrollBy({ left: -img.width, behavior: 'smooth' });
    }
    // active.style.animation = "hilang"
    // previous.style.animation = "muncul"
    // }
})

next.addEventListener('click', function () {

    let parrent = document.querySelector(".slides")
    let img = document.querySelector(".image-slider")
    let countImg = document.querySelectorAll(".image-slider").length
    // console.log(parrent.scrollLeft);
    // let active = document.querySelector("div[class='img-banner active']")
    // let next = active.nextElementSibling
    // if (next.getAttribute("id") && next.getAttribute("id") != 'btn-next') {
    if (parrent.scrollLeft >= img.width * (countImg - 1)) {
        parrent.scrollBy({ left: -img.width * countImg, behavior: 'smooth' });
    } else {
        parrent.scrollBy({ left: img.width, behavior: 'smooth' });
    }
    // active.classList.remove('active')
    // next.classList.add('active')
    // active.style.animation = "hilang"
    // next.style.animation = "muncul"
    // }
})

