import React from 'react';
import Imageblock from '../acf/imageblock.js';
import Newsblock from '../acf/newsblocks.js';

const News = (props)=>{
  const tiles =[];
  let apps =props.highlight_row;
  const left = [];
  const right = [];
  apps.map(a=>{
  //  console.log(a)

    a.right_block.map((b,i)=>{
      right.push(<Newsblock {...b} key={i} />)
    })
    a.left_block.map((c,i)=>{
      left.push(<Newsblock {...c} key={i} />)
    });
    return true;
  });
  return(
    <div className="news-highlights">
      <div className="inner-content">
        <p className="value-prop">{props.h_value_prop}</p>
        <h1>{props.tile_title}</h1>
          <div className="mesh">
              <div className="mesh-container">
                {left}
              </div>


              <div className="mesh-container">
                {right}
              </div>
            </div>
        </div>
    </div>
  )
}
export default News;
