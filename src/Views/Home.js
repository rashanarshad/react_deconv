import React from "react";

function Home() {
  let content = (
    <div>
      <p>Welcome to Glimpse, an app to apply and understand Computer Vision.</p>
      <br></br>
      <p>
        To use, click the menu button in the top right and select between Object
        Detection, Deconvolution, and Instant Segmentation. Once you're at the
        page, position yourself or an object in front of the camera, and click
        capture. Your processed image will be displayed to the right of the
        original webcam frame.
      </p>
      <br></br>
      <h1> An overview of the project can be found at this link:</h1>
      <h1>
        <a
          href={
            "https://rashanarshad.com/glimpse-applying-and-understanding-computer-vision/"
          }
        >
          https://rashanarshad.com/glimpse-applying-and-understanding-computer-vision/
        </a>
      </h1>
      <p></p>
      <br></br>

      <p>
        The quickest results come from capturing an image at the default layer
        in the DeConvCam view. Object Detection returns results the second
        quickest.
      </p>
      <p>
        {" "}
        Note: Ive limited the number of layers you can explore on the DeConvCam
        because the deeper layers require processing power I haven't
        provisioned.
      </p>
    </div>
  );

  return (
    <div>
      <h1 className="font-bold text-2xl">Home</h1>
      {content}
    </div>
  );
}

export default Home;
