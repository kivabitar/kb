import React from 'react';
import HTML2React from 'html2react';

const UpperWithOutImage = (props)=>{
  return(
    <>
      {props.value_prop ? <p className="value-prop">{HTML2React(props.value_prop)}</p>: ''}
      {props.highlight_title ? <h1 className="highlight-title">{HTML2React(props.highlight_title)}</h1> : ''}
      {props.highlight_title ? <div className="short-dash"> </div> :''}
    </>
  )
}
export default UpperWithOutImage
