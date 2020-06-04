var map;
var marker;
var pos = {lat: -41.2866, lng: 174.7756};

initMap = function() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: pos,
		zoom: 4
	});

	marker = new google.maps.Marker({position: pos, map: map});
}