import React from "react";
import HTML2React from 'html2react';
import Block from '../acf/block.js';

const Repair = (props)=>{
  const blocks = [];
  let j=0;
  props.location_block.map((a,i)=>{
    blocks.push(<Block {...a} key={i} number={j} />);
    if(j==1){
      j=0;
    }else{
      j++;
    }
  })
  return(
    <div className="repair">
      <div className="inner-content">
        <h1>{HTML2React(props.locations_title)}</h1>
        {blocks}
      </div>

    </div>
  )

}
export default Repair;
