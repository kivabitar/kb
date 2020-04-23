import React from "react";
import Hero from "./acf/hero.js";
import {mm} from "./mm.js";
import Loading from './loading';
import News from './acf/news.js';
import Testimonial from './acf/testimonial.js';
import SplitPanel from './acf/splitpanel.js';
import Fullwidth from './acf/fullwidth.js';
import Form from './simpleform.js';
import Formsplit from './acf/formsplit.js';
import Fiftyfifty from './acf/fiftyfifty.js'
import FeedPage from './feedpage.js';
import sdata from './data/home.json';

class Home extends React.Component{
  constructor(props){
    super();
    this.state={
      pageStuff : [],
      loading: <Loading />
    }
    this.fillPage = this.fillPage.bind(this);
    this.fetchPostData = this.fetchPostData.bind(this);
    this.renderPage = this.renderPage.bind(this);
    this.populatePageAfterFetch = this.populatePageAfterFetch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  fillPage(obj){
    console.log(obj);
    let pageStuff = [];
    let i=0;

    let acf = obj.acf.content_rows;
    acf.map(function(a){
      //console.log(a);
      if(a.acf_fc_layout === 'hero'){
      //  console.log(a);
        pageStuff.push(<Hero {...a} key={i} />);
        i++
      }
      if(a.acf_fc_layout === '2_panel_w_grid'){
      //  console.log(a);
        pageStuff.push(<SplitPanel {...a} key={i} />);
        i++
      }
      if(a.acf_fc_layout === 'highlights_and_events'){
      //  console.log(a);
        pageStuff.push(<News {...a} key={i} />);
        i++
      }
      if(a.acf_fc_layout === 'testimonials_grid'){
      //  console.log(a);
        pageStuff.push(<Testimonial {...a} key={i} />);
        i++
      }
      if(a.acf_fc_layout === 'half'){
      //  console.log(a);
        pageStuff.push(<Fiftyfifty {...a} key={i} />);
        i++
      }
      if(a.acf_fc_layout === 'normal_content'){
      //  console.log(a);
        pageStuff.push(<Fullwidth {...a} key={i} />);
        i++
      }
      if(a.acf_fc_layout === 'full_width_background_image_section'){
      //  console.log(a);
        pageStuff.push(<Fullwidth {...a} key={i} />);
        i++
      }
      if(a.acf_fc_layout  === '50-50_imageform'){
        pageStuff.push(<Formsplit {...a} key={i} />);
      }
    });
    pageStuff.push(<FeedPage key="000111111" />);
    return pageStuff;
  }
  fetchPostData() {
    //this.setState({pageStuff:this.fillPage(sdata[0])});
    fetch(`https://wp.kivab.com/wp-json/wp/v2/pages?slug=home`)
      .then(response => response.json())
      .then(myJSON => {
        this.setState({loading:''});

        const acf = myJSON;
        //console.log(acf);
        //console.log(sdata[0])
        if(myJSON !== sdata){
          this.setState({pageStuff:this.fillPage(myJSON[0])});
        }else{
          this.setState({pageStuff:this.fillPage(sdata[0])});
        }
      });
  }
  renderPage(){
    if (this.state.pageStuff) {
      return (
        this.populatePageAfterFetch(1, '')
      );
    }
  }
  handleSubmit(event){
    alert("form was submitted");
  }

  render() {
    const styles = {
      margin: "0px 0 0 0"
    }
    const form = document.getElementById("gravity_form_");
    if(form){form.onSubmit = this.handleSubmit();}
    return(
      <div className="home " style={styles}>

        {this.renderPage()}
      </div>
    )
  }
}

export default mm(Home);
