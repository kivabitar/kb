import React from "react";
import HTML2React from 'html2react'
import Form from '../simpleform.js';

function Formsplit(props){
//const Html2React = libraries.html2react.Component;
  const styles = {
    backgroundImage:"url(" + props.background_image + ")",
    textAlign:'left'
  }
  return (
    <section className="half-half">
      <div className="half-image left-half" style={styles}>
          <Form />
      </div>
      <div className="innerhalf fifty-right">
          <h1>{props.fifty_title}</h1>
          <div className="fifty-content">{HTML2React(props.fifty_content)}</div>
      </div>

    </section>
  );
};

export default Formsplit;
