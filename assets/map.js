let map;
let markers = [];

function initMap() {
  var locations = [
    ['Morely', -31.90165757759303, 115.90121411112631],
    ['Balcatta', -31.86171002901294, 115.82661798783843],
    ['Cannington', -32.02250540653021, 115.9384145301711],
    ['Oconnor', -32.059849130838394, 115.79327672647284],
    ['Canningvale', -32.070341428057475, 115.89165928229488],
    ['Kelmscott', -32.115644292809904, 116.01598902277512],
    ['Joondalup', -31.74087432901082, 115.76271776879366]
  ];

  var mapStyle = [
    {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#e9e9e9"
              },
              {
                  "lightness": 17
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f5f5f5"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 17
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 29
              },
              {
                  "weight": 0.2
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 18
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f5f5f5"
              },
              {
                  "lightness": 21
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#dedede"
              },
              {
                  "lightness": 21
              }
          ]
      },
      {
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "saturation": 36
              },
              {
                  "color": "#333333"
              },
              {
                  "lightness": 40
              }
          ]
      },
      {
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f2f2f2"
              },
              {
                  "lightness": 19
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#fefefe"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#fefefe"
              },
              {
                  "lightness": 17
              },
              {
                  "weight": 1.2
              }
          ]
      }
  ]
  map = new google.maps.Map(document.getElementById("custom-map"), {
    center: { lat: -31.94207727610309, lng: 116.10920883458125 },
    zoom: 10,
    styles: mapStyle
  });

  var icon = {
    url: "/assets/pin-location-26.svg",
    scaledSize: new google.maps.Size(26, 33)
  }; 

  var marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    icon : icon
  });  

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon : icon
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            // infowindow.setContent(locations[i][0]);
            // infowindow.open(map, marker);  
            for (var j = 0; j < markers.length; j++) {
              markers[j].setIcon("/assets/pin-location-26.svg");
            }
            marker.setIcon("/assets/pin-location-44.svg");
            console.log(locations[i][0].toLowerCase())
        }
    })(marker, i));
    markers.push(marker)
  }

  google.maps.event.addListener( map,'click', function () {
      
    //Change the marker icon

    console.log(icon)
  });
}

initMap();
