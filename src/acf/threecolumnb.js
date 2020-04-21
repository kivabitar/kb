import React from 'react';
import HTML2React from 'html2react'

function ThreeColumnb(props){

  const newH = {
    minHeight: '450px',
    backgroundColor: 'rgba(224,225,221,0.25) !important'
  }
  const bg1 = {
    backgroundImage: "url(https://matthewsmarking.com/app/themes/matthewsmarking/library/images/pattern.png)"
  }
  const bg2 = {
    backgroundImage: "url(https://matthewsmarking.com/app/themes/matthewsmarking/library/images/pattern-left.png)"
  }
  const bg3 = {
    backgroundImage: ""
  }
  return (
    <div className="highlight-three lightgray-fade" style={newH}>

            <div className="highlight-overlay" style={bg1}></div>
            <div className="highlight-overlayb" style={bg2}></div>
            <div className="highlight-overlayc" style={bg3}></div>
            <div className="inner-content">
            <div className="row extra-top-pad">
            {props.value_prop ? <div className="value-prop">{HTML2React(props.value_prop)}</div> : ''}
            <span></span>

            { ! props.highlight_title ? '' : <h1 className="highlight-title">{props.highlight_title}</h1>}
            {props.highlight_title ? <div class="short-dash"> </div> : ''}
                    <div className="col-lg-4 highlight-col">
                        <div className="col-xs-2">
                            <div className="highlightnum">1</div>
                        </div>
                        <div className="col-xs-10">
                            <div className="highlight-col-title">
                                {props.column_1_title}
                            </div>
                            <div className="highlight-col-text">
                                {HTML2React(props.column_1_text)}
                                <a href={props.column_1_link}>{HTML2React(props.column_1_link_text)}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 highlight-col">
                        <div className="col-xs-2">
                            <div className="highlightnum">2</div>
                        </div>
                        <div className="col-xs-10">
                            <div className="highlight-col-title">
                                {HTML2React(props.column_2_title)}
                            </div>
                            <div className="highlight-col-text">
                              {HTML2React(props.column_2_text)}
                              <a href={props.column_2_link}>{HTML2React(props.column_2_link_text)}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 highlight-col">
                        <div className="col-xs-2">
                            <div className="highlightnum">3</div>
                        </div>
                        <div className="col-xs-10">
                            <div className="highlight-col-title">
                                {HTML2React(props.column_3_title)}
                            </div>
                            <div className="highlight-col-text">
                              {HTML2React(props.column_3_text)}
                              <a href={props.column_3_link}>{HTML2React(props.column_3_link_text)}</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
  );
};

export default ThreeColumnb;
