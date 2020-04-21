import React from "react";
import Form from './form.js';
import Loading from './loading.js';
import Hero from './acf/hero.js';
import Fullwidth from './acf/fullwidth.js';

function Contact(props){

    return(
      <div className="contact-us-section ">
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
