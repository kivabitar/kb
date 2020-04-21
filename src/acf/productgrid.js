import React from "react";
import HTML2React from 'html2react';
import ProductGridTile from './productgridtile.js';


const ProductGrid = (props) =>{
  const prods = [];
  let i=0;
  //console.log(props)
  props.product_grid.map(a=>{
      //console.log(a);
      prods.push(<ProductGridTile {...a} key={i} />);
      i++;
      return true;
  });
  return(
    <div className="product-grid solution-prods">
        <div className="inner-content">
            <h1>{HTML2React(props.title)}</h1>
            <div className="short-dash"></div>
            <div className="row">
                <div className="slidera">

                        {prods}

                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductGrid;
