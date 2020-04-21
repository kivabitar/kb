import React from "react";
import {link} from "react-router-dom"

const Link = ({
  state,
  actions,
  link,
  className,
  children,
  "aria-current": ariaCurrent
}) => {
  const onClick = event => {
    return true;
  };

  return (
    <a
      href={link}
      onClick={onClick}
      className={className}
      aria-current={ariaCurrent}
    >
      {children}
    </a>
  );
};

export default Link;
