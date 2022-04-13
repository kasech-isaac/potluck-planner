import React from 'react'
import './App.css';
import Home from './components/home/Home'
import About from './components/about/About'
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
import Dashbord from './components/containers/dashbord/Dashbord'
import {useHistory} from "react-router-dom";



function App() {

  return (
<div className="App">
    
<Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ width: '100%' }}>
  <Container style={{ positio: 'fixed'}} >

        <Navbar.Brand href="/" style={{ fontSize: '1.5rem', color:'orange' }}>Potluck Planner</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="ms-auto" 
            navbarScroll
            style={{ fontSize: '1rem' }}
          >
          
            <Link to="/" className="nav-link" aria-current="page">Home</Link>
            <Link to="/login" className="nav-link" aria-current="page">Login</Link>
            <Link to="/signUp" className="nav-link" aria-current="page">Signup</Link>
            <Link to="/about" className="nav-link" aria-current="page">About</Link>

          </Nav>

        </Navbar.Collapse>
          </Container>

      </Navbar>

      <br></br>
            <Switch>
          <Route path="/login" component={LoginAuth}/>
          <Route path="/about" component={About}/>

         <Route path="/signup" component={SignupAuth}/>
         <Route path="/redirect" component={SignupRedirect}/>
        <Route exact path="/" component={Home}/>
      </Switch>

      <PrivateRoute path='/updateEvent'component={UpdateEvent}/>
      <PrivateRoute path='/dashboard'component={Dashbord}/>
       <PrivateRoute path='/newevent'component={CreateEvent}/>
      <PrivateRoute path='/:id/editPotluck'component={UpdateForm}/>


      


    </div>
    
    
  );
}

export default App;
