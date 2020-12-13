import React from 'react';
import './App.css';
import Nav from './components/Nav';
import UserRegistration from './components/UserRegistration';
import Login from './components/Login';
import UsersList from './components/UsersList';
import Footer from './components/Footer'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div>
    <Router>
    <div className="App">
      <Nav />
      
      <Switch>
        <Route path="/" exact component={UserRegistration} />
        <Route path="/login" exact component={Login } />
        <Route path="/UsersList" exact component={UsersList } />
      </Switch>
    </div>
    </Router>
    <hr />
    
    <Footer />
    </div>
  );
}

export default App;
