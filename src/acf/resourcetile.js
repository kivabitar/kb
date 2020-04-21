import React from "react";


const Resourcetile = (props) => {
  let image = '';
  props.resource_image ? image = props.resource_image : image = props.background_image;
  const bg = {
    backgroundImage:"url(" + image + ")"
  }
  return(
    <div className="col-md-4 app-tile"  style={bg}>
        <div className="doverlay"></div>
        <div className="tile-upper">
            {props.resource_name ? props.resource_name : props.resource_title}
        </div>
        <div className="hover-content">
            {props.hover_text ? props.hover_text : props.resource_hover_text}
            <div className="mini-dash"> </div>
        </div>
        <a href={props.resource_link ? props.resource_link : props.link} title="Learn more">Learn more</a>
        <div className="overlay"></div>
    </div>
  )
}
export default Resourcetile;
