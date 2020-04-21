import React from 'react';



function Slideimage(props){
  const divstyle = {
    backgroundImage : "url(" + props.main_image + ")"
  }
  //console.log(props.active)
  return(
      <div className= {props.active === "true" ? "active-slide  imgslide slide slide"+props.count : '' +" imgslide slide slide"+props.count }
        style={divstyle}
        data-title={props.title}
        data-link={props.link}>
      </div>
  )
}

export default Slideimage;
