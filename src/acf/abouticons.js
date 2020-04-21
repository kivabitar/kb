import React from "react";
import HTML2React from 'html2react'

const Abouticons = (props)=>{
  //console.log(props);
  const icons = [];
  props.icons_and_text.map((a,i)=>{
    icons.push(
        <div className="icons-text-item" key={i}>
            <div className="icon">
                <img src={a.icon} alt={HTML2React(a.text)} />
            </div>
            <div className="text">
              {HTML2React(a.text)}
            </div>
        </div>
    )
  });
  return (
    <div  className="icons-text" >
      <div className="inner-content">
        <h1>{HTML2React(props.section_title)}</h1>
        <div className="short-dash" />
        {icons}

      </div>
    </div>
  );
};

export default Abouticons;
