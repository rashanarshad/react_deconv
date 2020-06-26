import React, { useState } from "react";
import FormData from "form-data";
import axios from "axios";
import Loader from "../Components/Loader";

function DeConvImg(props) {
  let content = <h1 className="font-bold"> the deconvd img will go here</h1>;
  console.log(props);
  if (props.loading) {
    content = <Loader></Loader>;
    // content = <h1 className="font-bold"> loading</h1>;
  }

  if (!props.loading && props.img != null) {
    content = <img src={props.img} className="object-center" />;
    // setSrc(<img src={props.img.img} />);
    // content = <h1 className="font-bold"> deconved</h1>;
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
  }
  return content;
}

export default DeConvImg;
