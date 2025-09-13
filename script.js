// Peta Google Maps
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: -6.1750, lng: 106.8650 }, // Jakarta sebagai default
    });

    // Fungsi untuk menambahkan marker
    var marker;
    document.getElementById('desaForm').addEventListener('submit', function(e) {
        e.preventDefault();

        // Ambil koordinat
        var coords = document.getElementById('desaCoordinates').value.split(',');
        var lat = parseFloat(coords[0].trim());
        var lng = parseFloat(coords[1].trim());

        // Set marker di peta
        marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: map,
        });

        map.setCenter({ lat: lat, lng: lng }); // Pindahkan peta ke koordinat baru
    });
}

// Menangani pengiriman data form
document.getElementById('desaForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Mencegah refresh halaman

    var desaName = document.getElementById('desaName').value;
    var desaLocation = document.getElementById('desaLocation').value;
    var desaPopulation = document.getElementById('desaPopulation').value;
    var desaDescription = document.getElementById('desaDescription').value;
    var desaCoordinates = document.getElementById('desaCoordinates').value;

    var desaData = {
        name: desaName,
        location: desaLocation,
        population: desaPopulation,
        description: desaDescription,
        coordinates: desaCoordinates
    };

    // Kirim data ke Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbze7seI0RAoLyCvlG8JxYJy-HFTR3vjpln2wGHszn0cEw5mRpsvvE5ErXVUz5AWOPDr/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(desaData),
    })
    .then(response => response.json())
    .then(data => {
        alert('Data Desa berhasil disimpan!');
        document.getElementById('desaForm').reset();
        updateTable(desaData);  // Tambahkan data ke tabel
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat menyimpan data.');
    });
});

// Update Tabel Data
function updateTable(data) {
    var table = document.getElementById('desaTable').getElementsByTagName('tbody')[0];
    var row = table.insertRow();
    row.insertCell(0).textContent = data.name;
    row.insertCell(1).textContent = data.location;
    row.insertCell(2).textContent = data.population;
    row.insertCell(3).textContent = data.description;
    row.insertCell(4).textContent = data.coordinates;
}

// Menangani login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password123') {
        alert('Login berhasil!');
        document.getElementById('loginSection').classList.add('hidden');
        document.getElementById('dataInputSection').classList.remove('hidden');
    } else {
        alert('Username atau password salah');
    }
});
