import React from 'react'

const DisplayCountries = ({search, countries}) => {

    const filtered = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))

    if (filtered.length >= 10) {
        return (
            <p>
                Too many matches, specify another filter
             </p>
        )
    }
    else if (filtered.length > 1) {
        return (filtered.map(country => <p>{country.name}</p>))
    }
    else if (filtered.length === 1) {
        const country = filtered[0]
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
    else {
        return (
            <p>
                No countries match this filter
            </p>
        )
    }
}

export default DisplayCountries