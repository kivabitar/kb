import React from "react";


const Resourcetile = (props) => {
  let image = '';
  image = props.background_image;
  const bg = {
    backgroundImage:"url(" + image + ")"
  }
  return(
    <div className="col-md-4 blocks"  style={bg} onClick={()=>window.location = props.link}>
      <div className="hoverlay"></div>

      <a href={props.link} title={props.link_text}>{props.link_text}</a>
      <div className="overlay"></div>
    </div>
  )
}
export default Resourcetile;
