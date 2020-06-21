import React, { useState } from "react";
import Cam from "../Components/Cam";
import DeConvImg from "../Components/DeConvImg";
import axios from "axios";

function DeConvCam() {
  const [capturedImage, captureImage] = useState({
    captured: false,
    img: null,
  });

  const changeImage = (dataFromChild) => {
    // captureImage({ captured: true, img: dataFromChild });
    console.log("captured");
    let file = dataFromChild;
    const formData = new FormData();
    formData.append("file", file);
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/",
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
        captureImage({ captured: true, img: response.data });
      })
      .catch((errors) => console.log(errors));
  };
  return (
    <div className="text-center flex flex-col grid">
      <h1 className="font-bold text-2xl mb-3">DeConvCam</h1>
      <p>deconvulational view of live webcam</p>
      <div className="flex">
        <div className="w-1/2">
          <Cam onCapture={changeImage} />
        </div>
        <div className="w-1/2">
          <DeConvImg img={capturedImage} />
        </div>
      </div>
    </div>
  );
}

export default DeConvCam;
