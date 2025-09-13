// Fungsi untuk mengirim data ke Google Apps Script
function submitData() {
    var data = {
        id: document.getElementById('id').value,
        nama: document.getElementById('nama').value,
        nik: document.getElementById('nik').value,
        jenisKelamin: document.getElementById('jenisKelamin').value,
        tempatLahir: document.getElementById('tempatLahir').value,
        tanggalLahir: document.getElementById('tanggalLahir').value,
        agama: document.getElementById('agama').value,
        pekerjaan: document.getElementById('pekerjaan').value,
        statusKawin: document.getElementById('statusKawin').value,
        alamat: document.getElementById('alamat').value,
        rt: document.getElementById('rt').value
    };

    fetch('https://script.google.com/macros/s/AKfycbwQkSZf3NKx518tG5NzYpvSUT5MReOocdDPoHQ0pGW5Q2vhE6KkGG5tBnfsl-YLKRz4/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => alert('Data berhasil disimpan!'))
    .catch((error) => alert('Error: ' + error));
}

// Handle login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple login validation (you can integrate with Google Sheets for validation)
    if (username === "admin" && password === "admin123") {
        window.location.href = "index.html";  // Redirect to homepage after login
    } else {
        alert("Username atau password salah.");
    }
});
