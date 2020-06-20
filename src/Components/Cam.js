import React from "react";
import Webcam from "react-webcam";
// import { saveJobImage } from "../actions";
// const WebcamComponent = () => <Webcam />;

function Cam() {
  return (
    <div className="text-center border bg-white pt-20px mt-30px shadow-sm rounded-lg">
      <div className="bx--col-xs-12">
        <Webcam width="100%" height="100%" />
      </div>
      <div className="inline-block">
        <div className="flex flex-col content-center justify-center row-auto">
          <div className="bg-blue-500 text-white p-2 flex justify-center">
            Capture
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cam;
