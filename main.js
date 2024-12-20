import ImageTile from 'https://cdn.skypack.dev/ol/source/ImageTile.js';
import Map from 'https://cdn.skypack.dev/ol/Map.js';
import TileLayer from 'https://cdn.skypack.dev/ol/layer/Tile.js';
import View from 'https://cdn.skypack.dev/ol/View.js';
import {
  DragRotateAndZoom,
  defaults as defaultInteractions,
} from 'https://cdn.skypack.dev/ol/interaction.js';
import {FullScreen, defaults as defaultControls} from 'https://cdn.skypack.dev/ol/control.js';

const key = '7Pz2Mu25fURK4dYCWvj8'; // Ganti dengan API Key Anda
const attributions =
  '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
  '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

const map = new Map({
  controls: defaultControls().extend([new FullScreen()]),
  interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
  layers: [
    new TileLayer({
      source: new ImageTile({
        attributions: attributions,
        url:
          'https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=' + key,
        tileSize: 512,
        maxZoom: 20,
      }),
    }),
  ],
  target: 'map',
  view: new View({
    center: [-33519607, 5616436],
    rotation: -Math.PI / 8,
    zoom: 8,
  }),
});

const hero = document.getElementById('hero');
const learnMoreButton = document.getElementById('learnMoreButton');

learnMoreButton.addEventListener('click', () => {
  hero.classList.add('hidden');
});