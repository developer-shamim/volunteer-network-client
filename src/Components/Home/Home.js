import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../DatabaseManager/DatabaseManager';
import fakeData from '../../FakeData';
import AddEvent from '../AddEvent/AddEvent';
import Header from '../Header/Header';
import'./Home.css'

const Home = () => {

    const activities = fakeData.slice(0,20);
    const [event, setEvent] = useState(activities);

    const [cart, setCart] = useState([]);

    const handleAddEvents = (event) => {
        const selectCart = ([...cart, event]);
        setCart(selectCart);
        
        const sameItem = selectCart.filter(evnt => evnt.id === event.id)
        const count = sameItem.length;
        addToDatabaseCart (event.id, count);
    }

    useEffect
    (() => {
        const savedCart = getDatabaseCart();
        const eventIds = Object.keys(savedCart);

        const cartEvents = eventIds.map(id => {
            const event= fakeData.find(evnt => evnt.id === id);
            return event;
        });
            setCart(cartEvents);
    },[])

    return (
        <div>
            <Header/> 
            <div className="event-container" >
            
            <div className="row">
            {
            event.map(evnt => <AddEvent
                key={event.id}
                handleAddEvents = {handleAddEvents}
                event={evnt}> 
                </AddEvent>)
            }

            </div>
        </div>
        
        </div>
    );
};

export default Home;