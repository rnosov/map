function initMap() {

	var basic = [{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"lightness":"-8"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"color":"#acacac"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#484848"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.stroke","stylers":[{"color":"#ff0000"},{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"lightness":"-3"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":"72"},{"visibility":"on"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"lightness":"23"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"30"},{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":"-19"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":"2"},{"gamma":"1.21"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"},{"saturation":"15"},{"hue":"#ff0000"}]},{"featureType":"road","elementType":"labels","stylers":[{"lightness":"-43"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"visibility":"on"},{"lightness":"22"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"weight":"0.12"},{"lightness":"-23"},{"visibility":"on"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"lightness":"71"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","elementType":"all","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"saturation":"5"},{"visibility":"on"},{"lightness":"5"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":"-24"},{"saturation":-97}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"saturation":"-88"},{"lightness":"-23"},{"visibility":"on"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"labels.text","stylers":[{"weight":"0.01"},{"lightness":"9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":"-32"},{"gamma":"2.99"}]}];
	var vintage = [{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#0096aa"},{"weight":"0.30"},{"saturation":"-75"},{"lightness":"5"},{"gamma":"1"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#0096aa"},{"saturation":"-75"},{"lightness":"5"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffe146"},{"visibility":"on"},{"weight":"6"},{"saturation":"-28"},{"lightness":"0"}]},{"featureType":"administrative","elementType":"labels.icon","stylers":[{"visibility":"on"},{"color":"#e6007e"},{"weight":"1"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#ffe146"},{"saturation":"-28"},{"lightness":"0"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"color":"#0096aa"},{"visibility":"simplified"},{"saturation":"-75"},{"lightness":"5"},{"gamma":"1"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"visibility":"on"},{"color":"#ffe146"},{"weight":8},{"saturation":"-28"},{"lightness":"0"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#0096aa"},{"weight":8},{"lightness":"5"},{"gamma":"1"},{"saturation":"-75"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#0096aa"},{"saturation":"-75"},{"lightness":"5"},{"gamma":"1"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#0096aa"},{"saturation":"-75"},{"lightness":"5"},{"gamma":"1"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#ffe146"},{"saturation":"-28"},{"lightness":"0"}]},{"featureType":"water","elementType":"labels.icon","stylers":[{"visibility":"off"}]}];
	var something = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"},{"color":"#052366"},{"saturation":"-70"},{"lightness":"85"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":"-53"},{"weight":"1.00"},{"gamma":"0.98"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"on"}]},{"featureType":"road","elementType":"geometry","stylers":[{"saturation":"-18"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#57677a"},{"visibility":"on"}]}];
	var dark = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"lightness":"62"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"lightness":"0"}]},{"featureType":"landscape","elementType":"labels.text.fill","stylers":[{"lightness":"69"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"lightness":"63"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#2d2d2d"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#0f252e"},{"lightness":17}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"lightness":"-100"},{"gamma":"0.00"}]}];
	var dark2  = [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}];
	var listingsoff = [{
    featureType: "poi",
    stylers: [
      { visibility: "off" }
    ]   
  }];
  var roadsoff = [{
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  }];
	var styles = dark2.concat(listingsoff);//.concat(roadsoff);
	//var styles = [].concat(roadsoff);

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 51.5073, lng: -0.1339},
    styles: styles

  });

  // Create an array of alphabetical characters used to label the markers.
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var iconBase = 'https://maps.google.com/mapfiles/kml/';
  var icons = {
    food: {
      icon: iconBase + '/pal2/icon32.png'
    },
    shelter: {
      icon: iconBase + 'pal2/icon2.png'
    },
    church: {
      icon: iconBase + 'pal2/icon3.png'
    },
    info: {
    	icon: iconBase + 'pal3/icon36.png'
    },
    shower: {
    	icon: iconBase + 'pal4/icon32.png'
    }
  };


  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function(location, i) {
    marker = new google.maps.Marker({
      position: {lat: location.lat, lng: location.lng},
      icon: icons[location.icon] ? icons[location.icon].icon : null,
      //label: labels[i % labels.length]
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
{ lat: 51.4038792, lng: 0.0203771000000188, icon: 'shelter', text: "<h3>Bromley Winter Night Shelter</h3>" }, 
{ lat: 51.5186601, lng: -0.0675028000000566, icon: 'info', text: "<h3>Towerhamlets (East End) Citizens Advice</h3>" }, 
{ lat: 51.5174603, lng: -0.0732901999999739, icon: 'shelter', text: "<h3>Crisis Christmas</h3>" }, 
{ lat: 51.523559, lng: 0.0248341999999865, icon: 'food', text: "<h3>MEMORIAL BAPTIST CHURCH PLAISTOW</h3>" }, 
{ lat: 51.5379006999999, lng: -0.00498459999994338, icon: 'food', text: "<h3>THE CARPENTERS</h3>" }, 
{ lat: 51.5126254, lng: 0.025271699999962, icon: 'info', text: "<h3>Newham (East End) Citizens Advice Bureau</h3>" }, 
{ lat: 51.5464284, lng: 0.02737819999993, icon: 'food', text: "<h3>EMMANUEL CHURCH (STRATFORD)</h3>" }, 
{ lat: 51.5443995, lng: -0.0551487999999835, icon: 'info', text: "<h3>Hackney Citizens Advice</h3>" }, 
{ lat: 51.5598408, lng: 0.083591399999932, icon: 'shelter', text: "<h3>The Salvation Army Redbridge Cold Weather Shelter</h3>" }, 
{ lat: 51.4117326999999, lng: -0.302353799999991, icon: 'shelter', text: "<h3>Joel Community Trust Night Shelter</h3>" }, 
{ lat: 51.5416319, lng: -0.101947999999993, icon: 'info', text: "<h3>Royal Courts of Justice Advice (Islington)</h3>" }, 
{ lat: 51.5399542, lng: -0.0806321000000025, icon: 'food', text: "<h3>ST PETER'S CAFE</h3>" }, 
{ lat: 51.5342046, lng: -0.103093299999954, icon: 'church', text: "<h3>ST JOHN THE EVANGELIST</h3>" }, 
{ lat: 51.6121501, lng: -0.174474400000008, icon: 'shelter', text: "<h3>Together in Barnet Winter Shelter</h3>" }, 
{ lat: 51.5864499, lng: -0.0941477999999733, icon: 'info', text: "<h3>HARINGEY MIGRANT SUPPORT CENTRE</h3>Advocacy, Benefits advice, Food (free), Legal advice" }, 
{ lat: 51.5634192, lng: -0.0791968999999426, icon: 'info', text: "<h3>NORTH LONDON ACTION FOR THE HOMELESS</h3>Benefits advice, Education/training, Food (free), Leisure activities, Leisure facilities, Music/drama" }, 
{ lat: 51.5627953, lng: -0.0800888999999642, icon: 'food', text: "<h3>SEVENTH DAY ADVENTIST CHURCH</h3>" }, 
{ lat: 51.5955922, lng: -0.0692057999999633, icon: 'info', text: "<h3>Tottenham Citizens Advice</h3>" }, 
{ lat: 51.601425, lng: -0.0865751999999702, icon: 'info', text: "<h3>Waltheof Gardens Citizens Advice</h3>" }, 
{ lat: 51.5652605999999, lng: -0.126906700000063, icon: 'food', text: "<h3>THE CABIN</h3>" }, 
{ lat: 51.5524141, lng: -0.129396199999973, icon: 'food', text: "<h3>CAMDEN ROAD BAPTIST CHURCH</h3>" }, 
{ lat: 51.528399, lng: -0.142649399999982, icon: 'info', text: "<h3>Citizen's Advice Camden</h3>" }, 
{ lat: 51.5380196, lng: -0.14369970000007, icon: 'food', text: "<h3>OUR LADY OF HAL</h3>" }, 
{ lat: 51.5486481, lng: -0.23814249999998, icon: 'info', text: "<h3>Brent Citizens Advice</h3>" }, 
{ lat: 51.5564523, lng: -0.219001199999979, icon: 'shelter', text: "<h3>Ashford Place Assessment Centre</h3>" }, 
{ lat: 51.5455809, lng: -0.178611100000011, icon: 'shower', text: "<h3>RHYTHMS OF LIFE INTERNATIONAL</h3>Clothing store, Food (free), Outreach worker links" }, 
{ lat: 51.5468078, lng: -0.142159399999968, icon: 'info', text: "<h3>Citizens Advice Camden</h3>" }, 
{ lat: 51.5502921, lng: -0.154393000000027, icon: 'shower', text: "<h3>SIMON COMMUNITY (HOUSE OF HOSPITALITY)</h3>Food, shower, laundry, internet & clothes store" }, 
{ lat: 51.4973052, lng: -0.0824532000000317, icon: 'shelter', text: "<h3>Robes Project (Southwark & Lambeth)</h3>" }, 
{ lat: 51.4582336, lng: 0.00718679999999949, icon: 'food', text: "<h3>EMMANUEL PENTECOSTAL CHURCH</h3>" }, 
{ lat: 51.4596338, lng: -0.00688809999996919, icon: 'info', text: "<h3>Citizens Advice Lewisham</h3>" }, 
{ lat: 51.4737909, lng: -0.0693853000000217, icon: 'info', text: "<h3>Peckham Citizens Advice Bureau</h3>" }, 
{ lat: 51.4927299, lng: -0.063961000000063, icon: 'info', text: "<h3>Bermondsey Citizens Advice</h3>" }, 
{ lat: 51.4984975, lng: 0.104449899999963, icon: 'food', text: "<h3>GOOD SAMARIA NETWORK</h3>" }, 
{ lat: 51.4750001, lng: -0.0248234000000593, icon: 'shelter', text: "<h3>999 Club (Deptford Centre)</h3>" }, 
{ lat: 51.4637475, lng: -0.16407730000003, icon: 'info', text: "<h3>Battersea Library Centre</h3>" }, 
{ lat: 51.4593188, lng: -0.242419400000017, icon: 'food', text: "<h3>SOCIETY OF THE SACRED HEART</h3>" }, 
{ lat: 51.4897685, lng: -0.135937099999978, icon: 'food', text: "<h3>OPEN DOOR MEAL</h3>" }, 
{ lat: 51.440267, lng: -0.126514000000042, icon: 'info', text: "<h3>Citizens Advice Merton & Lambeth</h3>" }, 
{ lat: 51.487471, lng: -0.168180300000017, icon: 'info', text: "<h3>Chelsea Citizens Advice</h3>" }, 
{ lat: 51.4878349, lng: -0.167301500000007, icon: 'shelter', text: "<h3>Glass Door</h3>" }, 
{ lat: 51.4602837, lng: -0.137743300000011, icon: 'food', text: "<h3>112-116 St Georges Rd</h3>" }, 
{ lat: 51.4602837, lng: -0.137743300000011, icon: 'food', text: "<h3>Ace Of Clubs</h3>" }, 
{ lat: 51.4614488, lng: -0.122839500000054, icon: 'food', text: "<h3>Brixton Seventh-day Adventist Church</h3>" }, 
{ lat: 51.5244769, lng: -0.225034999999934, icon: 'food', text: "<h3>STREETLYTES</h3>Free hot meal, friendship and donated items. Open-ccess to anyone who is homeless or vulnerably housed, or who can’t afford to pay for both food and housing." }, 
{ lat: 51.5198584, lng: -0.205770099999995, icon: 'info', text: "<h3>Kensington (London) Citizens Advice</h3>" }, 
{ lat: 51.5213327, lng: -0.215168100000028, icon: 'food', text: "<h3>ST PIUS X CHURCH</h3>" }, 
{ lat: 51.515363, lng: -0.217544699999962, icon: 'info', text: "<h3>240 Project</h3>Social support for isolated and vulnerable people." }, 
{ lat: 51.5066464, lng: -0.234071299999982, icon: 'info', text: "<h3>The Advice Centre Citizens Advice</h3>" }, 
{ lat: 51.5101966, lng: -0.318381499999986, icon: 'food', text: "<h3>ST JOHN’S (EALING)</h3>" }, 
{ lat: 51.4925872, lng: -0.207129200000053, icon: 'info', text: "<h3>Hammersmith & Fulham Citizens Advice Bureau</h3>" }, 
{ lat: 51.4902434, lng: -0.209698699999989, icon: 'shower', text: "<h3>BARON’S COURT PROJECT</h3>Bathroom/showers, Clothing store, Food, Internet access, Leisure activities, Leisure facilities, Medical/health" }, 
{ lat: 51.4868636, lng: -0.209197300000028, icon: 'shower', text: "<h3>ST ANDREW’S CHURCH</h3>Clothing store, Food (free)" }, 
{ lat: 51.512415, lng: -0.132188100000007, icon: 'food', text: "<h3>ST PATRICK’S OPEN HOUSE</h3>" }, 
{ lat: 51.521058, lng: -0.135654299999941, icon: 'food', text: "<h3>AMERICAN CHURCH</h3>Food, Clothing Store" }, 
{ lat: 51.5169045, lng: -0.138548000000014, icon: 'shower', text: "<h3>LONDON JESUS CENTRE</h3>Art classes, Bathroom/showers, Clothing store, Education/training, Food, Internet access, Leisure activities" }, 
{ lat: 51.5151585, lng: -0.175659600000017, icon: 'info', text: "<h3>Westminster CAB</h3>" }, 
{ lat: 51.4970998999999, lng: -0.194720700000061, icon: 'food', text: "<h3>COPTIC CITY MISSION (ST MARK’S COPTIC ORTHODOX CHURCH)</h3>" }, 
{ lat: 51.5184359999999, lng: -0.114515600000004, icon: 'info', text: "<h3>Royal Courts of Justice Advice Bureau (Strand)</h3>" }, 
{ lat: 51.5304341, lng: -0.114639899999929, icon: 'food', text: "<h3>KING'S CROSS BAPTIST CHURCH</h3>" }, 
{ lat: 51.5113385999999, lng: -0.130099200000017, icon: 'food', text: "<h3>NOTRE DAME CHURCH</h3>" }, 
{ lat: 51.5164284, lng: -0.126719900000011, icon: 'food', text: "<h3>BLOOMSBURY CENTRAL BAPTIST CHURCH</h3>" }, 
]