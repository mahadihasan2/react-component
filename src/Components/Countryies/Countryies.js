import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

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
            {
                countries.map(country => <Country
                    name={country.name.common}
                    population={country.population}
                    area={country.area}
                    flags={country.flags.png}
                ></Country>)


            }
        </div>
    );
};


export default Countryies;