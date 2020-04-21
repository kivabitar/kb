import React from 'react';
import MetaTags from 'react-meta-tags';
import HTML2React from 'html2react';
import {useParams,withRouter} from "react-router-dom";

const Head = (props,state) => {
  const {slug} = useParams();
  return(
    <>
      <MetaTags>
        <link rel="icon" id="favicon" href={(props.favicon ? props.favicon : 'favicon.png')} />

        <title>{props.title ? HTML2React(props.title) : "kivab.com"}{slug ? '|' + slug : ""}</title>
        <meta id="meta-description" name="description" content={props.description ? props.description : "Web Developer with over 20 years experience"} />

        <meta id="og-title" property="og:title" content={props.title ? props.title : "kivab.com"} />
        <meta id="og-description" property="og:description" content={props.description ? props.description : "Web Developer with over 20 years experience"} />
        <meta id="og-image" property="og:image" content={(props.image ? props.image : 'favicon.png')} />

      </MetaTags>
    </>
  )
}

export default Head;
