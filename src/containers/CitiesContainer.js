import { useState, useEffect } from 'react'

import Header from "../components/Header";
import CityDisplay from "../components/CityDisplay";
import { queryWeatherApi } from "../helpers/queryWeatherApi"

const CitiesContainer = () => {
    const [userInput, setUserInput] = useState('')
    const [cityName, setCityName] = useState('')
    const [cityObj, setCityObj] = useState('')

    useEffect(() => {
        getData()
    }, [cityName])

    function getData() {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c98ccd2ed3msh80c72dbe4c5c14fp1b89afjsn578c5bb3f04a',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                const { location, current } = response

                let returnObj = {
                    name: location.name,
                    region: location.region,
                    country: location.country,
                    lat: location.lat,
                    lng: location.lon,
                    time: location.localtime,
                    temp: current.temp_c,
                    windSpeed: current.wind_kph,
                    windDirection: current.wind_dir,
                    text: current.condition.text,
                    icon: current.condition.icon
                }
                console.log(returnObj)
                setCityObj(returnObj)
            })

            .catch(err => console.error(err));
    }

    const handleOnInputChange = function (e) {
        setUserInput(e.target.value)
    }

    const handleOnCitySubmit = function (e) {
        console.log('submit handled', userInput)
        e.preventDefault()
        setCityName(userInput)


    }


    return (
        <>
            <h1>{userInput}</h1>
            <h2>The cities container</h2>
            <Header userInput={userInput} onCitySubmit={handleOnCitySubmit} onInputChange={handleOnInputChange} />
            <CityDisplay city={cityObj} />
        </>
    )
}

export default CitiesContainer;