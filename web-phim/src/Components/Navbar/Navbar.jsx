import React, { useContext, useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RiMoonFill } from "react-icons/ri";
import { SNavigation } from "./StyleNav";
import { BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  const refButton = useRef();
  const refCircle = useRef();
  const refToggle = useRef();
  const [isLight, setIsLight] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogIn = () => {
    localStorage.removeItem("currentUser");
  };

  useEffect(() => {
    const findUser = localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : null;

    setUser(findUser);
  }, []);

  const handleToggle = () => {
    refButton.current.checked = !refButton.current.checked;
    setIsLight(refButton.current.checked);
    themeContext.toggleTheme();
  };

  useEffect(() => {
    const changeBackgroundButton = () => {
      if (isLight) {
        refCircle.current.style.background = "#fff";
        refToggle.current.style.background = "#74cdf0";
      } else {
        refCircle.current.style.background = "#222";
        refToggle.current.style.background = "#fff";
      }
    };
    changeBackgroundButton();
  }, [isLight]);

  return (
    <SNavigation>
      <div className={`navContainer ${themeContext.theme}`}>
        <div className="navLeft">
          <div className="logo">
            <Link to="../">
              <img src="/images/navbar.jpg" alt="navbar" />
            </Link>
          </div>
          <div className="navSearch">
            <BsSearch className="iconSearch" />
            <input type="text" placeholder=" Nhập tên phim!!!" />
          </div>
        </div>
        <div className="navRight">
          {user && <button className="nameID">Hello {user.username}</button>}
          <div className="sign-in-up">
            {user ? (
              <Link to="sign-in" className="log-out" onClick={handleLogIn}>
                Đăng xuất
              </Link>
            ) : (
              <>
                <Link to="sign-in" className="sign-in">
                  Đăng nhập
                </Link>
                <Link to="sign-up" className="sign-up">
                  Đăng ký
                </Link>
              </>
            )}
          </div>
          <div className="toggleButton" ref={refToggle} onClick={handleToggle}>
            <input type="checkbox" className="checkboxButton" ref={refButton} />
            <div className="iconButton">
              {isLight ? (
                <RiMoonFill style={{ color: "black" }} />
              ) : (
                <BsFillSunFill style={{ color: "#06b2f7" }} />
              )}
            </div>
            <div className="circle" ref={refCircle}></div>
          </div>
        </div>
      </div>
    </SNavigation>
  );
};

export default Navbar;
