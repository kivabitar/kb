import React from 'react';
import HTML2React from 'html2react';

const Testimonialrow = (props) => {
  let i = props.number;
  return(
    <div className={props.number == 0 ? "active-test col-sm-12 testimonial  t-" + i : "col-sm-12 testimonial  t-" + i } id={"sliz" + props.number}>
        <div className="col-sm-9 quote">
          <blockquote>{HTML2React(props.customer_quote)}</blockquote>
        </div>
        <div className="col-sm-3 c-info">
          <div className="image" >
            <img src={props.image} alt="" />
          </div>
          <div className="customer-creds">
            <span className="name">{props.customer_name}</span><br />
            <span className="title"></span>
          </div>
      </div>
    </div>
  )
}
export default Testimonialrow;
