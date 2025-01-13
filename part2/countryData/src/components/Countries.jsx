import Country from "./Country";

const Countries = ({countries})=>{
    return(
        <div>
            { countries.length !== 1 ?
            <ul>
                {countries.map(c=>
                    <li key={c.name.common}>{c.name.official}</li>
                )}
            </ul> :
            <Country country={countries[0]} />
            }
        </div>
    )
}

export default Countries;