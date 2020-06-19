import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b p-3 flex justify-between item-center">
      {/* <span className="font-bold">AppName</span> */}
      <Link
        to="/"
        className="font-bold"
        // onClick={props.closeMenu}
      >
        {" "}
        AppName{" "}
      </Link>

      <Navigation />
    </header>
  );
}

export default Header;
