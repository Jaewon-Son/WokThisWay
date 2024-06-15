window.addEventListener("DOMContentLoaded", (event) => {
  const restaurantContainer = document.getElementById("restaurantContainer");
  const categoryDropdown = document.getElementById("categoryDropdown");
  const locationText = document.getElementById("location-text");

  // data.js 파일에서 필요한 음식점 리스트를 불러오기
  const cheonan_list = window.cheonan_list;
const asan_list = window.asan_list;
const taean_list = window.taean_list;
const seosan_list = window.seosan_list;
const dangjin_list = window.dangjin_list; 
const hongsung_list = window.hongsung_list;
const yesan_list = window.yesan_list;
const gongju_list = window.gongju_list;
const boryeong_list = window.boryeong_list;
const cheongyang_list = window.cheongyang_list;
const buyeo_list = window.buyeo_list;
const seocheon_list = window.seocheon_list;
const nonsan_list = window.nonsan_list;
const gyaeryong_list = window.gyaeryong_list;
const geumsan_list = window.geumsan_list;

  // 지도 시작
  const detailMapContainer = document.getElementById("detail-map");
  const mapOption = {
    center: new kakao.maps.LatLng(36.80655, 127.1372), // 초기 중심 좌표 (천안 중심)
    level: 7, // 초기 확대 레벨
  };
  const detailMap = new kakao.maps.Map(detailMapContainer, mapOption);

  let markers = [];
  let infoWindow = new kakao.maps.InfoWindow({ zIndex: 1 });

  // 기본 마커 이미지와 강조된 마커 이미지
  const normalImage = new kakao.maps.MarkerImage(
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
    new kakao.maps.Size(24, 35)
  );
  const highlightedImage = new kakao.maps.MarkerImage(
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 빨간색 마커 이미지 URL
    new kakao.maps.Size(64, 69), // 이미지 크기
    {
      offset: new kakao.maps.Point(27, 69), // 마커 좌표에 일치시킬 이미지 안의 좌표
    }
  );

  // 모든 마커 해제
  const clearMarkers = () => {
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];
  };

  // 리스트에 있는 식당의 마커 추가
  const addMarkers = (location) => {
    location.forEach((restaurant) => {
      const markerPosition = new kakao.maps.LatLng(restaurant.lat, restaurant.lng);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: normalImage
      });
      marker.setMap(detailMap);
      markers.push(marker);

      // 마커에 이벤트 리스너 추가
      addMarkerEventListeners(marker, restaurant);
    });
  };

  // 마커에 대한 이벤트 리스너 추가
  const addMarkerEventListeners = (marker, restaurant) => {
    // 마커에 마우스 오버 이벤트 추가
    kakao.maps.event.addListener(marker, "mouseover", () => {
      const content = `<div class="infoWindow">${restaurant.name}</div>`;
      infoWindow.setContent(content);
      infoWindow.open(detailMap, marker);
    });

    // 마커에서 마우스 아웃 이벤트 추가
    kakao.maps.event.addListener(marker, "mouseout", () => {
      infoWindow.close();
    });

    // 마커에 클릭 이벤트 추가 (홈페이지 이동)
    kakao.maps.event.addListener(marker, "click", () => {
      if (restaurant.home_url) {
        window.open(restaurant.home_url, "_blank");
      } else {
        alert("홈페이지가 없는 식당입니다");
      }
    });
  };

  // 마커 강조 기능
  const highlightMarker = (restaurant) => {
    // 모든 마커 기본 상태로 되돌리기
    markers.forEach((marker) => {
      marker.setImage(normalImage);
    });

    // 해당 식당의 마커를 찾아서 강조
    const markerToHighlight = markers.find(
      (marker) =>
        marker.getPosition().getLat() === restaurant.lat &&
        marker.getPosition().getLng() === restaurant.lng
    );

    if (markerToHighlight) {
      markerToHighlight.setImage(highlightedImage);
      detailMap.setCenter(markerToHighlight.getPosition());
      detailMap.setLevel(4); // 지도를 확대
    }
  };

  // 드롭다운 메뉴 추가
  const populateDropdown = (categories) => {
    categoryDropdown.innerHTML = '<option value="all">모든 카테고리</option>';
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categoryDropdown.appendChild(option);
    });
  };

  // 음식점 데이터를 순회하며 HTML에 추가하기
  const refresh_list = (location, category = "all") => {
    // 이전 내용 제거
    restaurantContainer.innerHTML = "";
    // Clear previous markers
    clearMarkers();
    // location이 빈 배열일 경우에 []반환 (예외처리)
    (location || []).forEach((restaurant) => {
      if (category === "all" || restaurant.categories === category) {
        // 음식점 정보를 HTML 요소로 변환
        const restaurantDiv = document.createElement("div");
        restaurantDiv.classList.add("restaurant");

        // 음식점 이미지 추가
        const image = document.createElement("img");
        image.src = restaurant.image_url;
        image.addEventListener("click", () => highlightMarker(restaurant)); // 이미지 클릭 시 마커 강조
        restaurantDiv.appendChild(image);

        // 음식점 이름 추가
        const nameHeading = document.createElement("h2");
        nameHeading.textContent = restaurant.name;
        restaurantDiv.appendChild(nameHeading);

        // 음식점 카테고리 추가
        const categoriesParagraph = document.createElement("p");
        categoriesParagraph.textContent = "카테고리: " + restaurant.categories;
        restaurantDiv.appendChild(categoriesParagraph);

        // 음식점 주소 추가
        const addressParagraph = document.createElement("p");
        addressParagraph.textContent = "주소: " + restaurant.address;
        restaurantDiv.appendChild(addressParagraph);

        // 음식점 전화번호 추가
        const phoneParagraph = document.createElement("p");
        phoneParagraph.textContent = "전화번호: " + restaurant.phone;
        restaurantDiv.appendChild(phoneParagraph);

        // 음식점 사용자 리뷰 수 추가
        const userRevParagraph = document.createElement("p");
        userRevParagraph.textContent = "사용자 리뷰 수: " + restaurant.user_rev;
        restaurantDiv.appendChild(userRevParagraph);

        // 음식점 평점 추가
        if (restaurant.ratings !== null) {
          const ratingsDiv = document.createElement("div");
          ratingsDiv.classList.add("ratings");
          const starImage = document.createElement("img");
          starImage.src = "star.png"; // 별 이미지 URL 설정
          ratingsDiv.appendChild(starImage);
          const ratingsSpan = document.createElement("span");
          ratingsSpan.textContent = restaurant.ratings;
          ratingsDiv.appendChild(ratingsSpan);
          restaurantDiv.appendChild(ratingsDiv);
        } else {
          const ratingsParagraph = document.createElement("p");
          ratingsParagraph.textContent = "평점 정보 없음";
          restaurantDiv.appendChild(ratingsParagraph);
        }

        // restaurantContainer에 추가
        restaurantContainer.appendChild(restaurantDiv);
      }
    });
    // 리스트의 식당들 마커로 추가
    addMarkers(
      location.filter(
        (restaurant) => category === "all" || restaurant.categories === category
      )
    );
  };

  // 음식점 리스트 새로고침 함수 호출
  const categories = [
    ...new Set(cheonan_list.map((restaurant) => restaurant.categories)),
  ];
  populateDropdown(categories);
  refresh_list(cheonan_list);

  // 각 지역 클릭 이벤트 핸들러
