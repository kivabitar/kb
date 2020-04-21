import React from "react";


export function mm(component){
  const C = component
  return function(props) {
      return (
          <C {...props} />
      )
  }
}
