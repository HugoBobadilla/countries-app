import React from 'react'

const Weather = ({ weatherData }) => {
//console.log(weatherData)
  return (
    <div>
      {weatherData.length === 0 ? (
        <p>...</p>
      ) : (
        <div>
          <h2>Weather in {weatherData.location.name}</h2>
          <p>Temperature {weatherData.current.temp_c} Celsius</p>
          <img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text} />
          <p>Wind {weatherData.current.wind_kph} kph</p>
        </div>
      )}
    </div>
  )
}

export default Weather