<%@ page contentType="application/json; charset=UTF-8" language="java" %>
<%@ page import="java.sql.*, java.util.*, com.fasterxml.jackson.databind.ObjectMapper" %>

<%
    String url = "jdbc:mysql://localhost:3306/jsp14";
    String user = "root";
    String password = "kbc0924";
    
    Connection conn = null;
    Statement stmt = null;
    ResultSet rs = null;
    Map<String, List<Map<String, Object>>> data = new HashMap<>();

    String[] regions = {
        "Cheonan", "Asan", "Hongsung", "Yesan", "Gongju", "Boryeong",
        "Cheongyang", "Buyeo", "Seocheon", "Nonsan", "Gyaeryong",
        "Geumsan", "Taean", "Seosan", "Dangjin"
    }; // 지역 테이블 이름 배열

    try {
        Class.forName("com.mysql.cj.jdbc.Driver"); // MySQL JDBC 드라이버 로드
        conn = DriverManager.getConnection(url, user, password); // 데이터베이스 연결

        for (String region : regions) {
            stmt = conn.createStatement();
            rs = stmt.executeQuery("SELECT * FROM " + region);

            List<Map<String, Object>> restaurants = new ArrayList<>();
            while (rs.next()) {
                Map<String, Object> restaurant = new HashMap<>();
                restaurant.put("name", rs.getString("name"));
                restaurant.put("categories", rs.getString("categories"));
                restaurant.put("address", rs.getString("address"));
                restaurant.put("phone", rs.getString("phone"));
                restaurant.put("user_rev", rs.getInt("user_rev"));
                restaurant.put("ratings", rs.getString("ratings"));
                restaurant.put("lat", rs.getDouble("lat"));
                restaurant.put("lng", rs.getDouble("lng"));
                restaurant.put("time", rs.getString("time"));
                restaurant.put("home_url", rs.getString("home_url"));
                restaurant.put("image_url", rs.getString("image_url"));
                restaurants.add(restaurant);
            }
            data.put(region.toLowerCase(), restaurants);
        }
    } catch (Exception e) {
        e.printStackTrace();
    } finally {
        try {
            if (rs != null) rs.close();
            if (stmt != null) stmt.close();
            if (conn != null) conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // JSON 데이터를 JavaScript 파일로 출력
    ObjectMapper objectMapper = new ObjectMapper();
    String json = objectMapper.writeValueAsString(data);
    out.print(json);
%>
