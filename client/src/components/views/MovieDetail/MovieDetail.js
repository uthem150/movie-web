import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../Config";
import { useParams } from "react-router-dom";
import MainImage from "../LandingPage/Sections/MainImage";
import MovieInfo from "./Sections/MovieInfo";
import { Row } from "antd";
import GridCards from "../commons/GridCards";

function MovieDetail(props) {
  let { movieId } = useParams(); //movieId를 가져오는 부분
  const [movie, setMovie] = useState([]); // 영화 detail info
  const [casts, setCasts] = useState([]); // 출연진 info
  const [actorToggle, setActorToggle] = useState(false);

  useEffect(() => {
    let endpointCast = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=ko`;
    let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=ko`;

    fetch(endpointInfo)
      .then((response) => response.json())
      .then((response) => setMovie(response)); //movie변수에 특정 id의 영화 detail정보 저장

    fetch(endpointCast)
      .then((response) => response.json())
      .then((response) => setCasts(response.cast));
  }, []);

  const toggleActorView = () => {
    setActorToggle(!actorToggle);
  };

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
          <button onClick={toggleActorView}>Toggle Actor View</button>
        </div>
        {actorToggle && (
          <Row gutter={[16, 16]}>
            {casts &&
              casts.map((cast, index) => (
                <React.Fragment key={index}>
                  <GridCards
                    image={
                      cast.profile_path //이미지가 있다면 보여주고 없으면, null
                        ? `${IMAGE_BASE_URL}w500${cast.profile_path}`
                        : null
                    }
                    castName={cast.name}
                    characterName={cast.character}
                    id={cast.id}
                  />
                </React.Fragment>
              ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
