import CityData from "./CityData";
import CityMap from "./CityMap";

const CityDisplay = ({ city }) => {
    return (<>
        <CityData city={city} />
        <CityMap city={city} />
    </>);
}

export default CityDisplay;