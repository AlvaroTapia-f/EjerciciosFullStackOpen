import { useEffect, useState } from "react";
import countriesService from './services/countries';
import FilterCountries from "./components/FilterCountries";
import Countries from "./components/Countries";

const App = ()=>{

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(()=>{
    countriesService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  },[])

  const countriesToShow = countries.filter(c => 
    c.name.common.toLowerCase().includes(filter.toLowerCase())
  )
  
  return(
    <>
      <h1>Countries</h1>
      <div>
        Find countries: <FilterCountries filter={filter} setFilter={setFilter} />
      </div>
      {countriesToShow.length <= 10 ?
        <div>
          <Countries countries={countriesToShow} />
        </div> :
        <p>To many matches, specify another filter</p>
    }
    </>
  )
}

export default App;