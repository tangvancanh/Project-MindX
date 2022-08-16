import React, { useState } from "react";
import { RiTodoFill } from "react-icons/ri";
import Navbar from "../../Components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SListMovies } from "./StyleListMovies";

const ListMovies = () => {

  return (
    <div>
      <Navbar />
      <SListMovies>
        <h1 className="title">
          Todo List <RiTodoFill />
        </h1>

        <form>
          <input
            type="text"
            placeholder="Nhập..."
          />
          <button type="submit">Add</button>
        </form>
        <ToastContainer />

      </SListMovies>
    </div>
  );
};

export default ListMovies;
