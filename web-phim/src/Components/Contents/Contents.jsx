import React, { useEffect } from "react";
import MoviesRow from "./MoviesRow";

const API_KEY = "9f51773baaf3f27a8e0905d1b2899847";
const BASE_URL = "http://api.themoviedb.org/3";

const Contents = (props) => {
  return (
    <div>
      <MoviesRow
        title="Phim chiếu rạp"
        isPoster={true}
        idSection="chieu-rap"
        api={`${BASE_URL}/trending/all/day?api_key=${API_KEY}`}
      />
      <MoviesRow
        title="Phim HOT"
        idSection="hot"
        api={`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`}
      />
      <MoviesRow
        title="Phim tài liệu"
        idSection="tai-lieu"
        api={`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-us`}
      />
      <MoviesRow
        title="Phim hành động"
        idSection="hanh-dong"
        api={`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`}
      />
      <MoviesRow
        title="Phim tình cảm"
        idSection="tinh-cam"
        api={`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`}
      />
      <MoviesRow
        title="Phim ma"
        idSection="ma"
        api={`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`}
      />
      <MoviesRow
        title="Phim kiếm hiệp"
        idSection="kiem-hiep"
        api={`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`}
      />
    </div>
  );
};

export default Contents;
