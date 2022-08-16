import "./App.css";
import { ThemeContext } from "./Components/ThemeContext/ThemeContext";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUP from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import ListMovies from "./pages/ListMovies/ListMovies";

function App() {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={themeContext.theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUP />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/list-movie" element={<ListMovies />} />
        </Routes>

        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
