import React from "react";
import HTML2React from 'html2react'

function Fullpost(props){
//const Html2React = libraries.html2react.Component;

  return (
    <div  className="full-width-content" >
      <div className="inner-content">
        <h1>{props.title.rendered}</h1>
        {HTML2React(props.content.rendered)}

      </div>
    </div>
  );
};

export default Fullpost;
