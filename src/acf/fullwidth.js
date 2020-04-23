import React from "react";
import HTML2React from 'html2react'

function Fullwidth(props){
//const Html2React = libraries.html2react.Component;

  return (
    <div  className="fullwidth" >
      <div className="row">

        {HTML2React(props.content)}

      </div>
    </div>
  );
};

export default Fullwidth;
