//import React, { useState } from 'react';
//import TownResponse from '../components/TownResponse';
//import fetch from 'isomorphic-unfetch'

var map;
var marker;
var pos = {lat: -41.2866, lng: 174.7756};

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


//const [responseData, setResponseData] = useState('');

//const handleTownChange = async (townValue) => {
// 	const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&q=${townValue},nz`)
//    const json = await res.json()
//      	setResponseData(json);
//    }

//const clearResponse = () => {
//  	setResponseData('');
//}

//goToTown = function(latLng) {
	
//}