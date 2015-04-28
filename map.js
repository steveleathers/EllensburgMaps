function initialize() {
  var myLatlng = new google.maps.LatLng(46.9971, -120.5451);
  var mapOptions = {
    zoom: 10,
    center: myLatlng,
    MapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


  var surveyPoints = new google.maps.KmlLayer({
    url: 'http://steveleathers.github.io/EllensburgMaps/SurveyResponses.kmz'
  });
  var outline = new google.maps.KmlLayer({
    url: 'http://steveleathers.github.io/EllensburgMaps/EllensburgOutline.kmz'
  });
  surveyPoints.setMap(map);
  outline.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);