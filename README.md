# 영화 정보 서비스

| 실행화면 |
|:------------------------------------------------------:|
|![ezgif-7-e7d38746ee](https://github.com/uthem150/movie-web/assets/142042011/729054c2-60e2-48be-a460-32367578ddca)|

<br>

### ⚙️ 개발 환경

- Server : nodeJS  
- Client : React  
- Database : MongoDB  

- 디자인 라이브러리 : ANTD (ANT Design)

- 사용 API : https://www.themoviedb.org/  
- API 공식문서 : https://developer.themoviedb.org/reference/person-details

<br>

## 📍주요 기능
### Main Page
    - 영화 API 바탕으로 인기 영화 포스터 (grid)
    - 추가 영화 불러오기 기능

### Movie Detail Page
    - 런타임 정보, 별점 등 세부 정보
    - 출연 배우 정보 이미지(grid)
  
### Actor Detail Page
    - 배우 세부 정보
    - 출연 영화 목록 포스터 (grid)
  
### 서비스
    - 회원가입
    - Formik를 통한 인증
    - 유저 로그인 (with JWT web token)
    - 영화 즐겨찾기 기능
  


---
### 📌 to start...  
  
- /server/config 경로 안에 dev.js 파일 생성


- mongoDB 정보를 dev.js 파일에 넣음
```
module.exports = {
  mongoURI:
    "mongodb+srv://...",
};

```

- 루트 디렉터리에서 "npm install"을 입력(server 종속성 다운로드)
- client 디렉토리 내부에 "npm install" 입력(front-end 종속성 다운로드)

