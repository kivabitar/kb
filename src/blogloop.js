import React from "react";
import HTML2React from 'html2react';


const Blogloop = (props) =>{
  console.log(props)
  let text = props.excerpt.rendered;
  let e = props.date.split('T');
  let f = e[0].split('-');
  let d = f[1] + '/' + f[2] + '/' + f[0];
  console.log(d);
  const mb = {
    marginBottom:'0px'
  }
  return(
    <div className="full-width-container">
        <div className="inner-content">

            <h3 style={mb}><a href={'/blog/' + props.slug}>{HTML2React(props.title.rendered)}</a></h3>
            <span className="small">posted {d}</span>
            <div className="short-dash"></div>
            <div className="inner-content">



                        {HTML2React(text)}


            </div>
        </div>
    </div>
  )
}

export default Blogloop;
