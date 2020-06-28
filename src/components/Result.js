import React from 'react';

const Result = (props) => {
    const {
    city, data, sunrise, sunset, temp, wind, pressure, err} = props.weather

    let content = null;

    if (!err && city) {
    
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()

    content = (
    <div className="content">
        <h1 className="content__city">Pogoda dla Miasta: <span>{city}</span></h1>
        <h2 className="content__temp">Temperatura: <span>{temp} &#176;C</span></h2>
        <h2 className="content__info">Wschód słońca o: {sunriseTime}</h2>
        <h2 className="content__info">Zachód słońca o: {sunsetTime}</h2>
        <h2 className="content__info">Predkość wiatru: {wind} km/h</h2>
        <h2 className="content__info">Cisnienie: {pressure} hPa</h2>
            <div className="dateinfo">
                <h4 className="dateinfo__date">Data wyszukiwania: {data}</h4>
            </div>
    </div>
    )

    }

    return (
        <div className="result">
            {err ? <div className="invalid">Nie znaleziono takiego Miasta "<span>{city}</span>"</div> : content}
        </div>
    )
}

export default Result;