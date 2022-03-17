import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countryies.css';

const Countryies = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Countries Length: {countries.length}</h1>
            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        country={country}
                    // name={country.name.common}
                    // population={country.population}
                    // area={country.area}
                    // flags={country.flags.png}
                    ></Country>)


                }
            </div>
        </div>
    );
};


export default Countryies;