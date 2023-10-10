import "./Nav.css";
import React from "react";

export default function Nav() {
  return (
    <>
      <div>
        <nav>
          <div className="barra">
            <div className="logo">
              <span>sunnyside </span>
            </div>
            <div className="rigth">
              <span>About</span>
              <span>Service</span>
              <span>Proyects</span>
              <span>Contact</span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
