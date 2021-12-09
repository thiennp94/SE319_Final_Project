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
    <title>Level Select</title>
</head>
<body class="background2">
    <div class="title">
        <h1>Level</h1>
    </div>
    <div class="container">
        <div class="card">
            <div class="card-image">
				<h1>Level 1</h1>
				<div class="selector">
					<button onclick="location.href = '../jsp/Level1.jsp';">SELECT</button>
				</div>
            </div>

            <div class="card-footer">
                <p>Highest Score: 1000</p>
            </div>
        </div>

        <div class="card">
            <div class="card-image">
                <h1>Level 2</h1>
				<div class="selector">
					<button onclick="location.href = '../jsp/Level2.jsp';">SELECT</button>
				</div>
            </div>

            <div class="card-footer">
                <p>Highest Score: 1000</p>
            </div>
        </div>

        <div class="card">
            <div class="card-image">
                <h1>Level 3</h1>
				<div class="selector">
					<button onclick="location.href = '../jsp/Level3.jsp';">SELECT</button>
				</div>
            </div>

            <div class="card-footer">
                <p>Highest Score: 1000</p>
            </div>

        </div>
    </div>
	
	<div class="back">
		<a href="./home.jsp"><button>MAIN MENU</button></a>
	</div>
    
</body>
</html>