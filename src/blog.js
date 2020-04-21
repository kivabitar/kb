import React from "react"
import {mm} from "./mm.js"
import Loading from './loading';
import Blogloop from './blogloop.js';

class Blog extends React.Component{
  constructor(props){
    super();
    this.state={
      pageStuff : [],
      loading: <Loading />
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
  fetchPostData() {
    fetch(`https://wp.kivab.com/wp-json/wp/v2/posts`)
      .then(response => response.json())
      .then(myJSON => {

        this.setState({loading:''})
        let pageStuff = [];
        const posts = myJSON;
      //  console.log(myJSON)

        let i=0;
        posts.map(function(a){

        //  console.log(a);
          pageStuff.push(<Blogloop {...a} key={i} />);
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
      <section className="fullwidth">
        <div className="row">
          {this.renderPage()}
          {this.state.loading}
        </div>
      </section>
    )
  }
}

export default mm(Blog);
