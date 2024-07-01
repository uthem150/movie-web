const mongoose = require("mongoose");
const Schema = mongoose.Schema; //MongoDB 컬렉션의 스키마 정의하기 위한 객체

//백엔드 favorite 스키마 정의

const favoriteSchema = mongoose.Schema(
  {
    userFrom: {
      type: Schema.Types.ObjectId, // User 컬렉션의 문서 참조 - 사용자의 ID 참조
      ref: "User",
    },
    movieId: {
      type: String, //영화의 ID 문자열로 저장
    },
    movieTitle: {
      type: String,
    },
    moviePost: {
      type: String,
    },
    movieRunTime: {
      type: String,
    },
  },
  { timestamps: true } //문서가 생성되거나 업데이트될 때 타임스탬프(생성된 시간 처리)
);

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = { Favorite };
