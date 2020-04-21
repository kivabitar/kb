import React from 'react';
import Imageblock from '../acf/imageblock.js';


const Imageblocks = (props)=>{
  const tiles =[];
  let apps =props.blocks;


  let i=0;
  apps.map(a=>{
    //console.log(a)
    tiles.push(<Imageblock {...a} key={i} />);
    i++;
    return true;
  });
  return(
        <div className="image-blocks-grid">
            <div className="inner-content">
                <div className="row">

                  {tiles}


                </div>
            </div>
        </div>
  )
}
export default Imageblocks;
