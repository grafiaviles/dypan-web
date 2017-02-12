// GOOGLE MAPS

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: -33.529634, lng: -70.7635}
  });
  // Icono personalizado
  var image = 'img/icon-google.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: -33.528634, lng: -70.7635},
    map: map,
    icon: image
  });
  // Style Color
    var styles = [
      {
        stylers: [
          { hue: "#ffffff" },
          { saturation: -100 }
        ]
      },{
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
          { lightness: 100 },
          { visibility: "simplified" }
        ]
      },{
        featureType: "road",
        elementType: "labels.icon",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];

    map.setOptions({styles: styles});

};

// Habilitar los eventos del puntero sólo al hacer click;
var $map = $('#map');

$map.addClass('scrolloff');
$('#canvas_maps').on('click', function () {
    $map.removeClass('scrolloff');
});

// Desactivar los eventos del puntero cuando el ratón abandona el área del lienzo del mapa;
$map.mouseleave(function () {
    $map.addClass('scrolloff');
});