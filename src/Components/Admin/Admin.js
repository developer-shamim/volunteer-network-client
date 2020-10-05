import React, { useContext } from 'react';
import './Admin.css'
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Admin = () => {
    const [loggedInUser] = useContext (UserContext);
    return (
        
        <div className="admin-container">
             <div className="">
                <div>
                    <div className="nav-container">
                        <Link to="/"> 
                            <img className="event-logo" src={logo} alt=""/>
                        </Link>
                        
                        <div>
                             <p to="/" className="logged-in"> logged-in as: {loggedInUser.name} </p> 
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