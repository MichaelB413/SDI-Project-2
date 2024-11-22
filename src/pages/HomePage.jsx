import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
        <div className="title">
            <h1>Bountiful</h1>
            <div className="subtitle">
            <h3>Track Down Your Big Payday By Bounty Hunting</h3>
        </div>
        </div>
        
        
        <ul className="row"> 
            <li className="fugitives">
                <Link to="/fugitives">Fugititves</Link>
            </li> 
            <li className="missingPersons">
                <Link to="/missing-persons">Missing Persons</Link>
            </li>
        </ul>

        <div className="info">
            <p className="about">
                <Link to="/about">About</Link>
            </p>
            <p className="careers">
                <Link to="/careers">Careers</Link>
            </p>
            <p className="contact">
                <Link to="/contact">Contact</Link>
            </p>
        </div>
        </>
    );
}

export default Home;