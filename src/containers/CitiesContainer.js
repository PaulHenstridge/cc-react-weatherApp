import React from "react";

import { useState, useEffect } from 'react'

import Header from "../components/Header";
import CityDisplay from "../components/CityDisplay";
import { queryWeatherApi } from "../helpers/queryWeatherApi"
import WatchList from "../components/WatchList";

import './citiesContainer.css'

const CitiesContainer = () => {
    const [userInput, setUserInput] = useState('')
    const [cityName, setCityName] = useState('')
    const [cityObj, setCityObj] = useState('')
    const [list, setList] = useState([])

    useEffect(() => {
        getData()
    }, [cityName])

    function getData() {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
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
                    temp: current.temp_c,
                    windSpeed: current.wind_kph,
                    windDirection: current.wind_dir,
                    text: current.condition.text,
                    icon: current.condition.icon,
                    time: location.lacaltime
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

    const handleAddToList = function (e) {
        setList([...list, cityObj])
    }

    const handleViewfromList = function (selectedCity) {
        setCityObj(selectedCity)
    }

    return (
        <>
            <Header
                userInput={userInput}
                onCitySubmit={handleOnCitySubmit}
                onInputChange={handleOnInputChange}

            />
            <CityDisplay city={cityObj} addToList={handleAddToList} />
            <WatchList list={list} viewFromList={handleViewfromList} />
        </>
    )
}

export default CitiesContainer;

