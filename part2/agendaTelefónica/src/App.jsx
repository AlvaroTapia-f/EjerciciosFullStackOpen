import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import FilterPersons from './components/FilterPersons'
import axios from 'axios'

const App = () => {
/*
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
*/

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = () => {
    const personObject = {
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const checkPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    persons.find(person => person.name === newName) ? alert(`${newName} is already added to phonebook`) : addPerson()
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  )

  const hook = () => {
    console.log('effect');
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled');
        setPersons(response.data);        
      })
  }

  useEffect(hook, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterPersons newFilter={newFilter} setNewFilter={setNewFilter} />
      <h2>Add a new person</h2>
      <PersonForm 
      onSubmit={checkPerson} 
      setNewName={setNewName}
      setNewNumber={setNewNumber}
      newName={newName} 
      newNumber={newNumber} 
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App