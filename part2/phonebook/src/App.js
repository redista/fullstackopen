import React, { useState } from 'react'
import DisplayNames from './Components/DisplayNames.js'
import Filter from './Components/Filter.js'
import PersonForm from './Components/PersonForm.js'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('')

  const addPerson = (e) => {
    e.preventDefault()
    if (!persons.some(n => n.name === newName)) {
      setPersons(persons.concat(
        {name: newName,
        number: newNumber}
        ))
        setNewName('')
        setNewNumber('')
      }
    else {
      window.alert(`${newName} already exists`)
    }
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
      <PersonForm  addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNameChange} />
      <h3>Numbers</h3>
      <DisplayNames persons={persons} searchName={searchName} />
    </div>
  )
}

export default App