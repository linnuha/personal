// Fungsi untuk login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var data = {
        username: username,
        password: password
    };

    // Kirim data login ke Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbxy.../exec', {  // Ganti URL dengan URL Google Apps Script Anda
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === "success") {
            alert('Login berhasil! Selamat datang ' + data.namaLengkap);
            window.location.href = "index.html";  // Redirect ke halaman utama
        } else {
            alert(data.message);  // Tampilkan pesan error
        }
    })
    .catch((error) => alert('Error: ' + error));
});

// Fungsi untuk pengisian data warga
document.getElementById("wargaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var id = document.getElementById("id").value;
    var nama = document.getElementById("nama").value;
    var nik = document.getElementById("nik").value;
    var jenisKelamin = document.getElementById("jenisKelamin").value;
    var tempatLahir = document.getElementById("tempatLahir").value;
    var tanggalLahir = document.getElementById("tanggalLahir").value;
    var agama = document.getElementById("agama").value;
    var pekerjaan = document.getElementById("pekerjaan").value;
    var statusKawin = document.getElementById("statusKawin").value;
    var alamat = document.getElementById("alamat").value;
    var rt = document.getElementById("rt").value;

    var data = {
        id: id,
        nama: nama,
        nik: nik,
        jenisKelamin: jenisKelamin,
        tempatLahir: tempatLahir,
        tanggalLahir: tanggalLahir,
        agama: agama,
        pekerjaan: pekerjaan,
        statusKawin: statusKawin,
        alamat: alamat,
        rt: rt
    };

    // Kirim data warga ke Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbwfJMLQ8cxVLTSG04eVZzOQRgMt5t1ysCyWT3_APNp7XK87I_bk_SXfhghTELPWgVrV/exec', {  // Ganti URL dengan URL Google Apps Script Anda
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === "success") {
            alert('Data warga berhasil disimpan!');
            document.getElementById("wargaForm").reset();
        } else {
            alert('Terjadi kesalahan: ' + data.message);
        }
    })
    .catch((error) => alert('Error: ' + error));
});
