import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { SSignIn } from "./styles";

const SignIn = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    const findUser = users.find(
      (e) => e.username === user.username && e.password === user.password
    );

    if (findUser) {
      localStorage.setItem("currentUser", JSON.stringify(findUser));
      navigate("../", { replace: true });
    } else {
      toast.error("Thông tin tài khoản không chính xác !!!");
    }
  };

  return (
    <SSignIn>
      <div className="logo">
        <Link to="../">
          <img src="/images/navbar.jpg" alt="navbar" />
        </Link>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1 className="title">FORM ĐĂNG NHẬP</h1>
          <div className="form-content">
            <Input
              lable="Tên đăng nhập:"
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <Input
              lable="Mật khẩu:"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <Link to="/sign-up" className="link">
            Đăng ký
          </Link>
          <Button text="Đăng nhập" />
        </form>
      </div>
    </SSignIn>
  );
};

export default SignIn;
