<%@ page import="programLibraries.ImageMakerMonocrome" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% ImageMakerMonocrome image = new ImageMakerMonocrome();%>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Matriz de Pixeles</title>
	</head>
	<body>
		<div>
			<%=image.maker(request) %>
		</div>
	</body>
</html>