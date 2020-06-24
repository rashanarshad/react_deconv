import React, { useState } from "react";
import Cam from "../Components/Cam";
import DeConvImg from "../Components/DeConvImg";
import axios from "axios";

function DeConvCam() {
  const [capturedImage, captureImage] = useState({
    captured: false,
    img: null,
    loading: false,
  });

  const changeImage = (dataFromChild) => {
    // captureImage({ captured: true, img: dataFromChild });
    captureImage({
      captured: false,
      img: null,
      loading: true,
    });
    console.log("captured");
    let file = dataFromChild;
    const formData = new FormData();
    formData.append("file", file);
    axios({
      method: "post",
      url: "https://cors-anywhere.herokuapp.com/" + "http://54.242.3.165:80",
      data: formData,
      config: {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Credentials": true,
        },
      },
    })
      .then((response) => {
        // console.log(response);
        captureImage({ captured: true, img: response.data, loading: false });
      })
      .catch((errors) => console.log(errors));
  };
  return (
    <div className="text-center flex flex-col grid">
      <h1 className="font-bold text-2xl mb-3">Object Detection</h1>
      <p>object detection view of live webcam</p>
      <div className="flex">
        <div className="w-1/2">
          <Cam onCapture={changeImage} />
        </div>
        <div className="w-1/2">
          <DeConvImg {...capturedImage} />
        </div>
      </div>
    </div>
  );
}

export default DeConvCam;
