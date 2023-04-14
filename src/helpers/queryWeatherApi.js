export async function queryWeatherApi(city) {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c98ccd2ed3msh80c72dbe4c5c14fp1b89afjsn578c5bb3f04a',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            const { location, current } = response

            return {
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
        })

        .catch(err => console.error(err));

}

