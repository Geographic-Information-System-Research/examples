var map = new maptalks.Map('map', {
  center: [105.08052356963802, 36.04231948670001],
  zoom: 4,
  minZoom:1,
  maxZoom:18,
  spatialReference:{
    projection:'EPSG:4326'
  },
  baseLayer: new maptalks.TileLayer('base', {
    tileSystem : [1, -1, -180, 90],
    urlTemplate:'http://t{s}.tianditu.com/DataServer?T=vec_c&x={x}&y={y}&l={z}',
    subdomains:['1', '2', '3', '4', '5'],
    attribution : '&copy; <a target="_blank" href="http://www.tianditu.cn">Tianditu</a>'
  }),
  layers : [
    new maptalks.TileLayer('road', {
      urlTemplate:'http://t{s}.tianditu.com/DataServer?T=cva_c&x={x}&y={y}&l={z}',
      subdomains:['1', '2', '3', '4', '5'],
      opacity:1
    })
  ]
});
