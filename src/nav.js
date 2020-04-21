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
    let ftLinks = [];
    let rightLinks  = [];
    const solutions  = [];
    const applications = [];
    const industries = [];
    const company = [];
    const insights = [];
    menu.map(a=>{
      if(a.menu_item_parent == 214){
      //  console.log(a);
        solutions.push({name: a.title, link: a.url});
      }
      if(a.menu_item_parent == 213){
      //  console.log(a);
        applications.push({name: a.title, link: a.url});
      }
      if(a.menu_item_parent == 212){
       //console.log(a);
        industries.push({name: a.title, link: a.url});
      }
      if(a.menu_item_parent == 37699){
      //  console.log(a);
        company.push({name: a.title, link: a.url});
      }
      if(a.menu_item_parent == 37667){
      //  console.log(a);
        insights.push({name: a.title, link: a.url});
      }
      return true;
    });


    const divstyle= {
      color: '#fc4e19'
    }
    return(
    <nav className="menu-container" role="navigation">

        <div id="mega-menu-wrap-main-nav" className={this.state.expanded ? "mega-menu-wrap active" : "mega-menu-wrap"}>
          <button className={this.state.expanded ? "hamburger hamburger--squeeze is-active" : "hamburger hamburger--squeeze"} type="button" onClick={this.handleClick}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>

            <ul id="mega-menu-main-nav" className={this.state.expanded ? "mega-menu max-mega-menu mega-menu-horizontal active" :"mega-menu max-mega-menu mega-menu-horizontal"   } data-event="hover_intent" data-effect="fade" data-effect-speed="200" data-effect-mobile="disabled" data-effect-speed-mobile="0" data-panel-inner-width="420px" data-mobile-force-width="false" data-second-click="go" data-document-click="collapse" data-vertical-behaviour="standard" data-breakpoint="992" data-unbind="true">
              <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-home mega-current-menu-item mega-page_item mega-page-item-8 mega-current_page_item mega-align-bottom-left mega-menu-flyout mega-hide-on-mobile mega-menu-item-37640" id="mega-menu-item-37640">
                <a className="mega-menu-link" href="/">Home</a>

              </li>
              <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-hide-arrow mega-menu-item-214" id="mega-menu-item-214">
                <a className="mega-menu-link" href="/solutions/" aria-haspopup="true" aria-expanded="false">Solutions<span className="mega-indicator"></span>
                </a>
                <Submenu links={solutions}/>
              </li>
              <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-hide-arrow mega-menu-item-213" id="mega-menu-item-215">
                <a className="mega-menu-link" href="/applications/" aria-haspopup="true" aria-expanded="false" >Applications<span className="mega-indicator"></span></a>
                <Submenu links={applications}/>
              </li>
              <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-hide-arrow mega-menu-item-213" id="mega-menu-item-216">
                <a className="mega-menu-link" href="/industries/" aria-haspopup="true" aria-expanded="false" >Industries<span className="mega-indicator"></span></a>
                <Submenu links={industries}/>
              </li>
              <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-hide-arrow mega-menu-item-213" id="mega-menu-item-217">
                <a className="mega-menu-link" href="#" aria-haspopup="true" aria-expanded="false" >Company</a>
                <Submenu links={company}/>
              </li>
              <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-hide-arrow mega-menu-item-213" id="mega-menu-item-218">
                <a className="mega-menu-link" href="#" aria-haspopup="true" aria-expanded="false" >Insights</a>
                <Submenu links={insights}/>
              </li>
              <li className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-hide-arrow mega-menu-item-213" id="mega-menu-item-219">
                <a className="mega-menu-link" href="/product-catalog/" style={divstyle} aria-haspopup="true" aria-expanded="false" >Product Catalog<span className="mega-indicator"></span></a>
              </li>
            </ul>
          </div>
        </nav>
      )
  }
}

export default Nav;
