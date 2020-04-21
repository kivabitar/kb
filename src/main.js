import React from "react"
import Hero from "./acf/hero.js"
import {mm} from "./mm.js"
import Loading from './loading';

class Main extends React.Component{
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
    fetch(`https://staging.matthewsmarking.com/wp-json/wp/v2/frontpage`)
      .then(response => response.json())
      .then(myJSON => {

        this.setState({loading:''})
        let pageStuff = [];

        const acf = myJSON.acf.content_rows;
        //console.log(myJSON)
        let i=0;
        acf.map(function(a){
          if(a.acf_fc_layout === 'hero'){
          //  console.log(a);
            pageStuff.push(<Hero background_image={a.background_image} image_or_video_background={a.image_or_video_background} hero_video={a.hero_video}  hero_title={a.hero_title} hero_details={a.hero_details} key={i} />);
            i++

          }
        });

        this.setState({pageStuff: pageStuff});
        return true;
      });
  }
  renderPage(){
    if (this.state.pageStuff) {
      const pageArray = Object.values(this.state.pageStuff)
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

export default mm(Main);
