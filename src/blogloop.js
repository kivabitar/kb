import React from "react";
import HTML2React from 'html2react';


const Blogloop = (props) =>{
  console.log(props)
  return(
    <div className="full-with-container">
        <div className="inner-content">

            <h1><a href={'/blog/' + props.slug}>{props.title.rendered}</a></h1>
            <div className="short-dash"></div>
            <div className="inner-content">



                        {HTML2React(props.excerpt.rendered)}


            </div>
        </div>
    </div>
  )
}

export default Blogloop;
