import React from "react";
import Contentcheck from './contentcheck.js';
import {useParams,withRouter} from "react-router-dom";

const Fourohfour = (props)=>{
  const {page} = useParams();
  const style={
    margin: '0px 0 0 0'
  }
  return(
    <>
      <Contentcheck slug={page} key="98080" />
    </>
  )
}

export default Fourohfour;
