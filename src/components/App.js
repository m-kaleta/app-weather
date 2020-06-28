import React, { Component } from 'react';
import Form from "./Form";
import Result from "./Result";
import '../css/style.css';

const APIKey = "d059e91765b924811618e9ea27174955"

class App extends Component {

  state = {
    value: "",
    city: "",
    data: "",
    sunrise: "",
    sunset: "",
    temp: "",
    wind: "",
    pressure: "",
    err: "",

  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    })
    
  }

  handleCitySubmit = (e) => {
    e.preventDefault()
    if(this.state.value === "")
    return alert("Wpisz cos!!!")
    
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

    fetch(API)
    .then(response => {
      if (response.ok) {
        return response
      }
      throw Error("nie udalo sie")
    })
    .then(response => response.json())
    .then(data => {
      const time = new Date().toLocaleString()
      this.setState({
      err: false,
      data: time,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      temp: data.main.temp,
      wind: data.wind.speed,
      pressure: data.main.pressure,
      city: this.state.value,
      value: ""
      })
    })
    .catch(err => {
      this.setState({
        err: true,
        city: this.state.value,
        value: ""
      })
    })

  }

  render() {
    return (
    <div className="App">
      <Form 
      value={this.state.value}
      change={this.handleInputChange}
      submit={this.handleCitySubmit}
      />
      <Result weather={this.state}/>
    </div>
    );
  }
}

export default App;
