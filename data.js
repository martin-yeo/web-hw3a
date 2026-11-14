// data.js : 실습과제 #3 출발선 키트(교수 제공, https://github.com/martin-yeo/web-hw3a) / 이름(학번)
// 내 영화 5편(TMDB) + 박스오피스 5편(KOBIS, 기준일 YYYY-MM-DD) = 10건
//
// 값 찾는 법 : API 키는 주소창에서만 씁니다. 이 파일에는 키를 적지 않습니다(저장소가 공개이기 때문입니다).
// 1. 내 영화 5편 : 주소창에 https://api.themoviedb.org/3/search/movie?api_key=KEY&language=ko-KR&query=영화제목
//    KEY는 내 TMDB 키. 응답이 한 줄로 보이면 "Pretty-print" 체크 ⇒ results 첫 항목(필드 표는 6주차 안내문)
//    title ⇒ title, release_date ⇒ date(앞 4자리는 year, 숫자), vote_average ⇒ rating(숫자, 소수 첫째 자리까지),
//    poster_path ⇒ poster(없으면 null). audience는 0, type은 "mine", rank는 null
// 2. 박스오피스 5편 : 주소창에 https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=KEY&targetDt=YYYYMMDD
//    KEY는 내 KOBIS 키, YYYYMMDD는 어제 날짜 여덟 자리(이 날짜가 기준일) ⇒ boxOfficeResult.dailyBoxOfficeList의 [0](1위)~[4](5위)
//    movieNm ⇒ title, openDt ⇒ date(앞 4자리는 year, 숫자), audiAcc ⇒ audience(그대로, 따옴표 없이 숫자),
//    rank ⇒ rank(숫자), type은 "boxoffice"
//    포스터와 평점은 KOBIS에 없으므로 movieNm으로 TMDB를 검색해 개봉 연도가 openDt와 같은 영화와 짝을 맞춥니다
//    ⇒ 그 영화의 vote_average ⇒ rating(새 영화라 0이어도 그대로), poster_path ⇒ poster(없으면 null)
// KOBIS 값은 "1234567"처럼 따옴표가 붙은 글자로 옵니다. 숫자는 따옴표를 빼고 1234567로 적어야 계산과 정렬이 됩니다.
// 줄거리 overview는 Step 1에서 영화마다 더합니다.

const movies = [
  // 형식 예시 2건 : 내 값으로 바꾸고, 같은 형식으로 8건을 더해 10건(내 영화 5편, 박스오피스 1~5위)
  // 제목이 같은 영화를 두 번 넣지 않습니다(Step 1부터 제목으로 영화를 찾기 때문입니다)
  // poster는 poster_path 글자(예: "/abc123.jpg"), 포스터가 없으면 따옴표 없이 null
  { title: "인터스텔라", year: 2014, date: "2014-11-06", rating: 8.4,
    audience: 0, poster: null, type: "mine", rank: null },
  { title: "박스오피스 1위 제목", year: 2026, date: "2026-09-30", rating: 7.1,
    audience: 2345678, poster: null, type: "boxoffice", rank: 1 },
];
