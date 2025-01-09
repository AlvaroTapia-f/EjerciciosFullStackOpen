import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import FilterPersons from './components/FilterPersons'
import personsService from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  
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
      <FilterPersons newFilter={newFilter} setNewFilter={setNewFilter} />
      <h2>Add a new person</h2>
      <PersonForm 
      setNewName={setNewName}
      setNewNumber={setNewNumber}
      newName={newName} 
      newNumber={newNumber} 
      persons={persons}
      setPersons={setPersons}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} setPersons={setPersons} />
    </div>
  )
}

export default App