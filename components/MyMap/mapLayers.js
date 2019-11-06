const mapboxToken =
  'pk.eyJ1Ijoibmlzb2w5MSIsImEiOiJjazBjaWRvbTIwMWpmM2hvMDhlYWhhZGV0In0.wyRaVw6FXdw6g3wp3t9FNQ';
const mapLayers = [
  {
    name: 'streets', // the name of the layer, this will be seen in the layer selection control
    checked: 'true', // if the layer is selected in the layer selection control
    type: 'TileLayer', // the type of layer as shown at https://react-leaflet.js.org/docs/en/components.html#raster-layers
    baseLayer: true,
    // url of tiles
    url: `https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=${mapboxToken}`,
    // attribution string to be shown for this layer
    attribution:
      '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors',
  },
];
