import { useEffect, useState } from "react";
import Country from "./Country";
import countriesServices from "../services/countries";

const Countries = ({countries})=>{

    const [countriesToShow, setCountriesToShow] = useState(countries);

    useEffect(()=>{
        setCountriesToShow(countries);
    },[countries])

    const handleShowCountry = (name) =>{
        countriesServices
            .getbyName(name)
            .then(c => {
                console.log(c);
                setCountriesToShow([c]);
            })
    }

    return(
        <div>
            { countriesToShow.length !== 1 ?
            <ul>
                {countriesToShow.map(c=>
                    <li key={c.name.common}>{c.name.official} <button onClick={()=>handleShowCountry(c.name.common)}>Show</button></li>
                )}
            </ul> :
            <Country country={countriesToShow[0]} />
            }
        </div>
    )
}

export default Countries;