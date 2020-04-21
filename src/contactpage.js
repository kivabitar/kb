import React from "react";
import Form from './form.js';
import Loading from './loading.js';
import Hero from './acf/hero.js';
import Fullwidth from './acf/fullwidth.js';
import Repair from './acf/repair.js';

class Contact extends React.Component{
  constructor(props){
    super();
    this.state ={
      pageStuff : [],
      hero:[],
      loading: <Loading />,
      background: '',
      form: []
    }
    this.fetchPostData = this.fetchPostData.bind(this);
    this.renderPage = this.renderPage.bind(this);
    this.populatePageAfterFetch = this.populatePageAfterFetch.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
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
    fetch(`https://staging.matthewsmarking.com/wp-json/wp/v2/pages?slug=contact-us`)
      .then(response => response.json())
      .then(myJSON => {
        this.setState({loading:''});
        let pageStuff = [];
        let hero = [];
        //console.log(myJSON[0])
        const acf = myJSON[0].acf.contact_page;

        let bgover = '';
        let tover = ''
        if(myJSON[0].acf.add_contact_us_to_this_page){
           bgover = myJSON[0].acf.background_image_override;
           tover = myJSON[0].acf.title_override;
        }
        let i=0;
        acf.map(function(a){
          if(a.acf_fc_layout === 'hero'){
            //console.log(a);
            hero.push(<Hero {...a} key={i} />)
            i++;
          }
          if(a.acf_fc_layout === 'full_width'){
            //console.log(a);
            pageStuff.push(<Fullwidth content={a.content} key={i} />);
            i++;
          }
          if(a.acf_fc_layout === 'locations_blocks'){
            //console.log("I fired")
            pageStuff.push(<Repair {...a} key={i} />);
            i++;
          }
        });
        if(myJSON[0].acf.add_contact_us_to_this_page){
          pageStuff.push(<Contact title={tover} background_image_override={bgover}  key={i} /> );
        }
        this.setState({pageStuff:pageStuff});
        this.setState({hero:hero});
        let form = [];
        form.push(<Form {...this.props} form='5' key="1006"/>);
        this.setState({form:form})
      });
  }
  handleFormChange(event){
    let a = event.target.value;
    if(a=== 'tech'){
      let form = [];
      form.push(<Form {...this.props} form="18" key="1000" />);
      this.setState({form:form});
      return true
    }else if(a === 'productsales' ){
      let form = [];
      form.push(<Form {...this.props} form="19" key="1001" />);
      this.setState({form:form})
      return true;
    }else if(a === 'general'){
      let form = [];
      form.push(<Form {...this.props} form="18" key="1002"/>);
      this.setState({form:form})
      return true;

    }

  }
  renderPage(){

    if (this.state.pageStuff) {
      const pageArray = Object.values(this.state.pageStuff)
      return Object.values(pageArray).map((row, index) =>
        this.populatePageAfterFetch(row, index)
      );
    }
  }
  render(){
    let bgover = '';
    let marginBottom = {
      margin: '0 auto 8px'
    }
    //console.log(this.props);
    if(this.props.background_image_override ==='' || !this.props.background_image_override){
      const imgs = [
          'https://matthewsmarking.com/app/themes/matthewsmarking/library/images/contact_us_back_of_head_lady.jpg',
          'https://matthewsmarking.com/app/themes/matthewsmarking/library/images/contact_us_smiling_guy.jpg',
          'https://matthewsmarking.com/app/themes/matthewsmarking/library/images/contact_us_smiling_lady.jpg'
      ];
      let number = Math.floor(Math.random() * imgs.length);
      bgover = imgs[number];
    }
    else{
      bgover = this.props.background_image_override;
    }
    const divstyles = {
      backgroundImage:'url(' + bgover + ')'
    }
    return(
      <div className="contact">
        {this.state.hero}
        <div className="form-interrupt">
            <div className="inner-content">
                <div className="form">
                      <select id="reason" value="default" onChange={this.handleFormChange} style={marginBottom}>
                          <option value="default" disabled="" className="hider">Select Reason for Contact*</option>
                          <option value="productsales">Product / Sales Inquiry</option>
                          <option value="tech">Technical Support</option>
                          <option value="general">General Inquiry</option>
                          <option value="distribution">Distribution Inquiry</option>
                      </select>
                      {this.state.form}
                </div>
            </div>
        </div>
        {this.state.pageStuff}
      </div>
    )
  }
}

export default Contact;
