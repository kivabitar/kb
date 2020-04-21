import React from "react";


function Herovid(props){
  const divstyle = {
    position:"absolute",
    left:0,
    zIndex:1
  }
  return(
    <video className="herovid " muted autoPlay loop style={divstyle}>
        <source src={props.hero_video} type="video/mp4" />
    </video>
  )
}

export default Herovid;
