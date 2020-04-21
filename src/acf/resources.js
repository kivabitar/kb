import React from 'react';
import Resourcetile from '../acf/resourcetile.js';


const Resources = (props)=>{
  const tiles =[];
  let apps ="";
  props.resources_rep ? apps = props.resources_rep : apps = props.resources;

  let i=0;
  apps.map(a=>{
    //console.log(a)
    tiles.push(<Resourcetile {...a} key={i} />);
    i++;
    return true;
  });
  return(
    <div className="resource-tile-grid">
        <div className="inner-content">
            <div className="app-title">

                <h1>{props.title ? props.title : props.resources_title}</h1>
                <div className="short-dash"></div>

            </div>
            <div className="row margin-top-big">
                <div className="apps">
                  {tiles}

                </div>
            </div>
        </div>
    </div>
  )
}
export default Resources;
