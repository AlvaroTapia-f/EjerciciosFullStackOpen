import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import FilterPersons from './components/FilterPersons'
import personsService from './services/persons'
import Notification from './components/Notification'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [addedPerson, setAddedPerson] = useState(null)
  const [error, setError] = useState(null)
  
  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  )

  const hook = () => {
    console.log('effect');
    personsService
      .getAll()
      .then(allPersons => {
        console.log('promise fulfilled');
        setPersons(allPersons);        
      })
  }

  useEffect(hook, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification name={addedPerson} errorMessage={error} />
      <FilterPersons newFilter={newFilter} setNewFilter={setNewFilter} />
      <h2>Add a new person</h2>
      <PersonForm 
      setNewName={setNewName}
      setNewNumber={setNewNumber}
      newName={newName} 
      newNumber={newNumber} 
      persons={persons}
      setPersons={setPersons}
      setAddedPerson={setAddedPerson}
      setError={setError}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} setPersons={setPersons} />
    </div>
  )
}

export default App