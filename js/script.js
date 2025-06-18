const map = L.map('map').setView([-9.65321, 120.26666], 10);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Style
const myStyle = {
  color: 'red',
  weight: 1,
  opacity: 1,
};

// Pop UP
function popUp(f, l) {
  const out = [];
  if (f.properties) {
    out.push('DESA : ' + f.properties['WADMKD']);
    l.bindPopup(out.join('<br />'));
  }
}

// GeoJSON
const jsonTest = new L.GeoJSON.AJAX(
  [
    'Geojson/Mbatakapidu.geojson',
    'Geojson/Rambangaru.geojson',
    'Geojson/Tanaraing.geojson',
    'Geojson/Watupuda.geojson',
    'Geojson/Kananggar.geojson',
    'Geojson/KombaPari.geojson',
    'Geojson/LumbuManggit.geojson',
    'Geojson/Maubokul.geojson',
    'Geojson/Nggongi.geojson',
    'Geojson/Pamburu.geojson',
    'Geojson/Bidipraing.geojson',
    'Geojson/Anajiaka.geojson',
    'Geojson/BanggaWatu.geojson',
    'Geojson/DedePade.geojson',
    'Geojson/Hambawutang.geojson',
    'Geojson/KatikuLoku.geojson',
    'Geojson/Katikutana.geojson',
    'Geojson/LagaLete.geojson',
    'Geojson/Lailunggi.geojson',
    'Geojson/MakataKeri.geojson',
    'Geojson/Manola.geojson',
    'Geojson/MaradesaTimur.geojson',
    'Geojson/MbilurPangadu.geojson',
    'Geojson/OmbaRade.geojson',
    'Geojson/PatialaBawa.geojson',
    'Geojson/Wailawa.geojson',
    'Geojson/WeePaboba.geojson',
    'Geojson/WeePatola.geojson',
  ],
  { onEachFeature: popUp, style: myStyle }
).addTo(map);

// Marker
var marker = L.marker([-9.853232077753434, 120.6420103050499]).addTo(map).bindPopup('<b>GKS KIRIHEWI</b>').openPopup();
var marker = L.marker([-9.769102717602856, 119.79897095232919]).addTo(map).bindPopup('<b>GKS BIDI PRAING</b>').openPopup();
var marker = L.marker([-10.039244543891884, 120.76613666908432]).addTo(map).bindPopup('<b>GKS KAHEMBI KALELANG </b>').openPopup();
var marker = L.marker([-9.623439189094851, 119.6554721099987]).addTo(map).bindPopup('<b>GKS PAMAMLLAR </b>').openPopup();

// gsap
gsap.registerPlugin(TextPlugin);

gsap.from('.display-4', {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: 'back',
  delay: 1,
});

gsap.to('.desa', {
  duration: 2,
  delay: 2,
  text: 'DAFTAR DESA KKN 2025',
});

gsap.from('.ig', {
  duration: 1,
  x: 100,
  opacity: 0,
  ease: 'back',
  delay: 2.5,
});
gsap.from('.ema', {
  duration: 1,
  x: 100,
  opacity: 0,
  ease: 'back',
  delay: 3,
});
gsap.from('.fb', {
  duration: 1,
  x: 100,
  opacity: 0,
  ease: 'back',
  delay: 3.5,
});
