document.addEventListener('DOMContentLoaded', function() {

    // Formulir Login
    var loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            var data = {
                username: username,
                password: password
            };

            fetch('https://script.google.com/macros/s/AKfycbw15oDIM7eLQvy5qxCTr6W8heKAxzCiG6S57b8YL5ky6oHAU4LFpBKwV6U3Eg-FGo-i/exec', {  // Ganti dengan URL Web App Google Apps Script Anda
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json())
.then(data => {
    if (data.result === "success") {
        alert('Login berhasil! Selamat datang ' + data.namaLengkap);
        window.location.href = "dashboard.html";
    } else {
        alert(data.message);
    }
})
.catch((error) => alert('Error: ' + error));
        });
    }   

    document.addEventListener('DOMContentLoaded', function() {
    var wargaForm = document.getElementById("wargaForm");
    if (wargaForm) {
        wargaForm.addEventListener("submit", function(event) {
            event.preventDefault();

            // Ambil data dari form
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

            // Validasi form sebelum kirim data
            if (!id || !nama || !nik || !jenisKelamin || !tempatLahir || !tanggalLahir || !agama || !pekerjaan || !statusKawin || !alamat || !rt) {
                alert("Semua data harus diisi!");
                return; // Jika ada yang kosong, hentikan proses
            }

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

            // Mengirimkan data ke Google Apps Script
            fetch('https://script.google.com/macros/s/AKfycbw15oDIM7eLQvy5qxCTr6W8heKAxzCiG6S57b8YL5ky6oHAU4LFpBKwV6U3Eg-FGo-i/exec', {  // Ganti dengan URL Web App Google Apps Script Anda
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => response.json())  // Mengonversi respons menjadi JSON
            .then(data => {
                if (data.result === "success") {
                    alert('Data warga berhasil disimpan!');
                    document.getElementById("wargaForm").reset();  // Reset form setelah berhasil
                } else {
                    alert('Terjadi kesalahan: ' + data.message);
                }
            })
            .catch((error) => alert('Error: ' + error));  // Menangani error
        });
    }
});

    // Formulir Pengaduan
    var pengaduanForm = document.getElementById("pengaduanForm");
    if (pengaduanForm) {
        pengaduanForm.addEventListener("submit", function(event) {
            event.preventDefault();

            var id = document.getElementById("id").value;
            var nama = document.getElementById("nama").value;
            var alamat = document.getElementById("alamat").value;
            var telepon = document.getElementById("telepon").value;
            var jenisPengaduan = document.getElementById("jenisPengaduan").value;
            var isiPengaduan = document.getElementById("isiPengaduan").value;

            var data = {
                id: id,
                nama: nama,
                alamat: alamat,
                telepon: telepon,
                jenisPengaduan: jenisPengaduan,
                isiPengaduan: isiPengaduan
            };

            fetch('https://script.google.com/macros/s/AKfycbw15oDIM7eLQvy5qxCTr6W8heKAxzCiG6S57b8YL5ky6oHAU4LFpBKwV6U3Eg-FGo-i/exec', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => response.json())
            .then(data => {
                if (data.result === "success") {
                    alert('Pengaduan berhasil dikirim!');
                } else {
                    alert('Terjadi kesalahan: ' + data.message);
                }
            })
            .catch((error) => alert('Error: ' + error));  // Pastikan catch tertutup dengan benar
        });
    }

    // Formulir Kontak
    var kontakForm = document.getElementById("kontakForm");
    if (kontakForm) {
        kontakForm.addEventListener("submit", function(event) {
            event.preventDefault();

            var id = document.getElementById("id").value;
            var nama = document.getElementById("nama").value;
            var alamat = document.getElementById("alamat").value;
            var telepon = document.getElementById("telepon").value;
            var pesan = document.getElementById("pesan").value;

            var data = {
                id: id,
                nama: nama,
                alamat: alamat,
                telepon: telepon,
                pesan: pesan
            };

            fetch('https://script.google.com/macros/s/AKfycbw15oDIM7eLQvy5qxCTr6W8heKAxzCiG6S57b8YL5ky6oHAU4LFpBKwV6U3Eg-FGo-i/exec', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => response.json())
            .then(data => {
                if (data.result === "success") {
                    alert('Pesan berhasil dikirim!');
                } else {
                    alert('Terjadi kesalahan: ' + data.message);
                }
            })
            .catch((error) => alert('Error: ' + error));  // Pastikan catch tertutup dengan benar
        });
    }

});
// Menambahkan header CORS untuk membolehkan permintaan dari domain lain
// (Bagian ini hanya untuk Google Apps Script, jangan letakkan di file JavaScript client-side)

