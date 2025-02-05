import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import MainImage from "./Sections/MainImage";
import GridCards from "../commons/GridCards";
import { Button, Row } from "antd";

export default function LandingPage() {
  const [movies, setMovies] = useState([]); // 인기 영화들 담을 배열
  const [mainImage, setMainImage] = useState(null); // 가장 인기있는 영화의 이미지
  const [currentPage, setCurrentPage] = useState(0);

  // 처음 로드될 때, 영화 정보 가져오기
  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko&page=1`; //20개의 가장 유명한 영화들 가져옴
    fetchMovies(endpoint);
  }, []);

  // load more 버튼을 눌렀을 때, 추가 영화 목록 가져오기
  const loadMoreItems = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko&page=${
      currentPage + 1
    }`;
    fetchMovies(endpoint);
  };

  const fetchMovies = (endpoint) => {
    fetch(endpoint)
      .then((response) => response.json()) //json메소드로 받아온 응답을 json화
      .then((response) => {
        // console.log(response);
        setMovies([...movies, ...response.results]); //받은 응답을 movies에 추가
        setMainImage(response.results[0]);
        setCurrentPage(response.page); // 처음 받아온 페이지 정보로, state 설정
      });
  };

  return (
    <div style={{ width: "100%", margin: "0" }}>
      {/* mainImage를 받아온다면, 이미지 컴포넌트를 생성하라. */}
      {mainImage && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${mainImage.backdrop_path}`}
          title={mainImage.original_title}
          text={mainImage.overview}
        />
      )}

      <div style={{ width: "85%", margin: "1rem auto" }}>
        <h2>Movies by latest</h2>
        <hr />

        {/* movie grid cards - gutter로 상하좌우 여백 생성*/}
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={loadMoreItems}>Load more</Button>
      </div>
    </div>
  );
}
