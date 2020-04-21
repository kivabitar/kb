import React from "react";


const SplitPanelItem = (props) => {
    return(
      <li className="active slide-0 jlink" data-slide="0" data-title={props.title} data-link={ props.link}>
        <div className="table-row">
            <div className="imgcont" onClick={() => { window.location = props.link }}>
                <img src={props.icon} alt={props.label} />
            </div>
            <div className="textcont">
                <a href={ props.link}>{props.label}</a>
            </div>
        </div>
      </li>
    )
}

export default SplitPanelItem;
