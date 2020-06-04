import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch'
import TownResponse from '../components/TownResponse';
import Town from '../components/Town';

function AppContainer(props) {

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
        <div>
            <div className="row mt-4">
                <div className="col-sm-4"></div>
                <Town onTownChange={handleTownChange} clearResponse={clearResponse}/>
                <div className="col-sm-4"></div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-2"></div>
                <TownResponse responseData={responseData} clearResponse={clearResponse}/>
                <div className="col-sm-2"></div>
            </div>    
        </div>
    );
}
  
export default AppContainer
