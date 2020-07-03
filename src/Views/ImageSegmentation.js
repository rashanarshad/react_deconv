import React, { useState } from "react";
import Cam from "../Components/Cam";
import ProcessedImage from "../Components/ProcessedImage";
import axios from "axios";

function ImageSegmentation() {
  const [capturedImage, captureImage] = useState({
    captured: false,
    img: null,
    loading: false,
    error: false,
  });

  const changeImage = (dataFromChild) => {
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
      url:
        "https://cors-anywhere.herokuapp.com/https://segment.rashanarshad.com",

      data: formData,
      config: {
        headers: {
          "Content-Type": "*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Credentials": true,
        },
      },
    })
      .then((response) => {
        console.log(response);
        captureImage({ captured: true, img: response.data, loading: false });
      })
      .catch((errors) => {
        captureImage({
          captured: false,
          img: null,
          loading: false,
          error: true,
        });
        console.log(errors);
      });
  };
  return (
    <div className="text-center flex flex-col grid ">
      <h1 className="font-bold text-2xl mb-3">Instance Image Segmentation </h1>
      <p>instance image segmentation view of live webcam</p>
      <div className="flex content-center justify-center">
        <div className="w-1/2 ">
          <Cam onCapture={changeImage} />
        </div>
        <div className="w-1/2 flex v-screen">
          <div className="m-auto ">
            <ProcessedImage
              {...capturedImage}
              original_header="The Segmented Image will load here."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSegmentation;
