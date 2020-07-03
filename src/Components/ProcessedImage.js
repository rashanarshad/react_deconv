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

  if (props.error) {
    content = (
      <div>
        <h1>
          Sorry, there was an error. Please wait a few minutes and try again, or
          try a different mode in the meantime.
        </h1>
      </div>
    );
  }
  return content;
}

export default ProcessedImage;
