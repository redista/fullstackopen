import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryFilter from './components/CountryFilter.js'
import DisplayCountries from './components/DisplayCountries.js'
import Show from './components/Show.js'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data))
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  return (
    <div>
      <CountryFilter search={search} handleSearch={handleSearch} />
      <DisplayCountries search={search} countries={countries} />
    </div>
  )
}

export default App;
