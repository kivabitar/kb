import React from "react";
import Solutionstabs from '../acf/solutionstabs.js';
import HTML2React from 'html2react';

const Solutionsgridtile = (props) => {
  let image = '';
  image = props.background_image;
  const bg = {
    backgroundImage:"url(" + image + ")"
  }
  let solutions =props.solutions_products;
  console.log(props);
  const tiles = [];
  let i=0;
  solutions.map(a=>{
    //console.log(a)
    tiles.push(<Solutionstabs {...a} key={i} />);
    i++;
    return true;
  });
  return(
    <div className="col-md-6 solution" style={bg}  onClick={()=>window.location = props.product_link}>
        <div className="hoverlay slappy" data-link={props.product_link}>
            <div className="hovercont">
                <div className="short-dash"></div>
                {HTML2React(props.solution_summary)}
            </div>

        </div>
        <div className="upper-overlay"></div>
        <div className="solution-upper">
            <div className="solution-tit">
                {props.solution_title}
            </div>

        </div>
        <div className="solution-lower">
            <div className="solution-lower-cont">
                <div className="solution-lower-inner hB86Eeuskd">
                  {tiles}
                </div>
            </div>
        </div>

    </div>

  )
}
export default Solutionsgridtile;
