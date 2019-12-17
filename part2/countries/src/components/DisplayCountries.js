import React from 'react'
import Show from './Show.js'
import Country from './Country.js'

const DisplayCountries = ({ search, countries }) => {

    const filtered = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))

    if (filtered.length >= 10) {
        return (
            <p>
                Too many matches, specify another filter
             </p>
        )
    }
    else if (filtered.length > 1) {
        return (
            <div>
                {filtered.map(country => <Show country={country} />)}
            </div>
        )
    }
    else if (filtered.length === 1) {
        return (
            <Country country={filtered[0]} />
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