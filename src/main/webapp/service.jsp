<%@ page import="programLibraries.ImageMakerMonocrome" %>
<%@ page language="java" contentType="application/json; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% ImageMakerMonocrome image = new ImageMakerMonocrome();%>

<%=image.maker(request) %>
