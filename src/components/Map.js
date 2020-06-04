import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';

function initMap(props) {

    const [responseData, setResponseData] = useState('');

    const handleTownChange = async (townValue) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&q=${townValue},nz`)
        const json = await res.json()
        setResponseData(json);
    }

    const clearResponse = () => {
        setResponseData('');
    }

    return (
        <div id="map">
              
        </div>
    );
}
  
export default AppContainer