import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle  } from '@fortawesome/free-brands-svg-icons'
import "firebase/auth"
import * as firebase from "firebase/app";
import './Login.css'
import logo from '../../images/logo.png';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App'
import { makeStyles } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));


const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext ( UserContext );
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/register" } };

    

    if(firebase.apps.length === 0) 
    firebase.initializeApp(firebaseConfig);

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email: email};
            setLoggedInUser(signedInUser)
            history.replace (from)
          }).catch(function(error) {
            
          });
    }

   
    const classes = useStyles();
    const [user, setUser] = useState ({
        isSignedIn: false,
        newUser: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false,
    });


    const handleBlur = (e) => {
            let isFieldValid = true;
          
            if(e.target.name === 'email'){
                isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
              
            }
            if(e.target.name === 'password'){
                const isPasswordValid = e.target.value.length > 6;
                const passwordHasNumber = /\d{1}/.test(e.target.value);
                isFieldValid = isPasswordValid &&  passwordHasNumber;
                
            }
            if(isFieldValid){
                const newUserInfo = {...user};
                    newUserInfo[e.target.name] = e.target.value;
                    setUser(newUserInfo);
                };
        };
       

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then( res => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                updateUserName(user.name);
            })
            .catch(function(error) {
                // Handle Errors here.
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
              });
        }
      
    if(!newUser && user.email && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res =>{
            const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
          });    
    }
    e.preventDefault();
}

const updateUserName = name => {
    const user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name,
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});

}
    // const handleSignOut = () => {
    //     firebase.auth().signOut()
    //     .than(res=> {
    //         const signedOutUser = {
    //             isSignedIn: false,
    //             name:'',
    //             photo: '',
    //             email: '',
    // }
    // setUser (signedOutUser);
    // })
    // .catch(err => {
    
    // })
    // }

    return (
        
       <div >  
             <nav className="nav">
                    <Link to="/">
                        <img className="login-logo" src={logo} alt=""/>
                    </Link>
            </nav>
            
           <div className= {classes.root}>
            <div className="login-area">
                <div>
                    <h5 className="login-title">{newUser ? " Create an account": "Login here"}</h5>
                </div>
                <br/>
                
             <form  onSubmit={handleSubmit}>
                <div className="">
                    {newUser && <input class="form-control form-control-lg " type="text" name="First Name" onBlur={handleBlur} placeholder="First Name"/>}
                    {newUser && <input class="form-control form-control-lg input-area" type="text" name="Last Name" onBlur={handleBlur} placeholder="Last Name"/>}
                </div>
                 
                <div className="input-area">
                {newUser && <input class="form-control form-control-lg" type="text" name="email" onBlur={handleBlur} placeholder="Email or Username"/>}
              
                </div>

                <div className="input-area">
                    {newUser && <input class="form-control form-control-lg input-area" type="password" name="password" onBlur={handleBlur} placeholder="Enter Password"/>}
                    {newUser && <input class="form-control form-control-lg input-area" type="password" name="Confirm password" onBlur={handleBlur} placeholder="Enter Password again"/>}
                </div>

                <br/>
                
                
                <div>
                {newUser && <input type="submit" className="btn-log" value= "Create Account" />}
                </div>
                                
                
                
                <br/>
                <div>
                 <button className="btn-social" type="button" onClick={handleGoogleSignIn}> <FontAwesomeIcon className="g-icon" icon={faGoogle} /> Continue with Google</button>
                 <br/>
                 <p>OR</p>
                 <br/>
                { <p> {newUser ? "Already" : "Don't"} have an account yet? <span/> 
                    <input type="checkbox" onChange={()=> setNewUser(!newUser)}/> 
                     <level className="forgot" >   {newUser ? <Link to="/login">Log in</Link> : <a href="/"> Create an account </a>} </level> </p>} 

                </div>
            </form> 
            <p style={{color:'red'}}> {user.errror} </p> 
            {user.success &&  <p style={{color:'green'}}>User {newUser ? "Created" : "logged in"} successfully</p> }
        </div>
        

        </div>   
    </div>        
    );
};

export default Login;
