import React from 'react';
import Cases from '../acf/cases.js';


const Casestudies = (props)=>{
  const tiles =[];
  const apps = props.cases;
  let i=0;
  apps.map(a=>{
    tiles.push(<Cases {...a} key={i} />);
    i++;
    return true;
  });
  return(
    <div className="case-studies">
        <div className="inner-content">

            <h1>{props.section_title}</h1>
            <div className="short-dash"></div>


            <div className="row margin-top-big">
                <div className="apps">
                  {tiles}

                </div>
            </div>
        </div>
    </div>
  )
}
export default Casestudies;
