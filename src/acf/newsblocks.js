import React from "react";
import HTML2React from "html2react";


const Newsblock = (props) => {
  const colorfield = props.background_color;
  let color = '';
  if(colorfield == 'Primary Green'){
      color = 'primary-green';
  }else if(colorfield == 'Primary Gray'){
      color = 'primary-gray';
  }else if(colorfield == 'Secondary Orange'){
      color = 'secondary-orange';
  }else if(colorfield == 'Secondary Blue Green'){
      color = 'secondary-blue-green';
  }else if(colorfield == 'Secondary Light Blue'){
      color = 'secondary-light-blue';
  }else if(colorfield == 'Secondary Light Gray'){
      color = 'secondary-light-gray';
  }else if(colorfield == 'Secondary Navy'){
      color = 'secondary-navy';
  }else if(colorfield == 'Secondary Dark Gray'){
      color = 'secondary-dark-gray';
  }
  const styles ={
    backgroundImage:'url(' + props.background_image + ')'
  }
  return(


            <div className={props.block_type + '-tile '+ color  } style={styles} data-link={props.background_link} onClick={()=>window.location=props.background_link}>
                <div className="hoverlay"><a href={props.background_link}>Learn More</a></div>

                {props.add_overlay ? <div className="overlay"></div> : ''}

                { props.title ? <div className="top-title"><a href={props.title_link}>{props.title}</a></div> : null}

                {props.bottom_text ? <div className="bottom-title"><a href={props.bottom_text_link}>{props.bottom_text}</a></div> : "" }
            </div>


  )
}
export default Newsblock;
