import React from 'react';



function Apptile(props){
  const divstyle = {
    backgroundImage : "url(" + props.app_image + ")"
  }
  return(
    <div className="app-tile"  title={props.application_title} onClick={() => { window.location = props.application_link }}>
         <div className="app-upper" style={divstyle}>
         </div>
         <div className="app-lower">
             <a href={props.application_link} title={props.application_title}>{props.application_title}</a>
         </div>
     </div>
  )
}

export default Apptile;
