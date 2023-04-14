import { useState, useEffect } from 'react'

import Header from "../components/Header";
import CityDisplay from "../components/CityDisplay";
import { queryWeatherApi } from "../helpers/queryWeatherApi"

const CitiesContainer = () => {
    const [userInput, setUserInput] = useState('')
    const [cityName, setCityName] = useState('')
    const [cityObj, setCityObj] = useState('')

    useEffect(() => {
        setCityObj(queryWeatherApi(cityName))
    }, [cityName])
    // above - when cityName is changed from the input, useEffect querys ther API with it
    //  then sets the response as the state city

    const handleOnInputChange = function (e) {
        setUserInput(e.target.value)
    }

    const handleOnCitySubmit = function (e) {
        console.log('submit handled')
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