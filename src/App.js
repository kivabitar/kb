import React from "react";
import Menu from "./menu";
import Header from "./header.js";
import Footer from "./footer.js";
import Home from "./home.js";
import Bread from "./bread.js";
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Fourohfour from "./fourohfour.js";
import Head from "./head.js";
import Contactpage from './contactpage.js';
import Blog from './blog.js';
import Blogentry from './blogentry.js';
import Normalpage from './normalpage.js';
import './App.css';
import FeedPage from './feedpage.js';
import { createBrowserHistory as createHistory } from "history";
const history = createHistory();

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
              <Route exact path = '/how-to-make-bread-part-1'>
                <Head title="Welcome to Kiva Bostrom's personal website | How to make bread" />
                <Bread slug="how-to-make-bread-part-1" />
              </Route>
              <Route exact path = '/how-to-make-bread-part-2'>
                <Head title="Welcome to Kiva Bostrom's personal website | How to make bread" />
                <Bread  slug="how-to-make-bread-part-2" />
              </Route>
              <Route exact path = '/blog'>
                <Head title="Welcome to Kiva Bostrom's personal website | Web Dev and System Architect" />
                <Blog />
              </Route>
              <Route path = '/blog/:slug'>
                <Head title="Kiva Blog" favicon='/kb.png'  />
                <Blogentry />
              </Route>
              <Route
                path="/feed"
                exact
                component={props => <FeedPage {...props} />}
              />
            </Switch>
          </BrowserRouter>
          </div>
          <Footer />
        </div>
    )
  }
}

export default App
