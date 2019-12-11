import React, { useState } from 'react'

const DisplayNames = ({persons, searchName}) => {
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
    return (
    filteredPersons.map(person => <p>{person.name} {person.number}</p>) 
    )
}

export default DisplayNames