import { Button } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";

// 프론트엔드 favorite

function Favorite(props) {
  const movieId = props.movieId;
  const userFrom = props.userFrom;
  const movieTitle = props.movieInfo.title;
  const moviePost = props.movieInfo.backdrop_path;
  const movieRunTime = props.movieInfo.runtime;

  const [favoriteNumber, setFavoriteNumber] = useState(0);
  const [favorited, setFavorited] = useState(false);

  let variables = {
    userFrom: userFrom, //누가 좋아요 눌렀는지
    movieId: movieId,
    movieTitle: movieTitle,
    moviePost: moviePost,
    movieRunTime: movieRunTime,
  };

  useEffect(() => {
    //해당 주소로 요청 보내서, 좋아요 수 가져오기
    Axios.post("/api/favorite/favoriteNumber", variables).then((response) => {
      if (response.data.success) {
        setFavoriteNumber(response.data.favoriteNumber);
      } else {
        alert("숫자 정보를 가져오는데 실패했습니다");
      }
    });

    // 좋아요 여부 정보
    Axios.post("/api/favorite/favorited", variables).then((response) => {
      if (response.data.success) {
        setFavorited(response.data.favorited);
      } else {
        alert("정보를 가져오는데 실패했습니다");
      }
    });
  }, []);

  const onClickFavorite = () => {
    if (favorited) {
      Axios.post("/api/favorite/removeFromFavorite", variables).then(
        (response) => {
          if (response.data.success) {
            setFavoriteNumber(favoriteNumber - 1);
            setFavorited(!favorited);
          } else {
            alert("Favorite 리스트에서 삭제를 실패했습니다");
          }
        }
      );
    } else {
      Axios.post("/api/favorite/addToFavorite", variables).then((response) => {
        if (response.data.success) {
          setFavoriteNumber(favoriteNumber + 1);
          setFavorited(!favorited);
        } else {
          alert("Favorite 리스트에 추가를 실패했습니다");
        }
      });
    }
  };

  return (
    <div>
      <Button
        onClick={onClickFavorite}
        style={{
          display: "flex",
          alignItems: "center",
          width: "115px",
          justifyContent: "center",
        }}
      >
        <svg
          data-slot="icon"
          fill={favorited ? "yellow" : "none"}
          strokeWidth="1"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          ></path>
        </svg>
        <div
          style={{
            marginLeft: "3px",
          }}
        >
          {"Favorite"} {favoriteNumber}
        </div>
      </Button>
    </div>
  );
}

export default Favorite;
