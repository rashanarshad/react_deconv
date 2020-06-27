import React from "react";

function Home() {
  let content = (
    <div>
      <p>Welcome to Glimpse, an app to apply and understand Computer Vision.</p>
      <p>
        To use, click the menu button in the top right and select between Object
        Detection, Deconvolution, and Instant Segmentation.
      </p>
      <p></p>
      <p>Object Detection returns results the quickest.</p>
    </div>
  );

  return (
    <div>
      <h1 className="font-bold text-2xl">GlimpseAI</h1>
      {content}
    </div>
  );
}

export default Home;
