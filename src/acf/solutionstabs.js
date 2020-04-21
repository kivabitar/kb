import React from "react";

const Solutionstabs = (props) => {
  return(
      <div className="solution-prod">
          <div className="prod-inner">

              <a href={props.product_link}>{props.product_name}</a>

          </div>
      </div>

  )
}
export default Solutionstabs;
