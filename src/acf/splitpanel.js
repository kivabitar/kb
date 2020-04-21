import React from "react";
import SplitPanelItem from './splitpanelitem.js';
import HTML2React from 'html2react'

const SplitPanel = (props) =>{

  let divstyles = {
    backgroundImage: 'url(' + props.background_image + ')',
  }
  const itemvals = Array.from(props.items);
  let bullets = [];

  //console.log(props)
  itemvals.map((a,i)=>(
    bullets.push(<SplitPanelItem icon={a.icon} label={a.label} link={a.link} key={i} />)
  ));


  return(
    <div className="split-panel" style={divstyles}>
        <div className="inner-content">
            <div className="col-md-6">
                <p className="value-prop">{props.h_value_prop}</p>
                  <h1>{props.title}</h1>
                  <div className="detail">
                      {HTML2React(props.details)}
                  </div>
                  <ul className="slide-titles">
                    {bullets}
                  </ul>
                  {props.button_link ? <a href={props.button_link} className="orange button">{props.button_link_text}</a> : ''}
            </div>
            <div className="col-md-6">
            </div>
        </div>
    </div>
  )
}

export default SplitPanel;
