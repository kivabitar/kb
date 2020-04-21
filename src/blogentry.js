import React from "react"
import {useParams,withRouter} from "react-router-dom";
import Blogentrycontent from './blogentrycontent.js';

const Blogentry = (props)=>{
    const {slug} = useParams();



    return(
      <Blogentrycontent slug={slug} />
    )
}

export default withRouter(Blogentry);
