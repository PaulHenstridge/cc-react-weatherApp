import React from "react";

import CityData from "./CityData";
import CityMap from "./CityMap";
import Button from "./Button";

const CityDisplay = ({ city, addToList }) => {

    if (!city) return

    let btnTxt = 'Add to Watch List'
    return (<>
        <CityData city={city} />
        <CityMap city={city} />
        <Button city={city} clickFunc={addToList} btnTxt={btnTxt} />
    </>);
}

export default CityDisplay;