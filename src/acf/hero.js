import React from "react";
import Herovid from './herovid.js'
import HTML2React from 'html2react'

function Hero(props){
//const Html2React = libraries.html2react.Component;


  const styles = {
    position:'static',
    zIndex:5,
  };
  const divstyle = {backgroundImage:'url(' + props.background_image + ')'};
  // Load the post, but only if the data is ready.
//  console.log(props);
  return (
    <div  className="hero" style={divstyle} >
      {(props.image_or_video_background === "Video" ? <Herovid hero_video={props.hero_video} />  : null)}
      <div className="dark-overlay"> </div>
      <div className="texture"></div>
      <div className="inner-content" style={styles}>
        <h1 >{ HTML2React(props.hero_title) }</h1>
        <div className="short-dash"> </div>
        <div className="detail"  >{HTML2React(props.hero_details)}</div>
        {props.hero_link ? <a href={props.hero_link} className="orange button">{props.hero_linktext}</a> : ''}
      </div>
    </div>
  );
};

export default Hero;
