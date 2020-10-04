import React from 'react';
import './Admin.css'
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        
        <div className="admin-container">
             <div className="">
                <div>
                    <div className="nav-container">
                        <img className="event-logo" src={logo} alt=""/>
                        <div>
                             <p to="/" className="logged-in"> logged-in as: </p> 
                       </div> 
                        
                    </div>
                <div className="left-nav">
                    <div className="vol-reg">
                            <Link to="/home" className="link-text">Volunteer Register</Link>
                        </div>

                        <div className="add-event">
                            <Link to="/" className="link-text">Add Events</Link>
                        </div>

                    </div>
                    
                    
                   
                </div>
            </div>
            
        </div>
    );
};

export default Admin;