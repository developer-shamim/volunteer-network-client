import React, { createContext, useState } from 'react';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Admin from './Components/Admin/Admin';
import EventRegistered from './Components/AddEvent/EventRegistered';




export const UserContext = createContext();


function App() {
  const[loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}> 
    
      <Router>
          
          <Switch>
            <Route path="/home">
             <Home/>
            </Route>

            <Route path="/events">
              <EventRegistered />
            </Route>
           
            <Route path="/admin">
             <Admin/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            
            <PrivateRoute path="/register">
              <Register/>
            </PrivateRoute>
           
        
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
