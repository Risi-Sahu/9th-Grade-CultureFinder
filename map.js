// Initialize and add the map
let map;

async function initMap() {
  // The location of Boise
  const position = { lat: 43.6150, lng: -116.2023 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Boise
  map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Boise
  new google.maps.Marker({
    position: position,
    map,
    title: "Boise",
  });
}


initMap();


