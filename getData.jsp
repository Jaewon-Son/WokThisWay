<%@ page language="java" contentType="application/javascript; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%@ page import="java.sql.*" %>
<%@ page import="org.json.simple.*" %>

<%
    Connection con = null;
    PreparedStatement pstmt = null;
    String driverName = "org.gjt.mm.mysql.Driver";
    String dbURL = "jdbc:mysql://localhost:3306/mysql14";
    String sql = "select * from cheonan_rest";
    int rowCount = 0;

    try {
        Class.forName(driverName);
        con = DriverManager.getConnection(dbURL, "root", "kbc0924");
        pstmt = con.prepareStatement(sql);
        ResultSet result = pstmt.executeQuery();
        
        JSONArray jsonArray = new JSONArray();
        
        while (result.next()) {
            JSONObject obj = new JSONObject();
            obj.put("name", result.getString("name"));
            obj.put("categories", result.getInt("categories"));
            jsonArray.add(obj);
            rowCount++;
        }
        
        String callback = request.getParameter("callback");
        out.println(callback + "(" + jsonArray.toString() + ")");
        
        result.close();        
    }
    catch(Exception e) {
        e.printStackTrace();
    }
    finally {
        if(pstmt != null) pstmt.close();
        if(con != null) con.close();
    }
%>
