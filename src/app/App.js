import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../container/Home';
import DroneDetails from '../container/DroneDetails';
import Products from '../container/Products';
import AboutUs from '../container/AboutUs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sales from '../container/Sales';
import Comparador from '../container/Comparador';
import WorkTeam from '../container/WorkTeam';
import Privacy from '../container/Privacy';

function App() {

  return (
    <Switch>
      <div className="App ">
        <div className="Container">
          <Navbar />
          <Route exact path="/products" component={Products} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/" component={Home} />
          <Route exact path="/mavic:name" render={props => <DroneDetails {...props}/>} />
          <Route exact path="/spark:name" render={props => <DroneDetails {...props} />} />
          <Route exact path="/phantom:name" render={props => <DroneDetails {...props} />} />
          <Route exact path="/yuneec:name" render={props => <DroneDetails {...props} />} />
          <Route exact path="/sales" component={Sales} />
          <Route exact path="/comparator" component={Comparador} />
          <Route exact path="/workteam" component={WorkTeam} />
          <Route exact path="/privacy" component={Privacy} />
          <Footer />
        </div>
      </div>
    </Switch>
  );
}

export default App;
