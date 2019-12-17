import React from 'react'

const  CountryFilter = ({search, handleSearch}) => {
    return (
        <div>
            Enter a country : <input value={search} onChange={handleSearch} />
        </div>
    )
}

export default CountryFilter