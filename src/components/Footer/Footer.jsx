import React from "react";
import s from "./Footer.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <ul className={s.soc_list}>
          <li>
            <a href="https://github.com/SerhiiMordvaniuk">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/serhii-mordvaniuk/">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
