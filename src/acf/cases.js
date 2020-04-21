
    import React from "react";
    import HTML2React from 'html2react'

    function Cases(props){
      //console.log(props);
      const style = {
        backgroundImage: 'url('+ props.background_image +')'
      }
      return (
        <div className="row">
            <div className="case-study-bg" style={style} data-link="https://staging.matthewsmarking.com/app/uploads/2019/08/MMS_RubberCapabilitiesBrochure_US_2019-PRESS.pdf">
            </div>
            <div className="case-study-text">
                <h2>{props.title}</h2>
                <div className="short-dash"> </div>
                <div className="case-lower">
                  {HTML2React(props.case_text)}
                </div>
                <a href={props.link} className="cs-link" download="">{props.link_text ? props.link_text : "Go"}</a>
            </div>
        </div>
      );
    };

    export default Cases;
