
    import React from "react";
    import HTML2React from 'html2react'

    function Photo(props){
      //console.log(props);
      const steez = {
        height: "400px",
        marginRight:'16px'
      }
      return (
        <div className="vphoto" aria-hidden="false" style={steez}>
            <div className="vphoto-cont" style={steez}>
              <a className="fancy" rel="gallery" data-fancybox="gallery" href={props.pic}>
                <img src={props.pic} className="sizeit" alt={props.alternate_text_optional ? HTML2React(props.alternate_text_optional) : props.pic} style={steez} />
              </a>
            </div>
        </div>
      );
    };

    export default Photo;
