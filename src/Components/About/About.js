import React from 'react';
import './About.css';

const About = () => {

    return (
        <div>
            <li>Home</li>
            <li>Contact Us</li>
            <li>Network</li>
            <li>Contact</li>
            <nav className='header'>
                <a href="home">Home</a>
                <a href="about">About Us</a>
                <a href="contact">Contact Us</a>
                <a href="service">Service</a>
            </nav>
        </div>
    );
};

export default About;