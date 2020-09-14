import React from 'react';
import logo from './logo.svg';
//import './App.css';
import Navigation from './components/Navigation';
import PageRenderer from './components/PageRenderer';
import Footer from './components/Footer';
import HouseDetails from './components/HouseDetails';


import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
//import RoomProvider from './context';
function App() {
  return (
    <div className="App">
   
      <Router>
        <Navigation />
        <Switch>
          <Route path="/housedetails/:id" component={HouseDetails} />
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/Home" />} />
           <Route component={() => 404} /> 
        </Switch>
      </Router>
   
    <Footer />
    </div>
  );
}

export default App;
