import React from "react";
import s from "./NotFound.module.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="container">
      <div className={s.notfound}>
        <p className={s.txt}>Page not found...</p>
        <Link to="/" className={s.home}>
          Go to Home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
