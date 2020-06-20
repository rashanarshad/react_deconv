import React from "react";
import Cam from "../Components/Cam";

function DeConvCam() {
  return (
    <div className="text-center flex flex-col grid">
      <h1 className="font-bold text-2xl mb-3">DeConvCam</h1>
      <p>deconvulational view of live webcam</p>
      <div className="flex">
        <div className="w-1/2">
          <Cam />
        </div>
        <div className="w-1/2">
          <span> secnd img</span>
        </div>
      </div>
    </div>
  );
}

export default DeConvCam;
