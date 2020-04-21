import React from 'react';



function Slidebullet(props){

  //console.log(props.count)
  return(
    <>
      <a href="#" className={props.active === "true" ? "nubs active-slide slide"+props.count :"nubs slide"+props.count } data={props.count} onClick={props.handleClick}>•</a>
    </>
  )
}

export default Slidebullet;
