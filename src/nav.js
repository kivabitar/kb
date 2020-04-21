import React from "react";
import Submenu from './submenu.js';
import menu from './menu.json';
//https://staging.matthewsmarking.com/wp-json/mm/menu
//console.log(menu);
/**
 * Navigation Component
 *
 * It renders the navigation links
 */
class Nav extends React.Component {
  constructor(props){
    super();
    this.state = {
      expanded:false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    this.state.expanded ? this.setState({expanded:false}) : this.setState({expanded:true});

  }
  render(){




    const divstyle= {
      color: '#fc4e19'
    }
    return(
      <ul id="menu-main-menu" className="nav top-nav cf">
        <li id="menu-item-82" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-82"><a href="/blog/">Blog</a></li>
      </ul>
      )
  }
}

export default Nav;
