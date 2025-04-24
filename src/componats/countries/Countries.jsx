import React, { useState, useEffect } from 'react';
import Country from '../country/Country';
import './country-container.css'

const Countries = () => {

    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] =useState([]);
    const [visitedFlag, setVisitedFlag] = useState([])


    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const handelVisitedCountries = country =>{
        // console.log(country)
        const newVisitedCountry = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountry);
    }

    const handleVisitedFlag = flag =>{
        const newVisitedFlag = [...visitedFlag, flag]
        setVisitedFlag(newVisitedFlag)
    }

    return (
        <div>
            <h2>countries : {countries.length}</h2>
            <div>
                <h5>visited country : {visitedCountries.length}</h5>
                <ul>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
                </ul>
            </div>

            <div className='flag-container'>
                {
                    visitedFlag.map((flag, ind) => <img key={ind} src={flag}></img>)
                }
            </div>
            
            <div className='country-container'>
            {
                countries.map(country => <Country country={country}
                    handelVisitedCountries={handelVisitedCountries} 

                    handleVisitedFlag={handleVisitedFlag}

                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;