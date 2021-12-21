import React from "react";
import { FaBlackberry } from "react-icons/fa";
function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
    >
      {children}
    </div>
  );
}
export default Jumbotron;