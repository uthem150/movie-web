import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../../Config";
import { Row } from "antd";
import GridCards from "../../commons/GridCards";

export default function PersonDetail(props) {
  const { personId } = useParams(); //personId 가져오는 부분

  const [personInfo, setPersonInfo] = useState([]);
  const [movies, setMovies] = useState([]); // 영화들 담을 배열

  if (movies) {
    console.log(movies);
  }

  // 처음 로드될 때, 출연 영화 정보 가져오기
  useEffect(() => {
    let endpoint = `${API_URL}person/${personId}/movie_credits?api_key=${API_KEY}&language=ko`; //출연한 다른 영화
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => setMovies(response.cast));
  }, []);

  // 처음 로드될 때, 배우 정보 가져오기
  useEffect(() => {
    let endpointPerson = `${API_URL}person/${personId}?api_key=${API_KEY}&language=ko`; //출연한 다른 영화
    fetch(endpointPerson)
      .then((response) => response.json())
      .then((response) => setPersonInfo(response));
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {personInfo.profile_path ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: " 5px",
            }}
          >
            <img
              style={{
                width: "17%",
                height: "auto",
                borderRadius: "5px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
              src={`${IMAGE_BASE_URL}w500${personInfo.profile_path}`}
              alt={personInfo.name}
            />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              width: "17%",
              height: "auto",
              paddingTop: " 1rem",
            }}
          >
            <svg
              fill="gray"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
            </svg>
          </div>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              marginBottom: "0rem",
              marginTop: "1rem",
            }}
          >
            {personInfo.name}
          </p>
          <p style={{ fontSize: "1rem", textDecoration: "bold" }}>
            {personInfo.place_of_birth} ({personInfo.birthday})
          </p>
        </div>
      </div>

      <div style={{ width: "85%", margin: "1rem auto" }}>
        <h2>출연 영화</h2>
        <hr />

        <Row gutter={[16, 16]}>
          {movies &&
            movies.map((movie, index) => (
              <React.Fragment key={index}>
                <GridCards
                  landingPage
                  image={
                    movie.poster_path //포스터 이미지가 있다면 보여주고 없으면, null
                      ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
                      : null
                  }
                  movieId={movie.id}
                  movieName={movie.original_title}
                />
              </React.Fragment>
            ))}
        </Row>
      </div>
    </div>
  );
}
