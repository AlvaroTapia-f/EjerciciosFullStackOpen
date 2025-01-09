import personsService from "../services/persons"

const PersonForm = ({setNewName, setNewNumber, newName, newNumber, persons, setPersons} ) => {
    
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
    
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const checkPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const person = persons.find(person => person.name === newName);
    if(person){
      window.confirm(`${newName} is already added to phonebook, replace the old number with a new one ?`) ? updatePerson(person.id) : 'canceled'
    }else{
      addPerson()
    }
  }

  const addPerson = () => {
    const personObject = {
      name: newName,
      number: newNumber,
    }
    personsService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNewNumber('');
      }
    )
  }
  
  const updatePerson = (id) =>{
    const person = persons.find(person => person.id === id);
    const modifyPerson = {...person, number: newNumber}
    personsService
      .update(id, modifyPerson)
      .then(returnedPerson => {
        setPersons(persons.map(p => p.id !== id ? p : returnedPerson ))
        setNewName('');
        setNewNumber('');
      })
  }

    
    return (
      <form onSubmit={checkPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          <br />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm;