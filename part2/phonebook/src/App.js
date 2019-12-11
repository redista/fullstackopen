import React, { useState } from 'react'
import DisplayNames from './Components/DisplayNames.js'

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
      <div>
        filter shown with <input value={searchName} onChange={handleSearchName}/>
      </div>
      <h2>Add a new one</h2>
      <form onSubmit={addPerson}>
        <div>
        name: <input value={newName} onChange={handleNameChange}/>       
        </div>
        <div>  
        number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
      <DisplayNames persons={persons} searchName={searchName} />
      </div>
    </div>
  )
}

export default App