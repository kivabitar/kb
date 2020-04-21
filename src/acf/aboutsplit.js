import React from "react";
import HTML2React from "html2react";
import Slideimage from './slideimage.js'
import Slidebullet from './slidebullets.js'
import Slidelink from './slidelinks.js'

class Aboutsplit extends React.Component{

  constructor(props){
    //console.log(props);
    super();
    this.state = {
      slides: props.slides,
      activeSlide:0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    event.preventDefault();
    //console.log("fired")
    let link = event.target.attributes.data.textContent;
    console.log(link);
    this.setState({activeSlide:link});
  }
  componentDidMount(){

  }


  render(){
    let active = "false";
    let images = [];
    let bullets = [];
    let links= [];
    let i  =0;

    this.state.slides.map(a=>{
      if(i== this.state.activeSlide){
        active="true"
      }
      images.push(<Slideimage {...a} key={i} count={i} active={active} handleClick={this.handleClick} />);
      bullets.push(<Slidebullet {...a} key={i} count={i} active={active} handleClick={this.handleClick} />);
      links.push(<Slidelink {...a} key={i} count={i} active={active} handleClick={this.handleClick} />);
      i++;
      active = "false";
      return true;
    });
    return(

      <div className="about-split">
            <div className="inner-content">
                <div className="col-md-6">
                    <div className="stage">
                      <h1>{this.state.slides[0].h1_title}</h1>


                        <div className="shortDash"></div>
                            {HTML2React(this.state.slides[0].desc)}


                    </div>
                </div>


                <div className="col-md-6">
                    <h1>{this.props.section_title}</h1>
                    <div className="short-dash"></div>
                    <ul className="slide-titles">
                          {links}
                    </ul>
                </div>
            </div>
        </div>

    )
  }
}

export default Aboutsplit;
