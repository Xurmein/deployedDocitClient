import React, { Component } from 'react';
import './App.css';

import Header from './site/Header'
import Jumbo from './site/JumboTron';
import DocitNav from './site/DocitIndex/DocitNav';
import Home from './site/home/Home'
import Splash from './site/DocitIndex/Splash';
import Footer from './site/Footer';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      sessionToken: ''
    }
  }

  componentWillMount(){
    const token = localStorage.getItem('token');
    if(token && !this.state.sessionToken){
      this.setState({ sessionToken: token });
    }
  }

  setSessionToken = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });
  }

  logout = () => {
    this.setState({
      sessionToken: '',
    });
    localStorage.clear();
  }

  protectedViews = () => {
    if(this.state.sessionToken === localStorage.getItem('token')){
      return(
        <Switch>
          <Route path='/' exact>
            <Splash sessionToken={this.state.sessionToken} />
            <div className="logout" onClick={this.logout}>
              <p>logout.</p>
            </div>
            <DocitNav />
          </Route>
        </Switch>
      )
    } else {
      return(
        <Route path="/">
          <Jumbo />
          <Home setToken={this.setSessionToken} />
        </Route>
      )
    }
  }

  render() {
    return (
      <div>
        <Router>
          <Header/>
            {this.protectedViews()}
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;