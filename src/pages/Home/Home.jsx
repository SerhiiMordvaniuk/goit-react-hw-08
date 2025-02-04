import React from "react";
import s from "./Home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container">
      <div className={s.hero}>
        <div className={s.info}>
          <h1 className={s.title}>Better app for your contacts</h1>
          <p className={s.text}>Save. Edit. Delete. </p>
        </div>
        <div className={s.link}>
          <Link to="/contacts">Go to contacts</Link>
        </div>
        <img src="/public/phone.png" alt="phone" />
      </div>
    </div>
  );
};

export default Home;
