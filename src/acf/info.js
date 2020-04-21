import React from "react";
import HTML2React from "html2react";
import Infocolumn from '../acf/infocolumn.js';

const Info =(props)=>{
  const cols = [];
  props.column.map((a,i)=>{
    cols.push(<Infocolumn {...a} key={i} />)
  });

    return(

      <div className="contact-us-info">
            <div className="inner-content">
                <h1>{props.info_title}</h1>
                <div className="short-dash"></div>
                <div className="row">

                  {cols}

                </div>
            </div>
        </div>

    )
}

export default Info;
