import React, { useCallback, useRef } from "react";
import Webcam from "react-webcam";
// import axios from "axios";
// import { saveJobImage } from "../actions";

function Cam(props) {
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    props.onCapture(imageSrc);
  }, [webcamRef, props]);
  return (
    <div className="text-center border bg-white pt-20px mt-30px shadow-sm rounded-lg">
      <div className="bx--col-xs-12">
        <Webcam mirrored={true} width="100%" height="100%" ref={webcamRef} />
      </div>
      <div className="inline-block">
        <div className="flex flex-col content-center justify-center row-auto">
          <div
            className="bg-blue-500 text-white p-2 flex justify-center"
            onClick={capture}
          >
            Capture
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cam;
