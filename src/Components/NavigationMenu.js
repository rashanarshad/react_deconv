import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu(props) {
  return (
    <div>
      <div className="font-bold">the menu</div>
      <ul>
        <li>
          <Link
            to="/"
            className="text-blue-500 py-3 border-t border-b block"
            onClick={props.closeMenu}
          >
            {" "}
            Home{" "}
          </Link>
        </li>
        <li>
          <Link
            to="/deconvcam"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            {" "}
            DeConvCam{" "}
          </Link>
        </li>
        <li>
          <Link
            to="/objectdetect"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            {" "}
            Object Detection{" "}
          </Link>
        </li>
        <li>
          <Link
            to="/imagesegmentation"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            {" "}
            Image Segmentation{" "}
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            {" "}
            About{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
