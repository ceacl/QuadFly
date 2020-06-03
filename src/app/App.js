import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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

          <Route path="/" exact component={Home}/>
          <Route path="/phantom/:id" component={DroneDetails}/>
          <Route path="/mavicair/:id" component={DroneDetails}/>
          <Route path="/spark/:id" component={DroneDetails}/>
          <Route path="/products" component={Products}/>
          <Route path="/about-us" component={AboutUs}/>

          <Footer/>

      </Router>

  );
}

export default App;
