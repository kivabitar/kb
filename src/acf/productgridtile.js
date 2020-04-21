import React from "react";
import HTML2React from 'html2react';


const ProductGridTile = (props) =>{

  return(
    <div className="prods col-md-4">
      <div className="tile Products" onClick={()=>window.location = props.product_link}>
          <div className="overlay"></div>
          <img src={props.product_image} className="absolute-full" alt={props.tile_title ? HTML2React(props.tile_title) : HTML2React(props.product_title)} />

          <div className="tile-upper">
              { props.tile_title ? HTML2React(props.tile_title) : HTML2React(props.product_title) }

              <div className="tile-over">
                  <div className="short-dash"></div>
                  {HTML2React(props.hover_details)}

              </div>
          </div>


          <div className="tile-lower">
              <div className="title">

              </div>
              <a href={props.product_link}>{HTML2React(props.product_link_text)}</a>
          </div>

      </div>
    </div>
  )
}

export default ProductGridTile;
