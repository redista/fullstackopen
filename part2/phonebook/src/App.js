import React, { useState, useEffect } from 'react'
import DisplayNames from './Components/DisplayNames.js'
import Filter from './Components/Filter.js'
import PersonForm from './Components/PersonForm.js'
import numbers from './Services/numbers'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('')

  useEffect(() => {
    numbers
      .getAll()
      .then(initNumbers => setPersons(initNumbers))
  }, [])

  const addPerson = (e) => {
    e.preventDefault()
    
    const i = persons.findIndex(n => n.name === newName)
    console.log(newName)
    console.log(i)
    const personObj = {
      name: newName,
      number: newNumber
    }
    if (i < 0) {
      numbers
        .create(personObj)
        .then(data => {
          setPersons(persons.concat(personObj))
        })
      }
    else {
      const arr = persons.slice()

      numbers
        .update(i + 1, personObj)
        .then(data => {
          arr.splice(i, 1, personObj)
          setPersons(arr) })
    }
          
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (e) => {
    e.preventDefault()
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    e.preventDefault()
    setNewNumber(e.target.value)
  }

  const handleSearchName = (e) => {
    e.preventDefault()
    setSearchName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} handleSearchName={handleSearchName}/>
      <h2>Add a new one</h2>
      <PersonForm  addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h3>Numbers</h3>
      <DisplayNames persons={persons} searchName={searchName} />
    </div>
  )
}

export default App