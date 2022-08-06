import React, { useEffect, useState } from "react";
import { SMovieDetail } from "./StyleMovieDetail";
import momemt from "react-moment";
import "moment-timezone";

const MovieDetail = (props) => {
  const { movieDetail } = props;
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    movieDetail && setShowModal(true);
  }, [movieDetail]);
  console.log(movieDetail && movieDetail);
  return (
    <SMovieDetail>
      <div
        className={`backdrop ${showModal ? "showBackdrop" : "hideBackdrop"}`}
      ></div>
      <div
        className={`modal ${showModal ? "showModal" : "hideModal"}`}
        style={
          movieDetail && {
            backgroundImage: `url(http://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }
        }
      >
        <div className="container">
          <div className="movieInfo">
            <button className="closeModal" onClick={handleCloseModal}>
              X
            </button>
            <h1 className="movieTitle">
              {movieDetail && (movieDetail.name || movieDetail.title)}
            </h1>
            <p className="statistical">
              <span className="rating">
                Rating: {movieDetail && movieDetail.vote_average * 10}%
              </span>
              <span className="popularity">
                Popularity: {movieDetail && movieDetail.popularity}
              </span>
            </p>
            <p className="releaseDate">
              Release Date:{" "}
              {movieDetail &&
                (movieDetail.release_date || movieDetail.first_air_date)}
            </p>
            <p className="overview">{movieDetail && movieDetail.overview}</p>
          </div>
        </div>
      </div>
    </SMovieDetail>
  );
};

export default MovieDetail;
