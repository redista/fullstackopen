import React, { useState } from 'react'
import HandleNames from './Components/HandleNames.js'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (e) => {
    e.preventDefault()
    console.log(e.target)
    if (!persons.some(n => n.name === newName)) {
      setPersons(persons.concat(
        {name: newName}
        ))
      setNewName('')
      }
    else {
      window.alert(`${newName} already exists`)
    }
  }

  const handleNameChange = (e) => {
    e.preventDefault()
    console.log(newName)
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <HandleNames persons={persons} />
    </div>
  )
}

export default App