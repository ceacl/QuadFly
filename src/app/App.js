import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection'
import DroneDetails from "./components/DroneDetails";

class App extends Component 
{
    render() {

       return (
        
       <div className="App"> 

        <div>
            <Router>
            
            <Navbar/>
            <Route exact path="/" component={HomeSection}/>
            <Route path="dronedetails/id:1" component={DroneDetails}/>
            <Route path="dronedetails/id:2" component={DroneDetails}/>
            <Route path="dronedetails/id:3" component={DroneDetails}/>

            <HomeSection/>
            <DroneDetails/>
            
            </Router>
        </div>
            
         
            <Footer/>   
        </div>

       ) ;
    }
}

export default App;