import React from "react";
import './App.css';

const App = () => {
    let state = {
        temperature_2m: null,
    }

 const getWeather = async (e) => {
        e.preventDefault()
        let city = e.target.elements.value
     if (city.length <= 0 ){
         alert('City name field is empty')
     }else {
         const getCityApi = await fetch(`http://localhost:3001/temperature?cityName=+ ${city}`)
         const getCity = await getCityApi.json()
         this.setState({
             temperature_2m: getCity.current.temperature_2m,
         })
         }
         }

    return (
        <div className={"App"}>
            <form onSubmit={getWeather}>
                <input
                type="text"
                 name='city'
                 placeholder="Enter the name of the city"
                  />
            <button >
                Find out the weather
            </button>
            </form>
            <p> Temperatur: {this.current.temperature_2m}</p>
        </div>
    )
}

export default App