kakao.maps.event.addListener(polygonCheonan, "click", function () {
  detailMap.setCenter(new kakao.maps.LatLng(36.80655, 127.1372)); // 천안 중심 좌표로 설정
  const categories = [...new Set(cheonan_list.map((restaurant) => restaurant.categories))];
  populateDropdown(categories);
  refresh_list(cheonan_list);
  locationText.textContent = "천안시 맛집";
});

kakao.maps.event.addListener(polygonAsan, "click", function () {
  detailMap.setCenter(new kakao.maps.LatLng(36.78, 126.98)); // 아산 중심 좌표로 설정
  const categories = [...new Set(asan_list.map((restaurant) => restaurant.categories))];
  populateDropdown(categories);
  refresh_list(asan_list);
  locationText.textContent = "아산시 맛집";
});

kakao.maps.event.addListener(polygonTaean, "click", function () {
  detailMap.setCenter(new kakao.maps.LatLng(36.746, 126.316)); // 태안 중심 좌표로 설정
  const categories = [...new Set(taean_list.map((restaurant) => restaurant.categories))];
  populateDropdown(categories);
  refresh_list(taean_list);
  locationText.textContent = "태안군 맛집";
});

kakao.maps.event.addListener(polygonSeosan, "click", function () {
  detailMap.setCenter(new kakao.maps.LatLng(36.776, 126.45)); // 서산 중심 좌표로 설정
  const categories = [...new Set(seosan_list.map((restaurant) => restaurant.categories))];
  populateDropdown(categories);
  refresh_list(seosan_list);
  locationText.textContent = "서산시 맛집";
});

kakao.maps.event.addListener(polygonHongsung, "click", function () {
  detailMap.setCenter(new kakao.maps.LatLng(36.6, 126.67)); // 홍성 중심 좌표로 설정
  const categories = [...new Set(hongsung_list.map((restaurant) => restaurant.categories))];
  populateDropdown(categories);
  refresh_list(hongsung_list);
  locationText.textContent = "홍성시 맛집";
});

kakao.maps.event.addListener(polygonYesan, "click", function () {
  detailMap.setCenter(new kakao.maps.LatLng(36.68, 126.84)); // 예산 중심 좌표로 설정
  const categories = [...new Set(yesan_list.map((restaurant) => restaurant.categories))];
  populateDropdown(categories);
  refresh_list(yesan_list);
  locationText.textContent = "예산군 맛집";
});

kakao.maps.event.addListener(polygonGongju, "click", function () {
  detailMap.setCenter(new kakao.maps.LatLng(36.44, 127.12)); // 공주 중심 좌표로 설정
  const categories = [...new Set(gongju_list.map((restaurant) => restaurant.categories))];
  populateDropdown(categories);
  refresh_list(gongju_list);
  locationText.textContent = "공주시 맛집";
});

