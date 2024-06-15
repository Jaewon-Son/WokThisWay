$(document).ready(function() {
    $("#loadData").click(function() {
        $.ajax({
            url: './fetchData.jsp',
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                // 데이터가 성공적으로 받아졌을 때
                console.log(data);

                for (const region in data) {
                    const regionList = data[region];
                    const regionTitle = region.charAt(0).toUpperCase() + region.slice(1) + " Restaurants";
                    displayRestaurants(regionList, regionTitle);
                }
            },
            error: function(xhr, status, error) {
                console.error("데이터 로드 실패:", status, error);
            }
        });
    });
});

function displayRestaurants(restaurants, title) {
    const container = $("#restaurantsContainer");
    const regionTitle = $("<h2>").text(title);
    container.append(regionTitle);

    const list = $("<ul>");
    restaurants.forEach(restaurant => {
        const listItem = $("<li>").text(`${restaurant.name} - ${restaurant.categories}`);
        list.append(listItem);
    });
    container.append(list);
}