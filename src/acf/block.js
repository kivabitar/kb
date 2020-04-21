import React from "react";
import HTML2React from 'html2react';




const Block = (props)=>{
  //console.log(props);
  let blocks = [];
  let style= {
    backgroundImage: 'url('+ props.image + ")"
  }
  let i = 0;
  if(props.number ==0){
    //console.log(props)
    blocks.push(
      <div className="fullrow" key={i}>
        <div className="grid-6 repair-detail-block">

            <h2>{props.block_title}</h2>
            <div className="sub">
              {HTML2React(props.block_sub_title)}
            </div>
            <div className="short-dash"></div>
            <div className="full">
                {HTML2React(props.block_content)}
            </div>
            <a className="maplink" href={props.block_link}>{props.block_link_text}</a>

        </div>
        <div className="grid-6 repair-block" style={style}  >
        </div>
      </div>

    )
    i++;
  }else{
    blocks.push(
      <div className="fullrow" key={i}>
        <div className="grid-6 repair-block" style={style}>
        </div>
        <div className="grid-6 repair-detail-block">

              <h2>{props.block_title}</h2>
              <div className="sub">
                {HTML2React(props.block_sub_title)}
              </div>
              <div className="short-dash"></div>
              <div className="full">
                  {HTML2React(props.block_content)}
              </div>
              <a className="maplink" href={props.block_link}>{props.block_link_text}</a>

          </div>
      </div>
    )
    i++;
  }

  return(
    <>
      {blocks}
    </>
  )

}
export default Block;
