import React from 'react';
import HTML2React from 'html2react'

function Prodcolumn(props){

  //console.log(props);
  return (
    <div className="row white">

        <div className="col-sm-4 prod-col" >
            <img src={props.background_image['sizes']['medium']} alt={props.title} />
        </div>
        <div className="col-sm-8 ">
            <div className="prod-tit">
                <h3>{HTML2React(props.title)}</h3>
                <div className="short-dash"> </div>
            </div>
            <div className="col-md-6 nm">
                {HTML2React(props.text)}
            </div>
            <div className="col-md-6 bullets">
                {HTML2React(props.bullets)}
            </div>
        </div>

    </div>
  );
};

export default Prodcolumn;
