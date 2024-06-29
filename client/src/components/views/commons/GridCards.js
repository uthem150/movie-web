import React from "react";
import { Col } from "antd";

export default function GridCards(props) {
  // landing페이지에 관한 grid
  if (props.landingPage) {
    return (
      // large size일때는 6 (한 column에 24size이므로, 4개씩 넣는다는 뜻)
      <Col lg={6} md={8} xs={24}>
        <div style={{ position: "relative" }}>
          <a href={`/movie/${props.movieId}`}>
            <img
              style={{ width: "100%", height: "320px" }}
              src={props.image}
              alt={props.movieName}
            />
          </a>
        </div>
      </Col>
    );
  } else {
    // 배우 정보에 대한 grid
    return (
      <Col lg={4} md={6} xs={8}>
        <div style={{ position: "relative" }}>
          {props.image ? (
            <img
              style={{ width: "100%", height: "220px", borderRadius: "5px" }}
              src={props.image}
              alt={props.castName}
            />
          ) : (
            <div
              style={{ width: "100%", height: "220px", paddingTop: " 1rem" }}
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

          <div>
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: "bold",
                marginBottom: "0rem",
                marginTop: "0.2rem",
              }}
            >
              {props.castName}
            </p>
            <p style={{ fontSize: "0.8rem", textDecoration: "bold" }}>
              {props.characterName}
            </p>
          </div>
        </div>
      </Col>
    );
  }
}
