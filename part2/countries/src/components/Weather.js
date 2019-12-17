import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AC_KEY = "3cfbf0690c69ab9da12214e1d72333ce"

const Weather = ({ loc }) => {
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${AC_KEY}&query=${loc}`)
            .then(response => {
                setWeatherData(response.data)
            })
    }, [])

    if (weatherData === null) {
        return (
            <p>
                No weather info
            </p>
        )
    }
    else {
        return (
            <>
                <p>Temperature: {weatherData.current.temperature}</p>
                <img src={weatherData.current.weather_icons} width="20" height="20" alt="Weather-icon" />
                <p>Wind: {weatherData.current.wind_dir}, {weatherData.current.wind_speed} kph</p>
            </>
        )
    }

}

export default Weather