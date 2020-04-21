import React from "react";
import Herovid from './herovid.js'
import HTML2React from 'html2react'

function Hero(props){
//const Html2React = libraries.html2react.Component;

  console.log(props)

  // Load the post, but only if the data is ready.
  console.log(props.height);
const hstyle = {
  minHeight: 460
}
const flex = {
  display: "flex",
  alignContent :'center',
  minHeight: 460
}
console.log(hstyle)
const styles = {
  backgroundImage:"url("+ props.manual_slider[0].slide_image + ')',
  minHeight: 460,
  backgroundRepeat: 'no-repeat',
  backgroundSize:'cover',
  backgroundPosition: "center 50%"
}
const centerstyles = {
  margin:'auto'
}
  return (
    <section  style={hstyle}>
                <div id="mslider" className="m-slider">
                    <div className="slick" style={hstyle}>
                        <div style={styles}>
                            <div className="container-wrap">
                                <div className="container" style={flex}>
                                    <div className="slide-cont bg" style={centerstyles}>

                                            <h1>{props.manual_slider[0].slide_title}</h1>


                                        <div className="smain-content">

                                            <div className="text-center">
                                            {HTML2React(props.manual_slider[0].slide_content)}
                                                {props.manual_slider[0].cta_link ? <a href={props.manual_slider[0].cta_link} className="newbutton"  >{props.manual_slider[0].cta_label}</a> : false }
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                </div>

        </section>
  );
};

export default Hero;
