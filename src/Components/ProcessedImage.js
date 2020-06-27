import React from "react";
import Loader from "./Loader";

function ProcessedImage(props) {
  let content = <h1 className="font-bold"> {props.original_header}</h1>;
  console.log(props);
  if (props.loading) {
    content = <Loader></Loader>;
  }

  if (!props.loading && props.img != null) {
    content = <img src={props.img} alt="" />;
  }
  return content;
}

export default ProcessedImage;
