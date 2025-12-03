console.log("JS Aktif ✔");

// === FITUR 1: Ubah Tema === //
const tombolTema = document.getElementById("btnTema");

tombolTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        console.log("Mode Gelap Aktif");
    } else {
        console.log("Mode Terang Aktif");
    }
});

// === FITUR 2: Sapaan Pengunjung === //
const tombolSapa = document.getElementById("btnSapa");
const hasilSapa = document.getElementById("hasilSapa");

tombolSapa.addEventListener("click", () => {
    console.log("Tombol Sapa ditekan");

    let nama = prompt("Masukkan nama Anda:");

    if (nama && nama.trim() !== "") {
        hasilSapa.textContent = "Halo, " + nama + "!🐼";
    } else {
        hasilSapa.textContent = "Halo, Pengunjung!";
    }
});


/*
REFLEKSI SINGKAT:

Awalnya saya bingung bagaimana cara membuat tombol bisa
mengubah tampilan halaman hanya dengan klik. Saya juga
sempat salah menuliskan variabel sehingga hasil sapaan
tidak muncul.

Setelah mencoba ulang dan melihat hasilnya di browser,
ternyata tidak sesulit yang saya pikir. Saya jadi paham
kalau event listener itu seperti "sensor" yang menunggu
aksi dari pengguna. Dan setiap perubahannya bisa langsung
terlihat. Rasanya senang bisa membuat halaman yang lebih
hidup dan interaktif.
*/
