import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h1>Error Page</h1>
      <li>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </li>
    </div>
  );
};

export default Error;
