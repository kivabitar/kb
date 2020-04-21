import React from 'react';
import Prodcolumn from './prodcolumn.js';

function ThreeColumnc(props){

  const columns = props.columns;
  const page = [];
  columns.map((a,i)=>{
    page.push(<Prodcolumn {...a} key={i} />)
    return true;
  })



  return (
      <div className="prod-col-grid ">
          <div className="inner-content">
            {page}
          </div>
      </div>
  );
};

export default ThreeColumnc;
