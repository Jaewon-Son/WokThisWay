window.addEventListener('DOMContentLoaded', (event) => {
    const restaurantContainer = document.getElementById('restaurantContainer');
  
    // data.js 파일에서 필요한 음식점 리스트를 불러오기
    // data.js 파일을 스크립트 태그로 로드하여 전역 변수로 데이터에 접근
    const cheonan_list = window.cheonan_list;
  
    // 음식점 데이터를 순회하며 HTML에 추가하기
    cheonan_list.forEach(restaurant => {
        // 음식점 정보를 HTML 요소로 변환
        const restaurantDiv = document.createElement('div');
        restaurantDiv.classList.add('restaurant');
  
        // 음식점 이미지 추가
        const image = document.createElement('img');
        image.src = restaurant.image_url;
        restaurantDiv.appendChild(image);
  
        // 음식점 이름 추가
        const nameHeading = document.createElement('h2');
        nameHeading.textContent = restaurant.name;
        restaurantDiv.appendChild(nameHeading);
  
        // 음식점 카테고리 추가
        const categoriesParagraph = document.createElement('p');
        categoriesParagraph.textContent = '카테고리: ' + restaurant.categories;
        restaurantDiv.appendChild(categoriesParagraph);
  
        // 음식점 주소 추가
        const addressParagraph = document.createElement('p');
        addressParagraph.textContent = '주소: ' + restaurant.address;
        restaurantDiv.appendChild(addressParagraph);
  
        // 음식점 전화번호 추가
        const phoneParagraph = document.createElement('p');
        phoneParagraph.textContent = '전화번호: ' + restaurant.phone;
        restaurantDiv.appendChild(phoneParagraph);
  
        // 음식점 사용자 리뷰 수 추가
        const userRevParagraph = document.createElement('p');
        userRevParagraph.textContent = '사용자 리뷰 수: ' + restaurant.user_rev;
        restaurantDiv.appendChild(userRevParagraph);
  
        // 음식점 평점 추가
        if (restaurant.ratings !== null) {
            const ratingsDiv = document.createElement('div');
            ratingsDiv.classList.add('ratings');
            const starImage = document.createElement('img');
            starImage.src = 'star.png'; // 여기에 별 이미지 URL을 넣어주세요
            ratingsDiv.appendChild(starImage);
            const ratingsSpan = document.createElement('span');
            ratingsSpan.textContent = restaurant.ratings;
            ratingsDiv.appendChild(ratingsSpan);
            restaurantDiv.appendChild(ratingsDiv);
        } else {
            const ratingsParagraph = document.createElement('p');
            ratingsParagraph.textContent = '평점 정보 없음';
            restaurantDiv.appendChild(ratingsParagraph);
        }
  
        // restaurantContainer에 추가
        restaurantContainer.appendChild(restaurantDiv);
    });
});
