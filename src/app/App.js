import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../container/Home'; 
import DroneDetails from '../container/DroneDetails';
import Products from '../container/Products';
import AboutUs from '../container/AboutUs'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function App() { 

  return (
    <Router>
      
          <Navbar/>

          <Route path="/products" exact component={Products}/>
          <Route path="/about-us" exact component={AboutUs}/>
          <Route path="/" exact component={Home}/>
          <Route path="/mavic:name" render={props => <DroneDetails {...props}/>} />
          <Route path="/spark:name" render={props => <DroneDetails {...props}/>} />
          <Route path="/phantom:name" render={props => <DroneDetails {...props}/>} />
          <Footer/>
      
      </Router>

  );
}

export default App;
