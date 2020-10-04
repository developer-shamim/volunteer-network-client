import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Register = () => {
    return (
        <div>
            <Form.Group>
                <h5>Register as Volunteer</h5>
                <br/>
                <Form.Control size="sm" type="text" placeholder="Full Name" />
                <Form.Control size="sm" type="text" placeholder="Username or Email" />
                <Form.Control size="sm" type="date" placeholder="Date" />
            
                <Form.Control size="sm" type="text" placeholder="Description" />
                <Button variant="primary">Registration</Button>
            </Form.Group>
            
        </div>
    );
};

export default Register;