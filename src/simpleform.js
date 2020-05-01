import React from "react";
import HTML2React from 'html2react';
import Loading from './loading';
import Text from './fields/text.js';
import Textarea from './fields/textarea.js';
import Hidden from './fields/hidden.js';
import Select from './fields/select.js';
import Checkbox from './fields/checkbox.js';
import fdata from './data/form.json';

class Form extends React.Component{
  constructor(props){
    super();
    this.state={
      pageStuff : [],
      loading: <Loading />,
      form: 18
    }
    //console.log(props)
    this.fetchPostData = this.fetchPostData.bind(this);
    this.renderPage = this.renderPage.bind(this);
    this.populatePageAfterFetch = this.populatePageAfterFetch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    //console.log(this.props.form)
    let url = '';
    if(this.props.form !== ''){
       //url = `https://staging.matthewsmarking.com/wp-json/r/form/?id=${this.props.form}`;
       this.setState({form:this.props.form})
    }

    //  console.log(url);
    let pageStuff = [];

    let formstuff = Array.from(fdata.fields);
    let i = 0;
    console.log(formstuff);
    formstuff.map(a=>{
      if(a.type == 'text' || a.type == 'email'){
        console.log("this fired")
        pageStuff.push(<Text {...a} key={i} />)
        i++;
      }
      if(a.type == 'textarea'){
        pageStuff.push(<Textarea {...a} key={i} />)
        i++;
      }
      if(a.type == 'hidden'){
        pageStuff.push(<Hidden {...a} key={i} />)
        i++;
      }
      if(a.type == 'select'){

        pageStuff.push(<Select {...a} key={i} condition={a.conditionalLogic} />)
        i++;
      }
      if(a.type == 'checkbox'){
        pageStuff.push(<Checkbox {...a} key={i} />)
        i++;
      }
    //  console.log(a)
    });
    this.setState({loading: '' });
    this.setState({pageStuff :pageStuff});
  }
  renderPage(){
    if (this.state.pageStuff) {
      return(
        this.populatePageAfterFetch(1, '')
      );
    }

  }
  handleClick(event){

    event.preventDefault();
    const form = document.getElementById('gf');
    const elements = document.getElementById('gf').elements;

    //console.log(form);
    let errors = 0;

    for (var i = 0, element; element = elements[i++];) {

        let id = element.getAttribute('id');

        if(id){
          if(document.getElementById(id).required){
            if(element.classList.contains('errorfield')){
              element.classList.remove('errorfield');
            }
            //console.log(document.getElementById(id).value);
            if (document.getElementById(id).type == "text") {
              if(!document.getElementById(id).value){
                errors++;
                console.log(document.getElementById(id));
              }
            }
            if (document.getElementById(id).type == "checkbox") {
              if(!document.getElementById(id).checked){
                errors++;
                console.log(document.getElementById(id));
              }
            }
          }
        }


    }

    if(!errors){

      form.style.display = 'none';

      this.setState({loading: <Loading />});


      const data = new FormData(form);

      fetch('https://wp.kivab.com/wp-json/hi/contact/', {
        method: 'POST',
        body: data,
      }).then(response => response.json())
      .then(myJSON => {
        console.table(myJSON);
        this.setState({loading: "Thank you for reaching out! Someone from our team will be in touch soon!"});
      });
    }else{
      //console.log("first name: "+ firstname + " last name: " + lastname + " Email: " + email)

      const style='';

      document.getElementById('errortexthere').innerHTML = "<span style=\"color:red\">You must fill out all of the required fields</span>";
      for (var i = 0, element; element = elements[i++];) {
          let id = element.getAttribute('id');
          if(id){
            if(document.getElementById(id).required){
              //console.log(document.getElementById(id).value);
              if(!document.getElementById(id).value){
                document.getElementById(id).classList.add('errorfield');
              }else if(document.getElementById(id).value == 'default'){
                document.getElementById(id).classList.add('errorfield');
              }
            }
          }

      }
      //alert("You must fill out all of the fields")
    }

  }
  handleChange(event){
    //  console.log(event.target.getAttribute('data-id'));
      const val = event.target.value;
      const form = document.getElementById('gf');
      const elements = document.getElementById('gf').elements;

      for (var i = 0, element; element = elements[i++];) {

          let id = element.getAttribute('data-rule');
          let rule = element.getAttribute('data-type');
          let newval = element.getAttribute('data-value')
          if(rule == 'is'){
          //  console.log(id);
          //  console.log(newval);
            let input = 'input_'+ this.state.form + '_'+ id;
            //console.log(input);
            if(newval == document.getElementById('input_'+ this.state.form + '_'+ id).value){
              element.parentNode.setAttribute('style','display:inline-block');
            }else{
              element.parentNode.setAttribute('style','display:none');
            }
          }
      }
  }
  render() {
    const divstyle = {
      margin: "30px 30px 30px 80px",

    }
    const buttonStyle = {
      border:'none'
    }
    return(
      <section className="inner-content">
          <div className="inner-content cform" style={divstyle}>

            <div id="errortexthere"></div>
            <h2>Contact me</h2>
            <form  id="gf" onSubmit={this.handleClick} onChange={this.handleChange} >
              <ul id={"gform_field_" + this.state.form} className="gform_fields description_below top_label">
                {this.renderPage()}
                <li><button className="orange button" style={buttonStyle}>submit</button></li>
              </ul>
            </form>
            {this.state.loading}

          </div>
        </section>
    )
  }
}

export default Form
