import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Country from './components/Country'

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')
  

  useEffect(() => {
    if(country) {
      axios
      .get(`https://restcountries.com/v3.1/name/${country}`)
      .then(response => {
        setCountries(response.data)
      })
    }
  }, [country])


  const handleCountryChange = (e) => {
    setCountry(e.target.value)
  }

  const showCountry = (name) => {
    const country = countries.filter(c => c.name.common === name)
    setCountries(country)
  }

  return (
    <div>
      <label htmlFor="country">find countries </label>
      <input type="text" value={country} onChange={handleCountryChange} />

      <div className="countries">
        {countries.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : (
          countries.length === 1 ? (
            <Country key={country.id} country={countries[0]} />
          ) : (
            countries.map(country => (
              <div key={country.name.common}>
                <span>{country.name.common}</span>
                <button onClick={() => showCountry(country.name.common)}>show</button>
              </div>
            ))
          )
        )}
      </div>
    </div>
  )
}

export default App
