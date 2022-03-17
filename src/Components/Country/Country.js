import React from 'react';
import './Country.css';
const Country = (props) => {
    return (
        <div className='country'>
            <h1>Country Name: {props.name}</h1>
            <h1>Country Population: {props.population}</h1>
            {/* <p><small></small></p> */}
            <h1>Area: {props.area}</h1>
            <img src={props.flags} alt="" />
        </div>
    );
};

export default Country;