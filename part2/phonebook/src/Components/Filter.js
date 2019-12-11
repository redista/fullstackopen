import React, { useState } from 'react'
import App from '../App.js'

const Filter = ({searchName, handleSearchName}) => {
    return (
        <div>
            filter shown with <input value={searchName} onChange={handleSearchName}/>
        </div>
    )
}
export default Filter