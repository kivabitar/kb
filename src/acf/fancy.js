import React from 'react';
import HTML2React from 'html2react';


const Fancy = (props) =>{
  return(
    <a className="fancy" data-fancybox href={props.img}>
      <img src={props.img} alt={props.alt} />
    </a>
  )
}

export default Fancy;
