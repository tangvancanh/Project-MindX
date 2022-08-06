import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { SSignUp } from "./styles";

const SignUP = () => {
  const initialState = {
    username: "",
    password: "",
    confirmation: "",
  };

  const [user, setUser] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.password !== user.confirmation) {
      toast.error("Nhập lại mật khẩu không chính xác!!!");
      return;
    }

    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    localStorage.setItem("users", JSON.stringify([...users, user]));

    setUser(initialState);
    toast.success("Đăng ký thành công!!!");
  };

  return (
    <SSignUp>
      <div className="logo">
        <Link to="../">
          <img src="/images/navbar.jpg" alt="navbar" />
        </Link>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1 className="title">FORM ĐĂNG KÝ</h1>
          <div className="form-content">
            <Input
              lable="Tên đăng ký:"
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
            <Input
              lable="Nhập lại mật khẩu:"
              type="password"
              value={user.confirmation}
              onChange={(e) =>
                setUser({ ...user, confirmation: e.target.value })
              }
            />
          </div>

          <Link to="/sign-in" className="link">
            Quay lại đăng nhập
          </Link>
          <Button text="Đăng ký" />
        </form>
      </div>
    </SSignUp>
  );
};

export default SignUP;
