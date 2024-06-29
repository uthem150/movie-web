import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY } from "../../Config";

function LandingPage() {
  // 영화 정보 가져오기
  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`; //20개의 가장 유명한 영화들 가져옴

    fetch(endpoint)
      .then((response) => response.json()) //json메소드로 받아온 응답을 json화
      .then((response) => console.log(response)); //json화 한 응답을 가져옴
  }, []);

  return (
    <div style={{ width: "100%", margin: "0" }}>
      {/* main image */}
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
