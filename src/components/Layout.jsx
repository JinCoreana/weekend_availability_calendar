import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="full_container">
      <div className="visual">
        <ul className="vis-images">
          <li className="on">1</li>
        </ul>
      </div>
      <div className="text">
        <h1>Jin's Availability </h1>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
