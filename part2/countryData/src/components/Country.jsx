const Country = ({country}) =>{
    console.log(country);
    console.log(country.languages);
    
    
    return(
        <div>
            <h2>{country.name.official}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h3>Languages</h3>
            <ul>
                {Object.entries(country.languages).map(([key, value]) => 
                    <li key={key}>{value}</li>
                )}
            </ul>
            <img src={country.flags.svg} alt="Flag" style={{maxBlockSize: 140}} />
        </div>
    )
}
export default Country;