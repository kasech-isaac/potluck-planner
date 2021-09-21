import React, { useState, useEffect } from 'react'
import './App.css';
import Home from './components/home/Home'
import { Link, Switch, Route } from "react-router-dom";
import SignupAuth from './components/auth/SignupAuth'
import LoginAuth from './components/auth/LoginAuth'
import SignupRedirect from './components/auth/SignupRedirect' 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import PrivateRoute from './components/auth/PrivateRoute';
import CreateEvent from './components/containers/createEvent/CreateEvent' 
import UpdateEvent from './components/containers/updateevent/UpdateEvent' 
import EventCard from './components/containers/updateevent/EventCard' 
import UpdateForm from './components/containers/updateevent/UpdateForm' 
import {useParams} from "react-router-dom";
import Dashbord from './components/containers/dashbord/Dashbord'
import {useHistory} from "react-router-dom";



function App() {
    const [user, setUser] = useState({});
      const history = useHistory()


     useEffect(() => {
    
        setInterval(() => {
            const userString = localStorage.getItem("user");
            const user = JSON.parse(userString);
            setUser(user);
            }, [])
    }, 5000);
  
   const logout = () => {
        return localStorage.removeItem("user");
    }

// 
  return (
<div className="App">
    
<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>

        <Navbar.Brand href="#">Potluck Planner</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          

            <Link to="/" className="nav-link" aria-current="page">Home</Link>
            <Link to="/login" className="nav-link" aria-current="page">Login</Link>
            <Link to="/signUp" className="nav-link" aria-current="page">Signup</Link>
          </Nav>
        </Navbar.Collapse>
          </Container>

      </Navbar>

      <br></br>
            <Switch>
          <Route path="/login" component={LoginAuth}/>
          {/* <Route path="/about" component={Aboutus} /> */}
         <Route path="/signup" component={SignupAuth}/>
         <Route path="/redirect" component={SignupRedirect}/>
        {/* <Route path="/contact" component={Contact} />  */}
        <Route exact path="/" component={Home}/>
      </Switch>

<PrivateRoute path='/updateEvent'component={UpdateEvent}/>
      <PrivateRoute path='/dashboard'component={Dashbord}/>
       <PrivateRoute path='/newevent'component={CreateEvent}/>
      <PrivateRoute path='/updateForm'component={EventCard}/>
      <PrivateRoute path='/:id/editPotluck'component={UpdateForm}/>

{/* editPotluck */}
      


    </div>
    
    
  );
}

export default App;
