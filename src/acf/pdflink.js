import React from 'react';

const Pdflink = (props) => {
  return(
    <div className="grid-6 align-right">
        <div className="pdflink">
            <a href={props.pdf} className="orange button" download>Download PDF</a>
        </div>
    </div>
  )
}
export default Pdflink;
