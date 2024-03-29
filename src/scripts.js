/*eslint-env es_modules */
import { TownResponse } from 'components/TownResponse.js';

var map;
var marker;
var pos = {lat: -41.2866, lng: 174.7756};

document.addEventListener('DOMContentLoaded', function() {
   initMap();
}, false);

initMap = function() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: pos,
		zoom: 4
	});

	marker = new google.maps.Marker({position: pos, map: map});
	
	map.addListener('click', function() {
		goToTown(e.latLng);
	});
}

goToTown = function(latLng){
	var lat = latLng.lat;
	var lng = latLng.lng;
	
	fetch("https://api.openweathermap.org/data/2.5/weather?appid=YOURID&units=metric&lat=" + lat + "&lng=" + lng)
	.then(response => response.json())
	.then(json => TownResponse(json));
}
