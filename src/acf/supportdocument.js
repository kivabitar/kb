import React from "react";


const Supportdocument = (props) => {
  return(
    <div className="doc-tile" data-link={props.document_link}>
      <div className="doc-icon">
          <a href={props.document_link} title={props.document_title}>
          <img src={'https://staging.matthewsmarking.com/app/themes/matthewsmarking/library/images/' + props.document_icon + '-icon.png'} alt={props.document_title} className="icon" /></a>
      </div>
      <div className="doc-details">
          <a href={props.document_link} title={props.document_title} className="doc-title">{props.document_title}</a>
          <div className="summary">
              <p>{props.document_title}</p>
          </div>
      </div>
      <a className="lm" href={props.document_link}>Go</a>

      </div>
  )
}
export default Supportdocument;
