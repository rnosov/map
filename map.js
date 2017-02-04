function initMap() {

	var basic = [{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"lightness":"-8"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"color":"#acacac"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#484848"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.stroke","stylers":[{"color":"#ff0000"},{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"lightness":"-3"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":"72"},{"visibility":"on"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"lightness":"23"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"30"},{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":"-19"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":"2"},{"gamma":"1.21"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"},{"saturation":"15"},{"hue":"#ff0000"}]},{"featureType":"road","elementType":"labels","stylers":[{"lightness":"-43"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"visibility":"on"},{"lightness":"22"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"weight":"0.12"},{"lightness":"-23"},{"visibility":"on"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"lightness":"71"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","elementType":"all","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"saturation":"5"},{"visibility":"on"},{"lightness":"5"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":"-24"},{"saturation":-97}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"saturation":"-88"},{"lightness":"-23"},{"visibility":"on"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"labels.text","stylers":[{"weight":"0.01"},{"lightness":"9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":"-32"},{"gamma":"2.99"}]}];
	var vintage = [{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#0096aa"},{"weight":"0.30"},{"saturation":"-75"},{"lightness":"5"},{"gamma":"1"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#0096aa"},{"saturation":"-75"},{"lightness":"5"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffe146"},{"visibility":"on"},{"weight":"6"},{"saturation":"-28"},{"lightness":"0"}]},{"featureType":"administrative","elementType":"labels.icon","stylers":[{"visibility":"on"},{"color":"#e6007e"},{"weight":"1"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#ffe146"},{"saturation":"-28"},{"lightness":"0"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"color":"#0096aa"},{"visibility":"simplified"},{"saturation":"-75"},{"lightness":"5"},{"gamma":"1"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"visibility":"on"},{"color":"#ffe146"},{"weight":8},{"saturation":"-28"},{"lightness":"0"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#0096aa"},{"weight":8},{"lightness":"5"},{"gamma":"1"},{"saturation":"-75"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#0096aa"},{"saturation":"-75"},{"lightness":"5"},{"gamma":"1"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#0096aa"},{"saturation":"-75"},{"lightness":"5"},{"gamma":"1"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#ffe146"},{"saturation":"-28"},{"lightness":"0"}]},{"featureType":"water","elementType":"labels.icon","stylers":[{"visibility":"off"}]}];
	var something = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"},{"color":"#052366"},{"saturation":"-70"},{"lightness":"85"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":"-53"},{"weight":"1.00"},{"gamma":"0.98"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"on"}]},{"featureType":"road","elementType":"geometry","stylers":[{"saturation":"-18"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#57677a"},{"visibility":"on"}]}];
	var styles = basic.concat([{
    featureType: "poi",
    stylers: [
      { visibility: "off" }
    ]   
  }]);

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 51.5073, lng: -0.1339},
    styles: styles

  });

  // Create an array of alphabetical characters used to label the markers.
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function(location, i) {
  	console.log(location);
    marker = new google.maps.Marker({
      position: {lat: location.lat, lng: location.lng},
      label: labels[i % labels.length]
    });
    marker.addListener('click', function() {
       var infowindow = new google.maps.InfoWindow({
        content: location.text
       });
      infowindow.open(map, this);
    });
    return marker;
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
var locations = [
// todo: connect to the database
	{ lat: 51.4038792, lng: 0.0203771000000188, text: 'Bromley Winter Night Shelter' }, 
	{ lat: 51.5186601, lng: -0.0675028000000566, text: 'Towerhamlets (East End) Citizens Advice' }, 
	{ lat: 51.5174603, lng: -0.0732901999999739, text: 'Crisis Christmas' }, 
	{ lat: 51.523559, lng: 0.0248341999999865, text: 'MEMORIAL BAPTIST CHURCH PLAISTOW' }, 
	{ lat: 51.5379006999999, lng: -0.00498459999994338, text: 'THE CARPENTERS' }, 
	{ lat: 51.5126254, lng: 0.025271699999962, text: 'Newham (East End) Citizens Advice Bureau' }, 
	{ lat: 51.5464284, lng: 0.02737819999993, text: 'EMMANUEL CHURCH (STRATFORD)' }, 
	{ lat: 51.5443995, lng: -0.0551487999999835, text: 'Hackney Citizens Advice' }, 
	{ lat: 51.5598408, lng: 0.083591399999932, text: 'The Salvation Army Redbridge Cold Weather Shelter' }, 
	{ lat: 51.4117326999999, lng: -0.302353799999991, text: 'Joel Community Trust Night Shelter' }, 
	{ lat: 51.5416319, lng: -0.101947999999993, text: 'Royal Courts of Justice Advice (Islington)' }, 
	{ lat: 51.5399542, lng: -0.0806321000000025, text: 'ST PETER’S CAFE' }, 
	{ lat: 51.5342046, lng: -0.103093299999954, text: 'ST JOHN THE EVANGELIST' }, 
	{ lat: 51.6121501, lng: -0.174474400000008, text: 'Together in Barnet Winter Shelter' }, 
	{ lat: 51.5864499, lng: -0.0941477999999733, text: 'HARINGEY MIGRANT SUPPORT CENTRE' }, 
	{ lat: 51.5634192, lng: -0.0791968999999426, text: 'NORTH LONDON ACTION FOR THE HOMELESS' }, 
	{ lat: 51.5627953, lng: -0.0800888999999642, text: 'SEVENTH DAY ADVENTIST CHURCH' }, 
	{ lat: 51.5955922, lng: -0.0692057999999633, text: 'Tottenham Citizens Advice' }, 
	{ lat: 51.601425, lng: -0.0865751999999702, text: 'Waltheof Gardens Citizens Advice' }, 
	{ lat: 51.5652605999999, lng: -0.126906700000063, text: 'THE CABIN' }, 
	{ lat: 51.5524141, lng: -0.129396199999973, text: 'CAMDEN ROAD BAPTIST CHURCH' }, 
	{ lat: 51.528399, lng: -0.142649399999982, text: 'Citizen\'s Advice Camden' }, 
	{ lat: 51.5380196, lng: -0.14369970000007, text: 'OUR LADY OF HAL' }, 
	{ lat: 51.5486481, lng: -0.23814249999998, text: 'Brent Citizens Advice' }, 
	{ lat: 51.5564523, lng: -0.219001199999979, text: 'Ashford Place Assessment Centre' }, 
	{ lat: 51.5455809, lng: -0.178611100000011, text: 'RHYTHMS OF LIFE INTERNATIONAL' }, 
	{ lat: 51.5468078, lng: -0.142159399999968, text: 'Citizens Advice Camden' }, 
	{ lat: 51.5502921, lng: -0.154393000000027, text: 'SIMON COMMUNITY (HOUSE OF HOSPITALITY)' }, 
	{ lat: 51.4973052, lng: -0.0824532000000317, text: 'Robes Project (Southwark & Lambeth)' }, 
	{ lat: 51.4582336, lng: 0.00718679999999949, text: 'EMMANUEL PENTECOSTAL CHURCH' }, 
	{ lat: 51.4596338, lng: -0.00688809999996919, text: 'Citizens Advice Lewisham' }, 
	{ lat: 51.4737909, lng: -0.0693853000000217, text: 'Peckham Citizens Advice Bureau' }, 
	{ lat: 51.4927299, lng: -0.063961000000063, text: 'Bermondsey Citizens Advice' }, 
	{ lat: 51.4984975, lng: 0.104449899999963, text: 'GOOD SAMARIA NETWORK' }, 
	{ lat: 51.4750001, lng: -0.0248234000000593, text: '999 Club (Deptford Centre)' }, 
	{ lat: 51.4637475, lng: -0.16407730000003, text: 'Battersea Library Centre' }, 
	{ lat: 51.4593188, lng: -0.242419400000017, text: 'SOCIETY OF THE SACRED HEART' }, 
	{ lat: 51.4897685, lng: -0.135937099999978, text: 'OPEN DOOR MEAL' }, 
	{ lat: 51.440267, lng: -0.126514000000042, text: 'Citizens Advice Merton & Lambeth' }, 
	{ lat: 51.487471, lng: -0.168180300000017, text: 'Chelsea Citizens Advice' }, 
	{ lat: 51.4878349, lng: -0.167301500000007, text: 'Glass Door' }, 
	{ lat: 51.4602837, lng: -0.137743300000011, text: '112-116 St Georges Rd' }, 
	{ lat: 51.4602837, lng: -0.137743300000011, text: 'Ace Of Clubs' }, 
	{ lat: 51.4614488, lng: -0.122839500000054, text: 'Brixton Seventh-day Adventist Church' }, 
	{ lat: 51.5244769, lng: -0.225034999999934, text: 'STREETLYTES' }, 
	{ lat: 51.5198584, lng: -0.205770099999995, text: 'Kensington (London) Citizens Advice' }, 
	{ lat: 51.5213327, lng: -0.215168100000028, text: 'ST PIUS X CHURCH' }, 
	{ lat: 51.515363, lng: -0.217544699999962, text: '240 Project' }, 
	{ lat: 51.5066464, lng: -0.234071299999982, text: 'The Advice Centre Citizens Advice' }, 
	{ lat: 51.5101966, lng: -0.318381499999986, text: 'ST JOHN’S (EALING)' }, 
	{ lat: 51.5101966, lng: -0.318381499999986, text: 'ST JOHN’S (EALING)' }, 
	{ lat: 51.4925872, lng: -0.207129200000053, text: 'Hammersmith & Fulham Citizens Advice Bureau' }, 
	{ lat: 51.4902434, lng: -0.209698699999989, text: 'BARON’S COURT PROJECT' }, 
	{ lat: 51.4868636, lng: -0.209197300000028, text: 'ST ANDREW’S CHURCH' }, 
	{ lat: 51.512415, lng: -0.132188100000007, text: 'ST PATRICK’S OPEN HOUSE' }, 
	{ lat: 51.521058, lng: -0.135654299999941, text: 'AMERICAN CHURCH' }, 
	{ lat: 51.5169045, lng: -0.138548000000014, text: 'LONDON JESUS CENTRE' }, 
	{ lat: 51.5151585, lng: -0.175659600000017, text: 'Westminster CAB' }, 
	{ lat: 51.4970998999999, lng: -0.194720700000061, text: 'COPTIC CITY MISSION (ST MARK’S COPTIC ORTHODOX CHURCH)' }, 
	{ lat: 51.5184359999999, lng: -0.114515600000004, text: 'Royal Courts of Justice Advice Bureau (Strand)' }, 
	{ lat: 51.5304341, lng: -0.114639899999929, text: 'KING’S CROSS BAPTIST CHURCH' }, 
	{ lat: 51.5113385999999, lng: -0.130099200000017, text: 'NOTRE DAME CHURCH' }, 
	{ lat: 51.5164284, lng: -0.126719900000011, text: 'BLOOMSBURY CENTRAL BAPTIST CHURCH' }, 
]