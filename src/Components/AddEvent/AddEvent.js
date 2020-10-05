import { id } from 'date-fns/esm/locale';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AddEvent.css'

const AddEvent = (props) => {
   
    const{eventName, img} = props.event;

    return (
        <div className="cards-container">

            <div className="col-lg-3 col-md-8">
             <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={img} className="card-img-top" />
                <Card.Body>
                <Card.Title>{eventName}</Card.Title>
                <br/>
                <Link to="/login"> 
                    <Button variant="" onClick={()=>props.handleAddEvents(props.event)} className="reg-btn" >Register on this event</Button>
                </Link>
                
            </Card.Body>
           
        </Card>

        </div>


        </div>
        
       
   
    );
};

export default AddEvent;