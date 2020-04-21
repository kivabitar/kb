import React from "react"
import Hero from "./acf/hero.js"
import {mm} from "./mm.js"
import Loading from './loading.js';
import Fullwidth from './acf/fullwidth.js';
import Fullpost from './acf/fullpost.js';
import Contact from './contact.js';

class Solutions extends React.Component{
  constructor(props){
    super();
    this.state={
      slug:props.slug,
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
  populatePageAfterFetch(movie, index) {
    if (this.state.pageStuff) {

      return (
        this.state.pageStuff
      )
    }
  }
  fetchPostData() {
    let url=`https://wp.kivab.com/wp-json/wp/v2/pages?slug=${this.state.slug}`
    fetch(url)
      .then(response => response.json())
      .then(myJSON => {
        this.setState({loading:''});
        let pageStuff = [];
        const acf = myJSON[0];
        console.log(myJSON)
        let i =0;
        if(acf){
          pageStuff.push(<Fullpost {...acf}  key={9808097} />)
          this.setState({pageStuff:pageStuff});
        }else{
          url=`https://staging.matthewsmarking.com/wp-json/wp/v2/posts?slug=${this.state.slug}`
          fetch(url)
            .then(response => response.json())
            .then(myJSON => {
              this.setState({loading:''});
              let pageStuff = [];
              const acf = myJSON[0];
              console.log(myJSON)
              let i =0;
              if(acf){
                pageStuff.push(<Fullpost {...acf} key={9808098} />)
                this.setState({pageStuff:pageStuff});
              }

            });
        }

      });
  }
  renderPage(){
    if (this.state.pageStuff) {
      return(
        this.populatePageAfterFetch(0, '')
      );
    }
  }


  render() {
    const styles = {
      margin: "120px 0 0 0"
    }
    return(
      <div style={styles}>
      {this.renderPage()}
      {this.state.loading}

      </div>
    )
  }
}

export default mm(Solutions);
