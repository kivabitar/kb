import React from "react";
import HTML2React from 'html2react'

const Iconlist = (props)=>{
  //console.log(props);
  const icons = [];
  props.icon_rows.map((a,i)=>{
    icons.push(
      <div className="icon-rows" key={i}>
            <div className="icon">
                <img src={a.icon} alt={a.item_title} />
            </div>
            <div className="deets">
                <h3>{a.item_title}</h3>
                <div className="item-details">
                    {HTML2React(a.item_detail)}
                </div>
            </div>
        </div>
    )
  });
  return (
    <div  className="icon-list" >
      <div className="inner-content">
        <h1>{HTML2React(props.title)}</h1>
        <div className="short-dash" />
        {HTML2React(props.intro_paragraph)}
        {icons}
      </div>
    </div>
  );
};

export default Iconlist;
