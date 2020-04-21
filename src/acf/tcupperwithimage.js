import React from 'react';
import HTML2React from 'html2react';

const UpperWithImage = (props)=>{
  const divstyle = {backgroundImage:'url(' + props.top_image + ')'};
  return(
    <>
    <div className="col-md-8 highlight-rightpad">

      <h1 className="highlight-title">{HTML2React(props.highlight_title)}</h1>
      <div className="short-dash"> </div>
      <div className="top-text">{HTML2React(props.value_prop)}</div>
    </div>

    <div className="col-md-4">
      {props.top_image ? <div className="imgcont" style={divstyle} alt={HTML2React(props.highlight_title)}></div> : ''}
      <span className="highlight-caption">{HTML2React(props.top_image_caption)}</span>

    </div>
    </>
  )
}
export default UpperWithImage
