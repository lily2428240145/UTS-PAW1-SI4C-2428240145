let namaBarang = document.getElementById("namaBarang");
let jumlah = document.getElementById("jumlah");
let keterangan = document.getElementById("keterangan");

function simpan() {
    console.log(namaBarang.value)
    console.log(jumlah.value)
    console.log(keterangan.value)

    // kalo local storage blm ad isi
    if(localStorage.getItem("Produk")===null) {
        // simpan array kosong []
        localStorage.setItem("Produk", "[]")
    }

    // panggil local storage (konversi string => obj)
    let data = JSON.parse(localStorage.getItem("Produk"))
    console.log(data)

    //simpan value npm, nama ke dalam obj data
    data.push({
        namaBarang: namaBarang.value,
        jumlah: jumlah.value,
        keterangan: keterangan.value
    })
    console.log(data)

    //simpan data terbaru ke dalam local storage
    // konversi dari objek menjadi string
    localStorage.setItem("Produk", JSON.stringify(data))

    //panggil tampil()
    tampil()
}

function tampil() {
    //panggil slu local strg
    let hasil = JSON.parse(localStorage.getItem("Produk"))

    //clear element ul
    document.getElementById("list-produk").innerHTML = " "

    //lakukan perulangan (foreach)
    hasil.forEach(element => {
        // console.log(element)
        document.getElementById("list-produk").
        innerHTML += `<div class="col-lg-4 col-md-6">
        <h4 class="text-primary">${element.namaBarang}</h4>
        <h6 class="text-danger">${element.jumlah}</h6>
        <p class="text-muted">${element.keterangan}</p>
        </div>`
    });
}

//jalankan func tmpil()
tampil()
