import React from 'react';
import './Country.css';
const Country = (props) => {
    const { name, population, area, region, flags } = props.country;
    return (
        <div className='country'>
            {/* <h1>Country Name: {props.country.name.common}</h1> */}
            <h1>Country Name: {name.common}</h1>
            {/* <h1>Country Population: {props.country.population}</h1> */}
            <h4>Country Population: {population}</h4>
            {/* <p><small></small></p> */}
            {/* <h1>Area: {props.country.area}</h1> */}
            <h5>Area: {area}</h5>
            {/* <h2>Region:{props.country.region}</h2> */}
            <p>Region:{region}</p>
            {/* <img src={props.country.flags.png} alt="" /> */}
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;