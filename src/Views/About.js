import React from "react";

function About() {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">About</h1>
      <p>Check out the blog/project overview here:</p>
      <h1>
        <a
          href={
            "https://rashanarshad.com/glimpse-applying-and-understanding-computer-vision/"
          }
        >
          https://rashanarshad.com/glimpse-applying-and-understanding-computer-vision/
        </a>
      </h1>
    </div>
  );
}

export default About;
