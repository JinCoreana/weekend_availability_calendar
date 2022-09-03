import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="visual">
        <ul className="vis-images">
          <li className="on">1</li>
        </ul>
      </div>
      <div className="text ani y_Bottom">
        <h1>Jin's Availability </h1>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
