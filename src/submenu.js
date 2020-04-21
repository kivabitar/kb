import React from 'react';
import HTML2React from 'html2react';

const Submenu = (props)=>{
  const left = [];
  const right = [];
  //console.log(props);
  let links= Array.from(props.links);
  let total = links.length;
  let i=0;
  links.map(function(a){
    //console.log(a);
    if(i <= Math.round(Math.floor(total/2))){
      left.push(<a href={a.link} key={i} className="mega-menu-link">{a.name}</a>)
    }else{
      right.push(<a href={a.link} key={i} className="mega-menu-link">{a.name}</a>)
    }
    i++;
  });
  return(
    <div className="sub-menu">
          <div className="grid-6">
              {left}
          </div>
          <div className="grid-6 border-left">
              {right}
          </div>
    </div>
  )
}
export default Submenu;
