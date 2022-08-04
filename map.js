var map = L.map('map').setView([25.7606, -100.42599999999999], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([25.6397836, -100.2931016]).addTo(map)
    .bindPopup('Plataformas y Sistemas<br> soluciones en Tecnologia.')
    .openPopup();

