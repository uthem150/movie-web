import React from "react";
import { Col } from "antd";

export default function GridCard(props) {
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
}
