import React from "react";
import Menu from "./menu";
import Header from "./header.js";
import Footer from "./footer.js";
import Home from "./home.js";
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Fourohfour from "./fourohfour.js";
import Head from "./head.js";
import Contactpage from './contactpage.js';
import Blog from './blog.js';
import Blogentry from './blogentry.js';
import Normalpage from './normalpage.js';
import './App.css';


const InitialState = {
  pageStuff: {"blue":true}
}

const styles = {
  margin: "0px 0 0 0"
}


class App extends React.Component {

 constructor(props) {
    super(props);
    this.state = localStorage.getItem("appState") ? JSON.parse(localStorage.getItem("appState")) : InitialState;

  }

  componentWillUnmount() {
    // Remember state for the next mount
    localStorage.setItem('appState', JSON.stringify(this.state));
  }

  render() {

    return (
        <div id="content">
          <Header />
          <div id="container" className="stickyc">
          <BrowserRouter>
            <Switch>
              <Route exact path = '/'>
                <Head title="Welcome to Kiva Bostrom's personal website | Web Dev and System Architect" />
                <Home />
              </Route>
              <Route exact path = '/blog'>
                <Head title="Welcome to Kiva Bostrom's personal website | Web Dev and System Architect" />
                <Blog />
              </Route>
              <Route path = '/blog/:slug'>
                <Head title="Kiva Blog" favicon='/kb.png'  />
                <Blogentry />
              </Route>
            </Switch>
          </BrowserRouter>
          </div>
          <Footer />
        </div>
    )
  }
}

export default App
