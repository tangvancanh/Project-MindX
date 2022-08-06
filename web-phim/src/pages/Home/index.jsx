import React from "react";
import Contents from "../../Components/Contents/Contents";
import Intro from "../../Components/Intro/Intro";
import Navbar from "../../Components/Navbar/Navbar";
import Menus from "../../Components/Menus/Menus";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { SScroll } from "./styles";
import { animateScroll } from "react-scroll";
import { useScrollY } from "../../Components/Hooks/useScrollY";
import MovieDetail from "../../Components/MovieDetail/MovieDetail";

const Home = () => {
  const [scrollY] = useScrollY();

  const ScrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <div>
      <Navbar />
      <Intro />
      <Contents />
      <Menus />
      <SScroll
        onClick={ScrollToTop}
        style={{ cursor: "pointer",visibility: `${scrollY > 600 ? "visible" : "hidden"}` }}
      >
        <FaArrowAltCircleUp />
      </SScroll>
      <MovieDetail />
    </div>
  );
};

export default Home;
