var mapContainer = document.getElementById('map');
mapOption = {
    center: new kakao.maps.LatLng(36.489567, 126.942152),
    level : 12
};
var map = new kakao.maps.Map(mapContainer, mapOption);

var cheonan = [
    new kakao.maps.LatLng(36.9375, 127.0745),
new kakao.maps.LatLng(36.9122, 127.0947),
new kakao.maps.LatLng(36.9017, 127.0850),
new kakao.maps.LatLng(36.8921, 127.0929),
new kakao.maps.LatLng(36.8873, 127.0877),
new kakao.maps.LatLng(36.8603, 127.0881),
new kakao.maps.LatLng(36.8588, 127.1117),
new kakao.maps.LatLng(36.7936, 127.0982),
new kakao.maps.LatLng(36.7997, 127.1095),
new kakao.maps.LatLng(36.7632, 127.1195),
new kakao.maps.LatLng(36.7582, 127.0925),
new kakao.maps.LatLng(36.7082, 127.0769),
new kakao.maps.LatLng(36.7078, 127.0599),
new kakao.maps.LatLng(36.6567, 127.0103),
new kakao.maps.LatLng(36.6541, 127.0271),
new kakao.maps.LatLng(36.6413, 127.0883),
new kakao.maps.LatLng(36.6579, 127.1114),
new kakao.maps.LatLng(36.6189, 127.1499),
new kakao.maps.LatLng(36.6251, 127.1600),
new kakao.maps.LatLng(36.6927, 127.1603),
new kakao.maps.LatLng(36.6873, 127.1433),
new kakao.maps.LatLng(36.7082, 127.1294),
new kakao.maps.LatLng(36.7346, 127.1631),
new kakao.maps.LatLng(36.6892, 127.2861),
new kakao.maps.LatLng(36.7986, 127.4019),
new kakao.maps.LatLng(36.8154, 127.3789),
new kakao.maps.LatLng(36.8297, 127.3358),
new kakao.maps.LatLng(36.8537, 127.3363),
new kakao.maps.LatLng(36.8590, 127.3074),
new kakao.maps.LatLng(36.8845, 127.3098),
new kakao.maps.LatLng(36.9128, 127.2733),
new kakao.maps.LatLng(36.9205, 127.2538),
new kakao.maps.LatLng(36.9291, 127.2112),
new kakao.maps.LatLng(36.9506, 127.2032),
new kakao.maps.LatLng(36.9689, 127.1475),
new kakao.maps.LatLng(36.9682, 127.1218)
];

var polygonCheonan = new kakao.maps.Polygon({
    path:cheonan, // 그려질 다각형의 좌표 배열입니다
    strokeWeight: 3, // 선의 두께입니다
    strokeColor: '#39DE2A', // 선의 색깔입니다
    strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: 'solid', // 선의 스타일입니다
    fillColor: '#A2FF99', // 채우기 색깔입니다
    fillOpacity: 0.7 // 채우기 불투명도 입니다
});

// 지도에 다각형을 표시합니다
polygonCheonan.setMap(map);

// 다각형에 마우스오버 이벤트가 발생했을 때 변경할 채우기 옵션입니다
var mouseoverOption = { 
    fillColor: '#EFFFED', // 채우기 색깔입니다
    fillOpacity: 0.8 // 채우기 불투명도 입니다        
};

// 다각형에 마우스아웃 이벤트가 발생했을 때 변경할 채우기 옵션입니다
var mouseoutOption = {
    fillColor: '#A2FF99', // 채우기 색깔입니다 
    fillOpacity: 0.7 // 채우기 불투명도 입니다        
};

// 다각형에 마우스오버 이벤트를 등록합니다
kakao.maps.event.addListener(polygonCheonan, 'mouseover', function() { 

    // 다각형의 채우기 옵션을 변경합니다
    polygonCheonan.setOptions(mouseoverOption);

});   

kakao.maps.event.addListener(polygonCheonan, 'mouseout', function() { 

    // 다각형의 채우기 옵션을 변경합니다
    polygonCheonan.setOptions(mouseoutOption);
    
}); 

// 다각형에 마우스다운 이벤트를 등록합니다
var downCount = 0;
kakao.maps.event.addListener(polygonCheonan, 'mousedown', function() { 
    console.log(event);
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '다각형에 mousedown 이벤트가 발생했습니다!' + (++downCount);
}); 