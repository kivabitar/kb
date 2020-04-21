import React from "react";
import HTML2React from "html2react";


const Infocolumn =(props)=>{


    return(

      <div className="col-sm-6 info-column">
          <h4>{HTML2React(props.column_title)}</h4>
          <div className="lightgray-fade">
            {HTML2React(props.column_content)}
          </div>
          <div className="secondary-light-gray">
              {HTML2React(props.column_quicklinks)}
          </div>
      </div>

    )
}

export default Infocolumn;
