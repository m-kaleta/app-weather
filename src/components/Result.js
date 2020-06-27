import React from 'react';

const Result = (props) => {
    const {
    city, data, sunrise, sunset, temp, wind, pressure, err} = props.weather

    let content = null;

    if (!err && city) {
    
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()

    content = (
    <div>
    <h2>Pogoda dla Miasta: {city}</h2>
    <h3>Data wyszukiwania: {data}</h3>
    <h3>Temperatura: {temp} &#176;C</h3>
    <h3>Wschód słońca: {sunriseTime}</h3>
    <h3>Zachód słońca: {sunsetTime}</h3>
    <h3>Predkość wiatru: {wind} km/h</h3>
    <h3>Cisnienie: {pressure} hPa</h3>

    </div>
    )

    }

    return (
        <div className="result">
            {err ? `Nie znaleziono takiego Miasta "${city}"` : content}
        </div>
    )
}

export default Result;