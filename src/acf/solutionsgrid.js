import React from 'react';
import Solutionsgridtile from '../acf/solutionsgridtile.js';


const Solutionsgrid = (props)=>{
  const tiles =[];
  let apps =props.solutions;
  const style ={
    marginBottom:"30px"
  }

  let i=0;
  apps.map(a=>{
  //  console.log(a)
    tiles.push(<Solutionsgridtile {...a} key={i} />);
    i++;
    return true;
  });
  return(
    <div className="solutions-grid">
      <div className="inner-content">
          <h1>{props.solutions_title}</h1>
          <div className="short-dash" style={style}></div>
          <div className="row">

            {tiles}



                </div>
       </div>
    </div>
  )
}
export default Solutionsgrid;
