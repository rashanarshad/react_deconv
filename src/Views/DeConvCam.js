import React, { useState } from "react";
import Cam from "../Components/Cam";
import ProcessedImage from "../Components/ProcessedImage";
import axios from "axios";

function DeConvCam() {
  const [layer_list] = useState([
    "block1_conv1",
    "block1_conv2",
    "block1_pool",
    "block2_conv1",
    "block2_conv2",
    "block2_pool",
    "block3_conv1",
    "block3_conv2",
    "block3_conv3",
    "block3_pool",
    "block4_conv1",
    "block4_conv2",
    "block4_conv3",
    "block4_pool",
    "block5_conv1",
    "block5_conv2",
    "block5_conv3",
    "block5_pool",
    "flatten",
    "fc1",
    "fc2",
    "predictions",
  ]);

  const [selectedLayer, selectLayer] = useState("block1_conv1");
  const handleChange = (e) => {
    console.log(e.target.value);
    selectLayer(e.target.value);
  };
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
    let file = dataFromChild;
    const formData = new FormData();
    formData.append("file", file);
    console.log(selectedLayer);
    formData.append("layer", selectedLayer);
    axios({
      method: "post",
      url: "http://54.162.45.59:80",
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
        console.log(selectedLayer);
      })
      .catch((errors) => console.log(errors));
  };
  return (
    <div className="text-center flex flex-col grid">
      <h1 className="font-bold text-2xl mb-3">DeConvCam</h1>
      <div>
        <span className="inline-block">
          <p>deconvulational view of live webcam </p>
          <select
            value={layer_list.find((obj) => obj === selectedLayer)}
            onChange={handleChange}
          >
            {layer_list.map((layer) => (
              <option key={layer} value={layer}>
                {layer}
              </option>
            ))}
          </select>
        </span>
      </div>

      <div className="flex">
        <div className="w-1/2">
          <Cam onCapture={changeImage} />
        </div>
        <div className="w-1/2 flex v-screen">
          <div className="m-auto ">
            <ProcessedImage
              {...capturedImage}
              original_header="The DeConv'd Image will load here."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeConvCam;
