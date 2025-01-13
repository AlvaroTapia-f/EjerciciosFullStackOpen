const FilterCountries = ({filter, setFilter}) =>{
    
    const handleFindCountry = (event)=>{
        console.log(event.target.value);
        setFilter(event.target.value)
    }
    
    return (
        <>
            <input type="text" value={filter} onChange={handleFindCountry} />
        </>
    )
}

export default FilterCountries;