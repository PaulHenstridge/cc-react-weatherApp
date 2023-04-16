import './cityData.css'

import React from "react";
const CityData = ({ city }) => {
    if (!city) return
    return (<>
        <div className="data-container">
            <h1> {city.name} </h1>
            <h3> {city.region} </h3>
            <h3> {city.country} </h3>
            <img src={city.icon} alt="weather icon"></img>
            <h4>{city.text}</h4>
            <h5>its {city.temp} degrees C</h5>
            <h5>Wind: {city.windSpeed}km ({city.windDirection})</h5>
            {/* <h6>current time: {city.time.slice(-5)}</h6> */}
        </div>

    </>);
}

export default CityData;