import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import s from "./UserMenu.module.css";
import clsx from "clsx";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/authOperations";

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
    <div className={s.header}>
      <nav className={s.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>

        {isLoggedIn ? (
          <>
            <NavLink to="/contacts" className={buildLinkClass}>
              Contacts
            </NavLink>
            <button onClick={handleClick}>Log Out</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={buildLinkClass}>
              Log in
            </NavLink>
            <NavLink to="/register" className={buildLinkClass}>
              Register
            </NavLink>
          </>
        )}
      </nav>
      {isLoggedIn && <p>Hello {user.name}</p>}
    </div>
  );
};

export default UserMenu;
