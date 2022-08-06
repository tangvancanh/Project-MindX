import React from "react";
import { SSearchMovie } from "./StyleSearchMovies";

const moviesList = [
  "https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-dep-1.jpg",
  "https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-dep-1.jpg",
  "https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-dep-1.jpg",
  "https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-dep-1.jpg",
  "https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-dep-1.jpg",
  "https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-dep-1.jpg",
  "https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-dep-1.jpg",
  "https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-dep-1.jpg",
  "https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-dep-1.jpg",
];
const SearchMovies = () => {
  return (
    <SSearchMovie>
      {moviesList && moviesList.length > 0 ? (
        <div className="searchContent" number="9">
          {moviesList.map((movie, index) => (
            <div className="movieItem" key={index}>
              <img src={movie} alt="" />
              <span>Movie Name</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="notFound">
          <h1>Your search for "keywords" did not have</h1>
        </div>
      )}
    </SSearchMovie>
  );
};

export default SearchMovies;
