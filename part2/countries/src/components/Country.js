import React from 'react'


const Country = ({ country }) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h2>Languages:</h2>
            {country.languages.map(lang => <p>{lang.name}</p>)}
            <img src={country.flag} height="100" width="200" />
        </div>
    )
}
export default Country