let namaBarang = document.getElementById("namaBarang");
let jumlah = document.getElementById("jumlah");
let keterangan = document.getElementById("keterangan");

function simpan() {
    console.log(namaBarang.value)
    console.log(jumlah.value)
    console.log(keterangan.value)

    // kalo local storage blm ad isi
    if(localStorage.getItem("mahasiswa")===null) {
        // simpan array kosong []
        localStorage.setItem("mahasiswa", "[]")
    }

    // panggil local storage (konversi string => obj)
    let data = JSON.parse(localStorage.getItem("mahasiswa"))
    console.log(data)

    //simpan value npm, nama ke dalam obj data
    data.push({
        npm: npm.value,
        nama: nama.value,
        img: img.value
    })
    console.log(data)

    //simpan data terbaru ke dalam local storage
    // konversi dari objek menjadi string
    localStorage.setItem("mahasiswa", JSON.stringify(data))

    //panggil tampil()
    tampil()
}

function tampil() {
    //panggil slu local strg
    let hasil = JSON.parse(localStorage.getItem("mahasiswa"))

    //clear element ul
    document.getElementById("list-mhs").innerHTML = " "

    //lakukan perulangan (foreach)
    hasil.forEach(element => {
        // console.log(element)
        document.getElementById("list-mhs").
        innerHTML += `<div class="col-lg-4 col-md-6">
        <h4 class="text-primary">${element.nama}</h4>
        <h6 class="text-danger">${element.npm}</h6>
        <img calss="img-fluid" src=${element.img}/>
        </div>`
    });
}

//jalankan func tmpil()
tampil()
