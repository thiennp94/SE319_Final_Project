<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*, java.util.*,java.sql.*" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/levelselect.css">
    <title>Login</title>
</head>
<body class="background1">
    <div class="title">
        <h1>Login</h1>
    </div>
	<div>
		<form class="formformat" id="loginForm" action="" >
			<fieldset>
				<legend>Login Information</legend>
				<p>
				  <label for="username">User Name</label> 
				  <input id="username" name="username" />				 
				</p>
				<p>
					<label for="passwd">Password</label> 
					<input id="passwd" name="passwd" type="text" />
				</p>
				<p>
					<input type="button" id="login" name="login" value="Login" />
					<input type="reset" value="clear" />
				</p>
			</fieldset>
		</form>
	</div>
    <div class="back">
		<a href="./home.jsp"><button>Main Menu</button></a>
	</div>    
</body>
</html>