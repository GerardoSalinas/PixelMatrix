<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Matriz de Pixeles</title>
		<link rel="stylesheet" href="./assets/css/styles.css">
	</head>
	<body>
		<form action="service.jsp" method="get">
			<input id="pixelsInfo" type="hidden" name="pixels">
			<input id="sendButton" type="submit" value="Enviar"> 
		</form>
		
		<div id="container">
		</div>
		
		<script src="./assets/js/Action.js"></script>
		<script src="./assets/js/main.js" defer></script>
	</body>
</html>