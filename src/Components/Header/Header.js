import React, { useContext } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import header from '../../images/header.jpg';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    const [loggedInUser] = useContext ( UserContext );
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <Link to="/">
                        <img className="logo" src={logo} alt=""/>
                    </Link>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Donation</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/">Blog</Link>
                    </li>
                    <Button className="btn-reg">
                        <Link to="/login">Register</Link>
                    </Button>
                    <Button className="btn-admin">
                        <Link to="/admin">Admin</Link>
                    </Button>
                    <li>
                        <Link to="/">Welcome {loggedInUser.name}</Link>
                    </li>
                </ul>
            </nav>
            <div className="title-container">
                <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
                <br/>
                <Form inline>
                <FormControl type="text" placeholder="Search your preferred volunteering...!" className="mr-sm-2" />
                <Button variant="primary" >Search</Button>
                </Form>
            </div>
        </div>
    );
};

export default Header;