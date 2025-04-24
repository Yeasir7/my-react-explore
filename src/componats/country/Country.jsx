import { useState } from 'react';
import './country.css'

const Country = ({country, handelVisitedCountries, handleVisitedFlag}) => {
    console.log(country)
    const {name, flags, population, cca2
    } = country

    const [visited, setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!visited)
    }


    return (
        <div className={`country ${visited ? 'visited' : 'not-visited'}`}>
            <h2>Name : {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p><small>code : {cca2}</small></p>
            <button onClick={()=>handelVisitedCountries(country)}>mark as visited</button>
            <br/>
            <button onClick={handleVisited}>{visited ? 'visited' : 'going'}</button>

            <br />
            <button onClick={()=>handleVisitedFlag(country.flags.png)}>add flag</button>
            
            {
                visited ? 'i have visited the country' : 'i wanna go'
            }
        </div>
    );
};

export default Country;