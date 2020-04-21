import React from "react";
import HTML2React from 'html2react'

function Fiftyfifty(props){
//const Html2React = libraries.html2react.Component;
  const styles = {
    backgroundImage:"url(" + props.background_image + ")"
  }
  return (
    <section className="half-half">
        <div className="innerhalf fifty-left">
              <h1>{props.fifty_title}</h1>
              <div className="fifty-content">{HTML2React(props.fifty_content)}</div>
          </div>
        <div className="half-image right-half" style={styles}></div>
    </section>
  );
};

export default Fiftyfifty;
