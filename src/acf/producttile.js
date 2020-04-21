import React from "react";
import HTML2React from 'html2react';



class Producttile extends React.Component{
  //console.log(props)
  constructor(props){
    super(props);
    this.state={
      currentPath: ''
    }
    this.fetchPostData = this.fetchPostData.bind(this);
    this.renderPage = this.renderPage.bind(this);
    this.populatePageAfterFetch = this.populatePageAfterFetch.bind(this);
  }
  populatePageAfterFetch(product, index) {
    if (this.state.currentPath) {

      return (
        this.state.currentPath
      )
    }
  }
  componentDidMount() {
      this.fetchPostData();
  }
  fetchPostData(props,state) {
    let url = 'https://staging.matthewsmarking.com/wp-json/mm/img/?id=' + this.props.featured_media
    fetch(url)
      .then(response => response.json())
      .then(myJSON => {
        let imagePath = myJSON[0];
        this.setState({currentPath:imagePath});
        //console.log(this.state.currentPath)
      });

  }
  renderPage(){

    if (this.state.currentPath) {
      return(
        this.populatePageAfterFetch(0, '')
      );
    }
  }

  render(){
    const link = '/product/' + this.props.slug;
    return(
      <div className="col-md-4 product-tile 0" onClick={()=>window.location=link}>
        <div className="overlay"> </div>
        <div className="goodfor">
          <h3>{HTML2React(this.props.acf.pc_hover_title)}</h3>
          <div className="short-dash"> </div>
            {HTML2React(this.props.acf.good_for)}
        </div>
        <img src={this.renderPage()} className="prod-img" alt={HTML2React(this.props.title.rendered)}  />
        <div className="lower">
          <a href={link}>{HTML2React(this.props.title.rendered)}</a>
          <a href={link} className="go">GO</a>
        </div>
    </div>
    )
  }
}
export default Producttile;
