console.log("is this running? index.js?")

import {markerFc} from "./marker.js";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoiYnllb25zZSIsImEiOiJja2tlOXVpOTIwNHZ6MndxdGkzZHJycDJoIn0.T3oxAH5iFltGzu2UMqrclg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.641, 41.895], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
console.log("map from index.js=>",map)

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map);
