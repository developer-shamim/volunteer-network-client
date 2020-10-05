import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
import './EventRegistered.css'

const EventRegistered = () => {
    const [loggedInUser] = useContext (UserContext);
    const [bookings, setBookings] = useState ([])

    useEffect(() => {
        fetch('http://localhost:4000/bookings?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setBookings(data));
    }, [])
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
                    <li >
                       <Link to="" className="link-text" > Signed-in as: {loggedInUser.name} </Link> 
                    </li> 
                </ul>
            </nav>

            <div className="event-tasks">
                <div>
                    <img src="" alt=""/>
                </div>

                <h5>Humanity More</h5>
                {
                    bookings.map(event => 
                        <p> {(new Date(event.checkIn).toDateString('dd/MM/yyyy'))}</p>)
                }
                
                <div>
                    <Button className="btn-tasks"> Cancel </Button>
                </div>

            </div>
            
        </div>
    );
};

export default EventRegistered;