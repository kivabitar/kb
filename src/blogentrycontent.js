import React from "react"
import Hero from "./acf/hero.js"
import {mm} from "./mm.js"
import Loading from './loading';
import Blogpage from './blogpage.js';


class Blogentrycontent extends React.Component{
  constructor(props){
    super();
    this.state={
      pageStuff : [],
      loading: <Loading />,
      slug: props.slug
    }
    this.fetchPostData = this.fetchPostData.bind(this);
    this.renderPage = this.renderPage.bind(this);
    this.populatePageAfterFetch = this.populatePageAfterFetch.bind(this);
  }
  componentDidMount() {
      this.fetchPostData();
  }
  populatePageAfterFetch(state, index) {
    if (this.state.pageStuff) {

      return (
        this.state.pageStuff
      )
    }
  }
  fetchPostData(props) {
    fetch(`https://wp.kivab.com/wp-json/wp/v2/posts?slug=` + this.state.slug)
      .then(response => response.json())
      .then(myJSON => {

        this.setState({loading:''});
        let pageStuff = [];

        const acf = myJSON;
        //console.log(myJSON)
        let i=0;
        acf.map(function(a){

            pageStuff.push(<Blogpage {...a} key={i} />);
            i++

        });

        this.setState({pageStuff: pageStuff});
      });
  }
  renderPage(){
    if (this.state.pageStuff) {

      return (
        this.populatePageAfterFetch(0, '')
      );
    }
  }


  render() {
    return(
      <div>
        {this.renderPage()}
        {this.state.loading}
      </div>
    )
  }
}

export default mm(Blogentrycontent);
