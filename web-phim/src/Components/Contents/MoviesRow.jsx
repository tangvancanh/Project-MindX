import React, { useEffect, useRef, useState } from "react";
import { SMoviesContainer } from "./StyleMoviesRow";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { SmoothHorizontalScrolling } from "../../utils";
import MovieDetail from "../MovieDetail/MovieDetail";

function MoviesRow(props) {
  const { title, isPoster, api, idSection } = props;
  const listRef = useRef();
  const movieRef = useRef();
  const [movies, setMovies] = useState(null);
  const [movieDetail, setMovieDetail] = useState(null);

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

  useEffect(() => {
    CallApi();
  }, []);

  const CallApi = async () => {
    try {
      const res = await fetch(`${api}`);
      const data = await res.json();
      setMovies(data.results);
    } catch (e) {
      alert("Call Api ko thành công!");
    }
  };

  const handleSetMovie = (movie) => {
    setMovieDetail(movie);
  };

  return (
    <SMoviesContainer movie={movies && movies.length} id={idSection}>
      <h1 className="heading">{title}</h1>
      <div className="moviesList" ref={listRef}>
        {movies &&
          movies.map((movie, index) => {
            if (movie.poster_path && movie.backdrop_path !== null) {
              let imageUrl = isPoster
                ? `http://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div key={index}>
                  <div
                    className="movieItem"
                    ref={movieRef}
                    onClick={() => handleSetMovie(movie)}
                  >
                    <img src={imageUrl} alt="" />
                    <div className="movieName">{movie.name || movie.title}</div>
                  </div>
                </div>
              );
            }
          })}
        <MovieDetail
          movieDetail={movieDetail && movieDetail}
          // showModal={movieDetail ? true : false}
        />
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
