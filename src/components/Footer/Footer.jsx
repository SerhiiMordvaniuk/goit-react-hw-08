import React from "react";
import s from "./Footer.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container">
      <div className={s.footer}>
        <ul className={s.soc_list}>
          <li>
            <a href="https://github.com/SerhiiMordvaniuk">
              <FaGithub color="var(--text-color)" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/serhii-mordvaniuk/">
              <FaLinkedinIn color="var(--text-color)" />
            </a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
        <p className={s.copi}>All Right Reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
