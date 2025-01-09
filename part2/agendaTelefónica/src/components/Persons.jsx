import personsService from "../services/persons";

const Persons = ({ persons, setPersons}) => {

  const handleDeletePersons = (id) =>{
    const deletePerson = persons.find(p => p.id === id);
    if(window.confirm(`Delete ${deletePerson.name} ?`)){
    console.log('deletting person');
    const newPersons = persons.filter(p => p.id !== id)
  //  console.log(newPersons);
    personsService
      .deletePerson(id)
      .then(() =>{
        setPersons(newPersons)
      })
    }
  }

    return (
        <>
          {persons.map(person => 
            <div key={person.id}>
              <p> {person.name}: {person.number} </p>
              <button onClick={()=>handleDeletePersons(person.id)}>Delete</button>
            </div>
          )}
        </>
      )
}

export default Persons;