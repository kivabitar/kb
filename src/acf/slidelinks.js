import React from 'react';


//todo : work out state or js way of tracking active slides?

class Slidelink extends React.Component{

  render(){
    return(
      <li className={this.props.active === "true" ? "active" : '' +" slide-"+this.props.count} data-slide="0" data-title={this.props.title} data-link={this.props.link}>
        <div className="table-row">
            <div className="imgcont" >
                <img src={this.props.icon} alt="" data={this.props.count}  onClick={this.props.handleClick}/>
            </div>
            <div className="textcont"><a href={ this.props.link}>{this.props.title}</a></div>
        </div>
      </li>
    )
  }
}

export default Slidelink;
