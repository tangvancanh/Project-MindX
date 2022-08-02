import React, { useRef } from "react";
import { SMoviesContainer } from "./StyleMoviesRow";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { SmoothHorizontalScrolling } from "../../utils";

function MoviesRow(props) {
  const { movies, title, isPoster } = props;
  const listRef = useRef();
  const movieRef = useRef();

  const handleScrollRight = () => {
    const maxScrollLeft =
      listRef.current.scrollWidth - listRef.current.clientWidth;
    if (listRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        listRef.current,
        250,
        movieRef.current.clientWidth,
        listRef.current.scrollLeft
      );
    }
  };

  const handleScrollLeft = () => {
    if (listRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        listRef.current,
        250,
        -movieRef.current.clientWidth,
        listRef.current.scrollLeft
      );
    }
  };

  return (
    <SMoviesContainer movies={movies}>
      <h1 className="heading">Netflix Originals</h1>
      <div className="moviesList" ref={listRef}>
        {movies.map((movie, index) => (
          <div key={index} className="movieItem" ref={movieRef}>
            <img src={movie} alt="" />
            <div className="movieName">Movie Name</div>
          </div>
        ))}
      </div>
      <div
        className={`btnLeft ${isPoster && "isPoster"}`}
        onClick={handleScrollLeft}
      >
        <AiOutlineLeft />
      </div>
      <div
        className={`btnRight ${isPoster && "isPoster"}`}
        onClick={handleScrollRight}
      >
        <AiOutlineRight />
      </div>
    </SMoviesContainer>
  );
}

export default MoviesRow;
