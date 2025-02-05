import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import s from "./UserMenu.module.css";
import clsx from "clsx";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import { IoIosLogOut } from "react-icons/io";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const UserMenu = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispath = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispath(logoutThunk()).unwrap().then(navigate("/"));
  };

  return (
    <header className="container">
      <nav className={s.nav}>
        {isLoggedIn ? (
          <>
            <div className={s.home}>
              <NavLink to="/" className={buildLinkClass}>
                Home
              </NavLink>
              <NavLink to="/contacts" className={buildLinkClass}>
                Contacts
              </NavLink>
            </div>
            <div className={s.user}>
              <p className={s.name}>{user.name}</p>
              <button onClick={handleClick} className={s.btn}>
                <IoIosLogOut size="25px" color="var(--primary-color)" />
              </button>
            </div>
          </>
        ) : (
          <>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
            <div className={s.login_register}>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default UserMenu;
