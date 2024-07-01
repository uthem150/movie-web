import React, { useEffect, useState } from "react";
import "./favoritePage.css";
import Axios from "axios";
import { Popover } from "antd";
import { IMAGE_BASE_URL } from "../../Config";

function FavoritePage() {
  const [favorites, setFavorites] = useState([]);

  //컴포넌트 로드 시 데이터 가져옴
  useEffect(() => {
    fetchFavoredMovie();
  }, []);

  const fetchFavoredMovie = () => {
    // 서버에 userId를 보내고, 즐겨찾기한 영화 목록을 요청
    Axios.post("/api/favorite/getFavoredMovie", {
      userFrom: localStorage.getItem("userId"),
    }).then((response) => {
      if (response.data.success) {
        //favorites 상태를 업데이트
        setFavorites(response.data.favorites);
      } else {
        alert("영화 정보를 가져오는데 실패 했습니다.");
      }
    });
  };

  //영화 ID와 사용자 ID 받아 즐겨찾기에서 해당 영화 삭제
  const onClickDelete = (movieId, userFrom) => {
    const variables = {
      movieId,
      userFrom,
    };

    // 삭제 요청 후 다시 불러옴
    Axios.post("/api/favorite/removeFromFavorite", variables).then(
      (response) => {
        if (response.data.success) {
          fetchFavoredMovie();
        } else {
          alert("리스트에서 지우는데 실패했습니다.");
        }
      }
    );
  };

  //즐겨찾기 영화 목록 렌더링
  //favorites 배열 순회하며 각 즐겨찾기 영화를 테이블 행(tr)으로 렌더링
  const renderCards = favorites.map((favorite, index) => {
    const content = (
      <div>
        {favorite.moviePost ? (
          <img src={`${IMAGE_BASE_URL}w500${favorite.moviePost}`} />
        ) : (
          "no image"
        )}
      </div>
    );

    return (
      <tr key={index}>
        <Popover content={content} title={`${favorite.movieTitle}`}>
          <td>{favorite.movieTitle}</td>
        </Popover>

        <td>{favorite.movieRunTime} mins</td>
        <td>
          <button
            onClick={() => onClickDelete(favorite.movieId, favorite.userFrom)}
          >
            Remove
          </button>
        </td>
      </tr>
    );
  });

  //전체 레이아웃과 테이블 구조 반환
  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <h2> Favorite Movies </h2>
      <hr />

      <table>
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Movie RunTime</th>
            <td>Remove from favorites</td>
          </tr>
        </thead>
        {/* renderCards를 호출하여 테이블 본문(tbody)에 즐겨찾기 영화 목록 렌더링 */}
        <tbody>{renderCards}</tbody>
      </table>
    </div>
  );
}

export default FavoritePage;
