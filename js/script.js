let setNama = () => {
    let inputNama = prompt("Masukan Nama Kamu")
    let elementNama = document.querySelector('#input-name')
    elementNama.innerHTML = inputNama
}

// MUNCULKAN PROMPT
setNama()

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

// VALIDASI

let kirimPesan = document.querySelector('#kirim-pesan')

kirimPesan.addEventListener('click', function () {
    let input = document.querySelectorAll('input')
    let textarea = document.querySelector('textarea')
    let count = 0;
    input.forEach(function (value) {
        let type = value.getAttribute('type');
        let name = value.getAttribute('name');
        // if (type == 'radio') {
        //     if (value.checked) {

        //     }
        // }

        if (value.value == '') {
            count += 1;
            errorHandler(name)
        }
    })
    if (textarea.value == '') {
        count += 1;
        document.querySelector('textarea[name="' + textarea.getAttribute("name") + '"').nextElementSibling.innerHTML = "Tidak boleh kosong"
    }

    if (count == 0) {
        document.querySelectorAll('small[class="error"]').forEach(function (e) {
            e.innerHTML = ""
        })
        document.querySelector('.current-time').innerHTML = curdate()
        document.querySelector('.nama').innerHTML = document.querySelector('input[name="nama"]').value
        document.querySelector('.tanggal-lahir').innerHTML = document.querySelector('input[name="tanggal_lahir"]').value
        document.querySelector('.jenis-kelamin').innerHTML = document.querySelector('input[name="jenis_kelamin"]:checked').value
        document.querySelector('.pesan').innerHTML = document.querySelector('textarea[name="pesan"]').value
    }

})

let curdate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    if (month == 1) {
        var bulan = 'Januari'
    }
    else if (month == 2) {
        var bulan = 'Februari'

    }
    else if (month == 3) {
        var bulan = 'Maret'

    }
    else if (month == 4) {
        var bulan = 'April'

    }
    else if (month == 5) {
        var bulan = 'Mai'

    }
    else if (month == 6) {
        var bulan = 'Juni'

    }
    else if (month == 7) {
        var bulan = 'Juli'

    }
    else if (month == 8) {
        var bulan = 'Agustus'

    }
    else if (month == 9) {
        var bulan = 'September'

    }
    else if (month == 10) {
        var bulan = 'Oktober'

    }
    else if (month == 11) {
        var bulan = 'November'

    }
    else if (month == 12) {
        var bulan = 'Desember'

    }
    const formattedDate = `${day} ${bulan} ${year}`;

    return formattedDate
}

function errorHandler(name) {
    document.querySelector('input[name="' + name + '"').nextElementSibling.innerHTML = "Tidak boleh kosong"

}

