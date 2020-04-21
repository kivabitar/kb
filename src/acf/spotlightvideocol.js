import React from 'react';
import HTML2React from 'html2react';

const Spotlightvideocol = (props) => {

    let styles = {
      backgroundImage: 'url('+props.spotlight_image+")"
    }
  return(
      <div className="col-md-4 spotlight" data-count={props.number} id={"vid"+props.number} style={styles}  data-embed={props.spotlight_video} data-title={HTML2React(props.spotlight_title)} onClick={props.handle}>
          <div className="hoverlay">
            <img src="https://staging.matthewsmarking.com/app/themes/matthewsmarking/library/images/play_button_orange.png" className="sofa-king" alt="Play Button" />
          </div>
          <div className="overlay"><div className="cont">Now Playing</div></div>
          <div className="spotlight-upper">
              {HTML2React(props.spotlight_title)}
          </div>
          <div className="desc">
              {HTML2React(props.brief_description)}
          </div>
          <div className="spotlight-lower">
               <a href='#'>Go</a>
          </div>

      </div>

  )
}

export default Spotlightvideocol;
