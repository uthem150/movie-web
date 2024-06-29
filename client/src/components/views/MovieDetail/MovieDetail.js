import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../Config";
import { useParams } from "react-router-dom";
import MainImage from "../LandingPage/Sections/MainImage";
import MovieInfo from "./Sections/MovieInfo";

function MovieDetail(props) {
  let { movieId } = useParams(); //movieId를 가져오는 부분
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=ko`;
    let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=ko`;

    fetch(endpointInfo)
      .then((response) => response.json())
      .then((response) => setMovie(response)); //movie변수에 특정 id의 영화 detail정보 저장
  }, []);

  return (
    <div>
      {/* header */}
      <MainImage
        image={`${IMAGE_BASE_URL}w1280${movie.backdrop_path}`}
        title={movie.original_title}
        text={movie.overview}
      />

      {/* body */}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        {/* Movie Info */}
        <MovieInfo movie={movie} /> {/*영화 detail정보 넘겨줌*/}
        <br />
        {/* Actors Grid */}
        <div
          style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
        >
          <button>Toggle Actor View</button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
