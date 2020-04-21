import React from "react";
import Form from './form.js';
import Loading from './loading.js';
import Hero from './acf/hero.js';
import Fullwidth from './acf/fullwidth.js';

function Contact(props){
    let bgover = '';
    //console.log(props);
    if(props.background_image_override ==='' || !props.background_image_override){
      const imgs = [
          'https://matthewsmarking.com/app/themes/matthewsmarking/library/images/contact_us_back_of_head_lady.jpg',
          'https://matthewsmarking.com/app/themes/matthewsmarking/library/images/contact_us_smiling_guy.jpg',
          'https://matthewsmarking.com/app/themes/matthewsmarking/library/images/contact_us_smiling_lady.jpg'
      ];
      let number = Math.floor(Math.random() * imgs.length);
      bgover = imgs[number];
    }
    else{
      bgover = props.background_image_override;
    }
    const divstyles = {
      backgroundImage:'url(' + bgover + ')'
    }
    return(
      <div className="contact-us-section " style={divstyles}>
        <div className="inner-content">
            <h1>{props.title ? props.title : "Contact Us"}</h1>
            <div className="row">
                <div className="col-md-6">
                    <Form {...props} form="18" />
                </div>
            </div>
        </div>
      </div>
    )

}

export default Contact;
