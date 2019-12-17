import React, { useState } from 'react'
import Country from './Country'

const Show = ({ country }) => {
    const [display, setDisplay] = useState(false)

    const handleClick = () => setDisplay(!display)

    if (!display) {
        return (
            <div>
                {country.name} <button onClick={handleClick} >Show</button>
            </div>
        )
    }
    else {
        return (
            <div>
                {country.name} <button onClick={handleClick} >Hide</button>
                <Country country={country} />
            </div>
        )
    }
}

export default Show