function initialize() {
  var myLatlng = new google.maps.LatLng(46.9971, -120.5451);
  var mapOptions = {
    zoom: 10,
    center: myLatlng,
    MapTypeId: google.maps.MapTypeId.TERRAIN,
    scrollwheel: false
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


  var surveyPoints = new google.maps.KmlLayer({
    url: 'http://steveleathers.github.io/EllensburgMaps/SurveyResponses.kmz'
  });
  surveyPoints.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);