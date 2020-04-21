import React from "react";
import HTML2React from 'html2react';


const Page = (props) =>{
  console.log(props)
  const style={
    margin:'150px 0 0 0'
  }
  return(
    <div className="full-with-container " style={style}>
        <div className="inner-content">

            <h1><a href={props.slug}>{props.title.rendered}</a></h1>
            <div className="short-dash"></div>
            <div className="inner-content">

                {HTML2React(props.content.rendered)}

            </div>
        </div>
    </div>
  )
}

export default Page;
