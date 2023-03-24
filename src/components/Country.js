import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Weather from '../Weather'

const Country = ({ country }) => {
  const [weatherData, setWeatherData] = useState([])
  const languages = Object.values(country.languages)
  const img = country.flags.png
  const imgAlt = country.flags.alt

  useEffect(() => {
    axios
      .get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WHEATER_API_KEY}&q=${country.capital}&aqi=no`)
      .then(response => {
        setWeatherData(response.data)
        //console.log(response.data)
      })
  }, [country.capital])
  
  return (
    <div>
        <h1>{country.name.common}</h1>
        <p>Capital {country.capital}</p>
        <p>Area {country.area}</p>
        <h4>Languages:</h4>
        <ul>
          {languages.map(l => (
            <li key={l}>{l}</li>
          ))}
        </ul>
        <img src={img} alt={imgAlt} />
        <Weather weatherData={weatherData} />
    </div>
  )
}

export default Country