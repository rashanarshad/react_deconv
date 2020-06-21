import React, { useState } from "react";
import FormData from "form-data";
import axios from "axios";

function DeConvImg(props) {
  // const [src, setSrc] = useState("");
  let content = <h1 className="font-bold"> the deconvd img will go here</h1>;
  console.log(props);
  if (props.img) {
    content = <img src={props.img.img} />;
    // let file = props.img.img;
    // const formData = new FormData();
    // formData.append("file", file);
    // axios({
    //   method: "post",
    //   url: "http://127.0.0.1:8000/",
    //   data: formData,
    //   config: {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //       "Access-Control-Allow-Origin": "*",
    //       "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
    //       "Access-Control-Allow-Headers": "Content-Type",
    //       "Access-Control-Allow-Credentials": true,
    //     },
    //   },
    // })
    //   .then((response) => {
    //     setSrc(response);
    //   })
    //   .catch((errors) => console.log(errors));
  } else {
    content = <h1 className="font-bold"> the deconvd img will go here</h1>;
  }
  return <div>{content}</div>;
}

export default DeConvImg;
