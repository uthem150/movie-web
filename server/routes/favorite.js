const express = require("express");
const router = express.Router(); //라우팅을 정의용 라우터 객체 생성
const { Favorite } = require("../models/Favorite");

//Express 라우터 설정

// favorite에 추가한 사람들 수
//POST 요청을 처리하는 라우트 정의 (/api/favorite/favoriteNumber로 POST 요청 보내면, 함수 실행됨)
router.post("/favoriteNumber", (req, res) => {
  //mongoDB에서 favorite숫자를 가져오기
  //Favorite 컬렉션에서 movieId가 요청 본문(req.body.movieId)에 포함된 값과 일치하는 모든 문서 찾음
  Favorite.find({ movieId: req.body.movieId }).exec((err, info) => {
    //HTTP 상태 코드 400(잘못된 요청)과 함께 오류 메시지를 클라이언트에 전송
    if (err) return res.status(400).send(err);

    //Front에 숫자 정보 보내주기 (HTTP 상태 코드 200(성공)과 함께 JSON 형식의 응답을 클라이언트에 전송)
    res.status(200).json({ success: true, favoriteNumber: info.length });
  });
});

// 해당 영화를 Favorite 리스트에 넣었는지 여부 확인
router.post("/favorited", (req, res) => {
  Favorite.find({
    movieId: req.body.movieId,
    userFrom: req.body.userFrom,
  }).exec((err, info) => {
    if (err) return res.status(400).send(err);

    let result = false; //좋아요 여부 확인하는 변수

    if (info.length !== 0) {
      result = true;
    }
    res.status(200).json({ success: true, favorited: result });
  });
});

// favorite리스트에서 삭제
router.post("/removeFromFavorite", (req, res) => {
  //Favorite 컬렉션에서 movieId와 userFrom이 req.body에 포함된 값과 일치하는 문서를 찾아서 삭제
  Favorite.findOneAndDelete({
    movieId: req.body.movieId,
    userFrom: req.body.userFrom,
  }).exec((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, doc });
  });
});

// favorite리스트에 추가
router.post("/addToFavorite", (req, res) => {
  const favorite = new Favorite(req.body); //Favorite 모델의 새로운 인스턴스 생성(req.body에 포함된 데이터 사용)

  //movieId, userFrom, movieTitle... 등의 받은 정보를 저장
  favorite.save((err, doc) => {
    if (err) return res.status(400).send(err);

    return res.status(200).json({ success: true });
  });
});

router.post("/getFavoredMovie", (req, res) => {
  //Favorite는 MongoDB의 컬렉션을 나타내는 Mongoose 모델
  //클라이언트로부터 전달받은 userFrom 값을 기준으로 문서를 찾음
  Favorite.find({ userFrom: req.body.userFrom }).exec((err, favorites) => {
    if (err) return res.status(400).send(err);
    //조회된 즐겨찾기 목록을 JSON 형식으로 클라이언트에 전송
    return res.status(200).json({ success: true, favorites });
  });
});

router.post("/removeFromFavorite", (req, res) => {
  Favorite.findOneAndDelete({
    movieId: req.body.movieId,
    userFrom: req.body.userFrom,
  }).exec((err, result) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true });
  });
});

module.exports = router;
