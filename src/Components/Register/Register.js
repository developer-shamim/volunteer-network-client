import 'date-fns'    
import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import logo from '../../images/logo.png';
import { Button, Form } from 'react-bootstrap';
import { UserContext } from '../../App';
import './Register.css'
import { Link } from 'react-router-dom';

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext (UserContext);
    const [selectedDate, setSelectedDate] = useState({checkIn: new Date()});

    const handleDateChange = (date) => {
        const newDates = {...selectedDate}
        newDates.checkIn = date;
        setSelectedDate(newDates);
    };

    const handleRegistration = () => {
        const newRegistration ={...loggedInUser, ...selectedDate};
        fetch ('http://localhost:4000/register', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newRegistration)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    } 

    return (
        <div className="container">
            <div className="nav-container">
                <Link to="/">
                <img className="event-logo" src={logo} alt=""/>
                </Link>
                <div>
                        <p to="/" className="logged-in"> Signed-in as: {loggedInUser.name} </p> 
                </div> 
                        
            </div>
            <div >
                <Form.Group className="reg-area">
                    <h5 className="reg-title">Register as Volunteer</h5>
                    <br/>
                    <Form.Control className="input-field" size="sm" type="text" placeholder="Full Name" value={loggedInUser.name} />
                    <br/>
                    <Form.Control className="input-field" size="sm" type="text" placeholder="Username or Email" value={loggedInUser.email} />
                    <br/>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                    <KeyboardDatePicker
                    className="input-field"
                    margin="normal"
                    id="date-picker-dialog"
                    label="Event date"
                    format="dd/MM/yyyy"
                    value={selectedDate.checkIn}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                    </Grid>
                    </MuiPickersUtilsProvider>
                    <br/>
                    <Form.Control className="input-field" size="sm" type="text" placeholder="Description" />
                    <br/>
                    <Button onClick={handleRegistration} variant="primary" className="reg-btn">Registration</Button>
                </Form.Group>

            </div>
        </div>
    );
};

export default Register;