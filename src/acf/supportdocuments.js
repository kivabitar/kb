import React from 'react';
import Supportdocument from '../acf/supportdocument.js';


const Supportdocuments = (props)=>{
  const tiles =[];
  const apps = props.documents;
  let i=0;
  apps.map(a=>{
    tiles.push(<Supportdocument {...a} key={i} />);
    i++;
    return true;
  });
  return(
    <div className="support-tile-grid">
        <div className="inner-content">
            <div className="app-title">
                <h1>{props.docs_title}</h1>
                    <div className="short-dash"></div>
            </div>
            <div className="margin-top-big">
                <div className="support-docs">
                  {tiles}
                </div>
            </div>
        </div>
    </div>
  )
}
export default Supportdocuments;
