import React from "react";
import Photo from './photo.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Photos(props){


  //const [photos] = props.photos;
  //console.log(props.photos);
  const images = Array.from(props.photos);
//  console.log(props.photos)

  let pics = []

  //console.log(props)
  let i=0;

  images.map(a=>{
    pics.push(<Photo pic={a.photo} alt={a.alternate_text_optional} key={i} />);
    i++;
    return true;
  })
  const steez = {
    height: "400px"
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    adaptiveHeight: false,
    variableWidth:true
  };

  return (
    <div className="gallery">
      <div className="inner-content" style={steez}>
        {props.title ? <h1>props.title</h1>: ''}
        <div className="row" style={steez}>

            <Slider {...settings}>
              {pics}
            </Slider>

        </div>
      </div>
    </div>
  );
};

export default Photos;