kakao.maps.event.addListener(polygonBoryeong, "click", function () {
  detailMap.setCenter(new kakao.maps.LatLng(36.33, 126.62)); // 보령 중심 좌표로 설정
  const categories = [...new Set(boryeong_list.map((restaurant) => restaurant.categories))];
  populateDropdown(categories);
  refresh_list(boryeong_list);
  locationText.textContent = "보령시 맛집";
});

kakao.maps.event.addListener(polygonCheongyang, "click", function () {
  detailMap.setCenter(new kakao.maps.LatLng(36.43, 126.9)); // 청양 중심 좌표로 설정
  const categories = [...new Set(cheongyang_list.map((restaurant) => restaurant.categories))];
  populateDropdown(categories);
  refresh_list(cheongyang_list);
  locationText.textContent = "청양군 맛집";
});

kakao.maps.event.addListener(polygonBuyeo, "click", function () {
  detailMap.setCenter(new kakao.maps.LatLng(36.27, 126.91)); // 부여 중심 좌표로 설정
  const categories = [...new Set(buyeo_list.map((restaurant) => restaurant.categories))];
  populateDropdown(categories);
  refresh_list(buyeo_list);
  locationText.textContent = "부여군 맛집";
});

kakao.maps.event.addListener(polygonSeocheon, "click", function () {
  detailMap.setCenter(new kakao.maps.LatLng(36.08, 126.68)); // 서천 중심 좌표로 설정
  const categories = [...new Set(seocheon_list.map((restaurant) => restaurant.categories))];
  populateDropdown(categories);
  refresh_list(seocheon_list);
  locationText.textContent = "서천군 맛집";
});

kakao.maps.event.addListener(polygonNonsan, "click", function () {
  detailMap.setCenter(new kakao.maps.LatLng(36.2, 127.08)); // 논산 중심 좌표로 설정
  const categories = [...new Set(nonsan_list.map((restaurant) => restaurant.categories))];
  populateDropdown(categories);
  refresh_list(nonsan_list);
  locationText.textContent = "논산시 맛집";
});

kakao.maps.event.addListener(polygonGyaeryong, "click", function () {
  detailMap.setCenter(new kakao.maps.LatLng(36.27, 127.29)); // 계룡 중심 좌표로 설정
  const categories = [...new Set(gyaeryong_list.map((restaurant) => restaurant.categories))];
  populateDropdown(categories);
  refresh_list(gyaeryong_list);
  locationText.textContent = "계룡시 맛집";
});

kakao.maps.event.addListener(polygonGeumsan, "click", function () {
  detailMap.setCenter(new kakao.maps.LatLng(36.1, 127.58)); // 금산 중심 좌표로 설정
  const categories = [...new Set(geumsan_list.map((restaurant) => restaurant.categories))];
  populateDropdown(categories);
  refresh_list(geumsan_list);
  locationText.textContent = "금산군 맛집";
});

kakao.maps.event.addListener(polygonDangjin, "click", function () {
  detailMap.setCenter(new kakao.maps.LatLng(36.89, 126.62)); // 당진 중심 좌표로 설정
  const categories = [...new Set(dangjin_list.map((restaurant) => restaurant.categories))];
  populateDropdown(categories);
  refresh_list(dangjin_list);
  locationText.textContent = "당진시 맛집";
});

  // 드롭다운 메뉴
  categoryDropdown.addEventListener("change", (event) => {
    const selectedCategory = event.target.value;
    if (locationText.textContent.includes("천안")) {
      refresh_list(cheonan_list, selectedCategory);
    } else if (locationText.textContent.includes("아산")) {
      refresh_list(asan_list, selectedCategory);
    }
    else if (locationText.textContent.includes("태안")) {
      refresh_list(taean_list, selectedCategory);
    }
    else if (locationText.textContent.includes("서산")) {
      refresh_list(seosan_list, selectedCategory);
    }
    else if (locationText.textContent.includes("당진")) {
      refresh_list(dangjin_list, selectedCategory);
    }
    else if (locationText.textContent.includes("홍성")) {
      refresh_list(hongsung_list, selectedCategory);
    }
    else if (locationText.textContent.includes("예산")) {
      refresh_list(yesan_list, selectedCategory);
    }
    else if (locationText.textContent.includes("공주")) {
      refresh_list(gongju_list, selectedCategory);
    }
    else if (locationText.textContent.includes("보령")) {
      refresh_list(boryeong_list, selectedCategory);
    }
    else if (locationText.textContent.includes("청양")) {
      refresh_list(cheongyang_list, selectedCategory);
    }
    else if (locationText.textContent.includes("부여")) {
      refresh_list(buyeo_list, selectedCategory);
    }
    else if (locationText.textContent.includes("서천")) {
      refresh_list(seocheon_list, selectedCategory);
    }
    else if (locationText.textContent.includes("논산")) {
      refresh_list(nonsan_list, selectedCategory);
    }
    else if (locationText.textContent.includes("계룡")) {
      refresh_list(gyaeryong_list, selectedCategory);
    }
    else if (locationText.textContent.includes("금산")) {
      refresh_list(geumsan_list, selectedCategory);
    }
  });

});
