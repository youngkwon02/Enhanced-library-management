import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/book-info">Book Info</Link>
        </li>
        <li>
          <Link to="/check-issue">Check Issue Info</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
