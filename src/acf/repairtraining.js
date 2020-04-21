import React from "react";
import HTML2React from 'html2react';
import Block from '../acf/block.js';

const Repairtraining = (props)=>{
  const blocks = [];
  let j=0;
  props.repair_blocks.map((a,i)=>{
    blocks.push(<Block {...a} key={i} number={j} />);
    if(j==1){
      j=0;
    }
  })
  return(
    <div className="repair">
      <div className="inner-content">
        <h1>{props.repair_and_training_title}</h1>
        {blocks}
      </div>

    </div>
  )

}
export default Repairtraining;
