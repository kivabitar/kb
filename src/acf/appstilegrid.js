import React from "react";
import Apptile from './apptiles.js';

function Appstilegrid(props){
  let tiles = [];
  let i = 0;
  props.apps.map(a =>{
    tiles.push(<Apptile app_image={a.app_image} application_title={a.application_title} application_link={a.application_link} key={i}  />);
    i++;
    return true;
  })

  return(
    <div className="apps-tile-grid white" id={"blah"+props.number}>
        <div className="inner-content">
            <div className="flex-row">
              {tiles}
            </div>
        </div>
    </div>
  )
}

export default Appstilegrid;
