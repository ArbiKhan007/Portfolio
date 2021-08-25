import React from "react";
import { Link } from "react-router-dom";

function SectionLink(props) {
  return (
    <Link className="section-link" to={props.to}>
      {props.toAdd}
    </Link>
  );
}

export default SectionLink;
