import React from 'react';
import { useEffect } from 'react'
import L from 'leaflet'

const CityMap = ({ city }) => {

    // useEffect(() => {
    //     // Initialize map
    //     const map = L.map('map').setView([city.lat, city.lng], 13);

    //     // Add tile layer
    //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    //     }).addTo(map);

    //     // Add marker
    //     L.marker([city.lat, city.lng]).addTo(map)
    //         .bindPopup('Your selected location');
    // }, [city])

    // so in this function i need to ge tthe coordinates from the city passed in
    // pass them to a createMap function
    // render the map in the return statement

    return (<>
        <div id="map">MAP?</div>
    </>);

}

export default CityMap;