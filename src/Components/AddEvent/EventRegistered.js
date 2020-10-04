import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './EventRegistered.css'

const EventRegistered = () => {
    return (
        <div className="header">
             <nav className="nav">
                <ul>
                    <li>
                        <img className="event-logo" src={logo} alt=""/>
                    </li>
                    <li>
                        <Link to="/home" className="link-text">Home</Link>
                    </li>
                    <li>
                        <Link to="/" className="link-text">Donation</Link>
                    </li>
                    <li>
                        <Link to="/events" className="link-text">Events</Link>
                    </li>
                    <li>
                        <Link to="/" className="link-text">Blog</Link>
                    </li>
                    <li>
                       <Link to="/" className="link-text"> logged-in as: </Link> 
                    </li> 
                </ul>
            </nav>

            <div className="event-tasks">
                <div>
                    <img src="" alt=""/>
                </div>
                <h5> </h5>
                <p></p>
                <div>
                    <Button className="btn-tasks"> Cancel </Button>
                </div>

            </div>
            
        </div>
    );
};

export default EventRegistered;