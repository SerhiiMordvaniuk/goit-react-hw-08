import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import s from "./UserMenu.module.css";
import clsx from "clsx";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/authOperations";
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
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>

        {isLoggedIn ? (
          <>
            <NavLink to="/contacts" className={buildLinkClass}>
              Contacts
            </NavLink>
            <div className={s.user}>
              <p className={s.name}>{user.name}</p>
              <button onClick={handleClick} className={s.btn}>
                <IoIosLogOut size="20px" color="var(--primary-color)" />
              </button>
            </div>
          </>
        ) : (
          <div className={s.login_register}>
            <NavLink to="/login" className={buildLinkClass}>
              Log in
            </NavLink>
            <NavLink to="/register" className={buildLinkClass}>
              Register
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default UserMenu;
