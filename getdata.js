// 받아들일 JSONP 콜백 함수
function processData(data) {
    // 여기에 데이터를 처리하는 코드 작성
    // 예: 데이터를 반복하면서 HTML에 추가하거나 다른 작업을 수행할 수 있습니다.
    data.forEach(function(item) {
        console.log("음식점 이름:", item.name);
        console.log("카테고리 수:", item.categories);
        // 여기에 추가적인 처리 코드를 작성하세요.
    });
}

// JSONP 요청을 보낼 함수
function fetchData() {
    // JSONP 요청을 보낼 URL
    var url = "http://58.232.79.151:8080/jsp14/WokThisWay/index.html";

    // JSONP 요청을 보내고 응답을 처리하는 스크립트 엘리먼트 생성
    var script = document.createElement('script');
    script.src = url + "?callback=processData";

    // 스크립트 엘리먼트를 body에 추가하여 요청을 보냄
    document.body.appendChild(script);
}

// 페이지 로드 후 데이터를 가져오는 함수 호출
fetchData();

console.log();