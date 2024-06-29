import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import MainImage from "./Sections/MainImage";

function LandingPage() {
  const [movies, setMovies] = useState([]); // 인기 영화들 담을 배열
  const [mainImage, setMainImage] = useState(null); // 가장 인기있는 영화의 이미지

  // 영화 정보 가져오기
  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko&page=1`; //20개의 가장 유명한 영화들 가져옴

    fetch(endpoint)
      .then((response) => response.json()) //json메소드로 받아온 응답을 json화
      .then((response) => {
        // console.log(response);
        setMovies([...response.results]); //받은 응답을 movies에 저장
        setMainImage(response.results[0]);
      });
  }, []);

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

        {/* movie grid cards */}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button>Load more</button>
      </div>
    </div>
  );
}

export default LandingPage;
