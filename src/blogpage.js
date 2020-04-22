import React from "react";
import HTML2React from 'html2react';


const Blogpage = (props) =>{
  //console.log(props)
  const style={
    margin:'150px 0 0 0'
  }
  const mb = {
    marginBottom:'0px'
  }
  let text = props.excerpt.rendered;
  let e = props.date.split('T');
  let f = e[0].split('-');
  let d = f[1] + '/' + f[2] + '/' + f[0];
  return(
    <section className="full-with-container " style={style}>
        <div className="row">
            <h1 style={mb}><a href={'/blog/' + props.slug}>{HTML2React(props.title.rendered)}</a></h1>
            <span className="small">posted {d}</span>
            <div className="short-dash"></div>
            <div className="inner-content">
                {HTML2React(props.content.rendered)}
            </div>
        </div>
    </section>
  )
}

export default Blogpage;
