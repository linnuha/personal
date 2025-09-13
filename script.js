document.addEventListener('DOMContentLoaded', function() {
    // Login Form Handler
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

            fetch('https://script.google.com/macros/s/AKfycbxr6h8VOhrewcj4HAVSGso-bXvy_gnUP7s_oE610_Nrly02_81LU8TyAgUk8oirk0SS/exec', {
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

    // Warga Form Handler
    var wargaForm = document.getElementById("wargaForm");
    if (wargaForm) {
        wargaForm.addEventListener("submit", function(event) {
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

            fetch('https://script.google.com/macros/s/AKfycbxr6h8VOhrewcj4HAVSGso-bXvy_gnUP7s_oE610_Nrly02_81LU8TyAgUk8oirk0SS/exec', {
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
    }

    // Pengaduan Form Handler
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

            fetch('https://script.google.com/macros/s/AKfycbxr6h8VOhrewcj4HAVSGso-bXvy_gnUP7s_oE610_Nrly02_81LU8TyAgUk8oirk0SS/exec', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => response.json())
            .then(data => {
                if (data.result === "success") {
                    alert('Pengaduan berhasil dikirim!');
                    document.getElementById("pengaduanForm").reset();
                } else {
                    alert('Terjadi kesalahan: ' + data.message);
                }
            })
            .catch((error) => alert('Error: ' + error));
        });
    }

    // Kontak Form Handler
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

            fetch('https://script.google.com/macros/s/AKfycbxr6h8VOhrewcj4HAVSGso-bXvy_gnUP7s_oE610_Nrly02_81LU8TyAgUk8oirk0SS/exec', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => response.json())
            .then(data => {
                if (data.result === "success") {
                    alert('Pesan berhasil dikirim!');
                    document.getElementById("kontakForm").reset();
                } else {
                    alert('Terjadi kesalahan: ' + data.message);
                }
            })
            .catch((error) => alert('Error: ' + error));
        });
    }

    // Fasilitas Form Handler
    var fasilitasForm = document.getElementById("fasilitasForm");
    if (fasilitasForm) {
        fasilitasForm.addEventListener("submit", function(event) {
            event.preventDefault();

            var id = document.getElementById("id").value;
            var namaFasilitas = document.getElementById("namaFasilitas").value;
            var deskripsi = document.getElementById("deskripsi").value;
            var gambar = document.getElementById("gambar").files[0] ? document.getElementById("gambar").files[0].name : '';

            var data = {
                id: id,
                namaFasilitas: namaFasilitas,
                deskripsi: deskripsi,
                gambar: gambar
            };

            fetch('https://script.google.com/macros/s/AKfycbxr6h8VOhrewcj4HAVSGso-bXvy_gnUP7s_oE610_Nrly02_81LU8TyAgUk8oirk0SS/exec', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => response.json())
            .then(data => {
                if (data.result === "success") {
                    alert('Fasilitas berhasil disimpan!');
                    document.getElementById("fasilitasForm").reset();
                } else {
                    alert('Terjadi kesalahan: ' + data.message);
                }
            })
            .catch((error) => alert('Error: ' + error));
        });
    }

    // Dokumen Form Handler
    var dokumenForm = document.getElementById("dokumenForm");
    if (dokumenForm) {
        dokumenForm.addEventListener("submit", function(event) {
            event.preventDefault();

            var id = document.getElementById("id").value;
            var namaDokumen = document.getElementById("namaDokumen").value;
            var urlDokumen = document.getElementById("urlDokumen").value;
            var uploadBy = document.getElementById("uploadBy").value;
            var ketuaRT = document.getElementById("ketuaRT").value;

            var data = {
                id: id,
                namaDokumen: namaDokumen,
                urlDokumen: urlDokumen,
                uploadBy: uploadBy,
                ketuaRT: ketuaRT
            };

            fetch('https://script.google.com/macros/s/AKfycbxr6h8VOhrewcj4HAVSGso-bXvy_gnUP7s_oE610_Nrly02_81LU8TyAgUk8oirk0SS/exec', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => response.json())
            .then(data => {
                if (data.result === "success") {
                    alert('Dokumen berhasil disimpan!');
                    document.getElementById("dokumenForm").reset();
                } else {
                    alert('Terjadi kesalahan: ' + data.message);
                }
            })
            .catch((error) => alert('Error: ' + error));
        });
    }

    // Arsip Form Handler
    var arsipForm = document.getElementById("arsipForm");
    if (arsipForm) {
        arsipForm.addEventListener("submit", function(event) {
            event.preventDefault();

            var id = document.getElementById("id").value;
            var tanggalSurat = document.getElementById("tanggalSurat").value;
            var nomorSurat = document.getElementById("nomorSurat").value;
            var pengirimPenerima = document.getElementById("pengirimPenerima").value;
            var perihal = document.getElementById("perihal").value;
            var lampiran = document.getElementById("lampiran").value;
            var tglKirim = document.getElementById("tglKirim").value;
            var kategoriSurat = document.getElementById("kategoriSurat").value;
            var fileArsip = document.getElementById("fileArsip").value;

            var data = {
                id: id,
                tanggalSurat: tanggalSurat,
                nomorSurat: nomorSurat,
                pengirimPenerima: pengirimPenerima,
                perihal: perihal,
                lampiran: lampiran,
                tglKirim: tglKirim,
                kategoriSurat: kategoriSurat,
                fileArsip: fileArsip
            };

            fetch('https://script.google.com/macros/s/AKfycbxr6h8VOhrewcj4HAVSGso-bXvy_gnUP7s_oE610_Nrly02_81LU8TyAgUk8oirk0SS/exec', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => response.json())
            .then(data => {
                if (data.result === "success") {
                    alert('Arsip berhasil disimpan!');
                    document.getElementById("arsipForm").reset();
                } else {
                    alert('Terjadi kesalahan: ' + data.message);
                }
            })
            .catch((error) => alert('Error: ' + error));
        });
    }

    // Domisili Form Handler
    var domisiliForm = document.getElementById("domisiliForm");
    if (domisiliForm) {
        domisiliForm.addEventListener("submit", function(event) {
            event.preventDefault();

            var nomorSurat = document.getElementById("nomorSurat").value;
            var ktpPemohon = document.getElementById("ktpPemohon").value;
            var namaPemohon = document.getElementById("namaPemohon").value;
            var genderPemohon = document.getElementById("genderPemohon").value;
            var tempatLahirPemohon = document.getElementById("tempatLahirPemohon").value;
            var tanggalLahirPemohon = document.getElementById("tanggalLahirPemohon").value;
            var agamaPemohon = document.getElementById("agamaPemohon").value;
            var pekerjaanPemohon = document.getElementById("pekerjaanPemohon").value;
            var alamatAsalPemohon = document.getElementById("alamatAsalPemohon").value;
            var alamatDomisili = document.getElementById("alamatDomisili").value;

            var data = {
                nomorSurat: nomorSurat,
                ktpPemohon: ktpPemohon,
                namaPemohon: namaPemohon,
                genderPemohon: genderPemohon,
                tempatLahirPemohon: tempatLahirPemohon,
                tanggalLahirPemohon: tanggalLahirPemohon,
                agamaPemohon: agamaPemohon,
                pekerjaanPemohon: pekerjaanPemohon,
                alamatAsalPemohon: alamatAsalPemohon,
                alamatDomisili: alamatDomisili
            };

            fetch('https://script.google.com/macros/s/AKfycbxr6h8VOhrewcj4HAVSGso-bXvy_gnUP7s_oE610_Nrly02_81LU8TyAgUk8oirk0SS/exec', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => response.json())
            .then(data => {
                if (data.result === "success") {
                    alert('Data Domisili berhasil disimpan!');
                    document.getElementById("domisiliForm").reset();
                } else {
                    alert('Terjadi kesalahan: ' + data.message);
                }
            })
            .catch((error) => alert('Error: ' + error));
        });
    }

    // SKTM Form Handler
    var sktmForm = document.getElementById("sktmForm");
    if (sktmForm) {
        sktmForm.addEventListener("submit", function(event) {
            event.preventDefault();

            var nomorSurat = document.getElementById("nomorSurat").value;
            var ktpPemohon = document.getElementById("ktpPemohon").value;
            var namaPemohon = document.getElementById("namaPemohon").value;
            var genderPemohon = document.getElementById("genderPemohon").value;
            var tempatLahirPemohon = document.getElementById("tempatLahirPemohon").value;
            var tanggalLahirPemohon = document.getElementById("tanggalLahirPemohon").value;
            var agamaPemohon = document.getElementById("agamaPemohon").value;
            var pekerjaanPemohon = document.getElementById("pekerjaanPemohon").value;
            var alamatPemohon = document.getElementById("alamatPemohon").value;
            var keperluan = document.getElementById("keperluan").value;

            var data = {
                nomorSurat: nomorSurat,
                ktpPemohon: ktpPemohon,
                namaPemohon: namaPemohon,
                genderPemohon: genderPemohon,
                tempatLahirPemohon: tempatLahirPemohon,
                tanggalLahirPemohon: tanggalLahirPemohon,
                agamaPemohon: agamaPemohon,
                pekerjaanPemohon: pekerjaanPemohon,
                alamatPemohon: alamatPemohon,
                keperluan: keperluan
            };

            fetch('https://script.google.com/macros/s/AKfycbxr6h8VOhrewcj4HAVSGso-bXvy_gnUP7s_oE610_Nrly02_81LU8TyAgUk8oirk0SS/exec', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => response.json())
            .then(data => {
                if (data.result === "success") {
                    alert('Data SKTM berhasil disimpan!');
                    document.getElementById("sktmForm").reset();
                } else {
                    alert('Terjadi kesalahan: ' + data.message);
                }
            })
            .catch((error) => alert('Error: ' + error));
        });
    }
});