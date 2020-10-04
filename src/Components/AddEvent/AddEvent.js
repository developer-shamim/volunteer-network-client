import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './AddEvent.css'

const AddEvent = (props) => {
   
    const{id, eventName, img} = props.event;

    return (
        <div className="cards-container">

            <div className="col-lg-3 col-md-8">
             <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={img} className="card-img-top" />
                <Card.Body>
                <Card.Title>{eventName}</Card.Title>
                <br/>
                <Button variant="primary" onClick={() => props.handleAddEvents(id)} className="reg-btn" >Register on this event</Button>
            </Card.Body>
           
        </Card>

        </div>


        </div>
        
       
   
    );
};

export default AddEvent;